using System.Security.Claims;
using DepartmentWebApi.DB;
using DepartmentWebApi.Models;
using DepartmentWebApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DepartmentWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }
        
        [HttpPost]
        [AllowAnonymous]
        [Route("Registration")]
        public IActionResult Registration(UsersWithoutId user)
        {
            if (_userService.Registration(user))
                return Ok("Пользователь успешно зарегистрирован");
            else
                return Problem("Не удалось зарегистрировать пользователя");
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("Authenticate")]
        public IActionResult Authenticate(AuthModel model)
        {
            string token = _userService.Authenticate(model.EMail, model.Password);
            return token == null ? Problem() : Ok(token);
        }

        [HttpPost]
        [Authorize]
        [Route("Authorization")]
        public IActionResult Authorization()
        {
            var claim = User.Claims.GetEnumerator();
            string email;
            if (claim.Current.Type != ClaimTypes.Email) return Problem();
            email = claim.Current.Value;
            return Ok(_userService.Authorization(email));
        }
    }
}