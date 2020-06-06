using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                return Ok("Метод ничего не делает");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }



        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(UsersWithoutId users)
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
                return Ok("Метод ничего не делает");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }
    }
}