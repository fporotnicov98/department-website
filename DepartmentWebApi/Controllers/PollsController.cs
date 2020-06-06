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
    public class PollsController : ControllerBase
    {
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();


        [HttpGet]
        [Route("GetPoll")]
        public IActionResult GetPoll()
        {
            try
            {
                var result = PollsManager.GetPoll();
                return Ok(result);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPost]
        [Route("AddPoll")]
        public IActionResult AddPoll(PollsWithoutId polls)
        {
            try
            {
                if (PollsManager.AddPoll(polls))
                    return Ok("Опрос успешно добавлен");
                else
                    return Problem("Не удалось добавить опрос");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPut]
        [Route("UpdatePoll")]
        public IActionResult UpdatePoll(Polls polls)
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
        [Route("DeletePoll")]
        public IActionResult DeletePoll(int id)
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


        [HttpGet]
        [Route("GetPollAnswerFirst")]
        public IActionResult GetPollAnswerFirst()
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
        [Route("AddPollAnswerFirst")]
        public IActionResult AddPollAnswerFirst()
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
        [Route("UpdatePollAnswerFirst")]
        public IActionResult UpdatePollAnswerFirst()
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
        [Route("DeletePollAnswerFirst")]
        public IActionResult DeletePollAnswerFirst()
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


        [HttpGet]
        [Route("GetPollAnswerSecond")]
        public IActionResult GetPollAnswerSecond()
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
        [Route("AddPollAnswerSecond")]
        public IActionResult AddPollAnswerSecond()
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
        [Route("UpdatePollAnswerSecond")]
        public IActionResult UpdatePollAnswerSecond()
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
        [Route("DeletePollAnswerSecond")]
        public IActionResult DeletePollAnswerSecond()
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