using System;
using System.Linq;
using System.Security.Claims;
using DepartmentWebApi.DB;
using DepartmentWebApi.Models;
using DepartmentWebApi.Services;
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
                string tn = _userService.Authenticate(model.Email, model.Password);

                var result = new
                {
                    token = tn,
                    resultCode = 0
                };
                if (tn == null) return Unauthorized("Неправильный email или пароль");
                logger.Info($"Аутентификация, {model.Email}");
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
    }
}