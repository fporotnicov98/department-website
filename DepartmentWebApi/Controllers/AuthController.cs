using System;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DepartmentWebApi.DB;
using DepartmentWebApi.Models;
using DepartmentWebApi.Services;
using Konscious.Security.Cryptography;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NLog;

namespace DepartmentWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        private IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }
        
        [HttpPost]
        [AllowAnonymous]
        [Route("Registration")]
        public IActionResult Registration(UsersWithoutIdRole user)
        {
            UsersWithoutId withoutId = new UsersWithoutId(user.Email, user.Password, user.FIO, "user");
            if (_userService.Registration(withoutId))
                return Ok("Пользователь успешно зарегистрирован");
            else
                return Problem("Не удалось зарегистрировать пользователя");
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("Authenticate")]
        public IActionResult Authenticate(AuthModel model)
        {
            try
            {
                if (model.Email.Length <= 0 || model.Password.Length <= 0)
                    return Unauthorized("Неправильный email или пароль");

                logger.Info($"Аутентификация, {model.Email}");
                string tn = _userService.Authenticate(model.Email, model.Password);

                var result = new
                {
                    token = tn,
                    resultCode = 0
                };
                if (tn == null) return Unauthorized("Неправильный email или пароль");

                return Ok(result);
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return Problem();
            }
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("Authorization")]
        public IActionResult Authorization()
        {
            try
            {
                var email = User.Claims.Where(x => x.Type == ClaimTypes.Email).Select(x => x.Value).ToList();
                logger.Debug($"Авторизация, email = {email[0]}");
                if (email.Count == 0) return Problem();
                return Ok(_userService.Authorization(email[0]));
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return Problem();
            }
        }

        [HttpPost]
        [Route("SendMail")]
        public IActionResult SendEmail(UsersWithoutIdRole user)
        {
            try
            {

                if (AuthManager.UserExist(user.Email))
                {
                    logger.Info($"Пользователь {user.Email} уже существует");
                    return Problem("Пользователь с таким email уже существует");
                }
                EmailService service = new EmailService();

                Random random = new Random();
                string code = random.Next(100000, 999999).ToString();
                if (AuthManager.InsertUserTemporary(user, _userService.HashPassword(user.Password), code))
                    service.SendEmailAsync(user.Email, "Код подтверждения для регистрации", $"Код: {code}");
                else
                    return Problem("Не удалось отправить email");
                return Ok(code);
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return Problem();
            }
        }

        [HttpGet]
        [Route("CodeRegistration")]
        public IActionResult CodeRegistration(int code)
        {
            if (AuthManager.ExistCode(code))
            {
                logger.Info("Code exist");
                var user = AuthManager.GetTemporaryUser(code);
                logger.Info(user.Email);
                if (AuthManager.Registration(new UsersWithoutId(user.Email, null, user.FIO, user.RoleUser), user.Password))
                {
                    AuthManager.DeleteTemporaryUser(code);
                    return Ok("Регистрация прошла успешно");
                }
                return Problem("Не удалось зарегистрировать пользователя при верном коде подтверждения");
            }
            else
            {
                return Problem("Неверно введен код подтверждения");
            }
        }
    }
}