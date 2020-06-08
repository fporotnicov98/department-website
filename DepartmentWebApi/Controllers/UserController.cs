using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DepartmentWebApi.DB;
using DepartmentWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;

namespace DepartmentWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        [HttpGet]
        [Route("GetUser")]
        public IActionResult GetUser()
        {
            try
            {
                var list = UserManager.GetUsers();
                return Ok(list);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }


        [HttpPut]
        [Route("UpdateUser")]
        public IActionResult UpdateUser(Users users)
        {
            try
            {
                return Ok("Метод ничего не делает");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpDelete]
        [Route("DeleteUser")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                if (UserManager.DeleteUser(id))
                    return Ok("Пользователь успешно удален");
                else
                    return Problem("Не удалось удалить пользователя");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPut]
        [Route("UpdateRole)")]
        public IActionResult UpdateRole(UpdateUserRole user)
        {
            try
            {
                if (UserManager.UpdateRole(user.Id, user.UserRole))
                    return Ok("Роль успешно обновлена");
                else
                    return Problem("Не удалось обновить роль пользователя");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }
    }
}