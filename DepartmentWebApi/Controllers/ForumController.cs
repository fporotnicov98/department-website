using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DepartmentWebApi.DB;
using DepartmentWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using NLog.Fluent;

namespace DepartmentWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ForumController : ControllerBase
    {
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        [HttpGet]
        [Route("GetForum")]
        public IActionResult GetForum()
        {
            try
            {
                var result = ForumManager.GetForum();
                logger.Info($"Кол-во форумов {result.Count}");
                return Ok(result);
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }
        [HttpGet]
        [Route("GetForumById")]
        public IActionResult GetForumById(int id)
        {
            var forum = ForumManager.GetForumById(id);
            if (forum == null) return Problem("Не удалось получить форум");
            return Ok(forum);
        }

        [HttpPost]
        [Route("AddForum")]
        public IActionResult AddForum(ForumWithoutId forum)
        {
            try
            {
                if (ForumManager.AddForum(forum))
                    return Ok("Форум успешно добавлен");
                else
                    return Problem("Не удалось создать форум");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPut]
        [Route("UpdateForum")]
        public IActionResult UpdateForum(Forum forum)
        {
            try
            {
                if (ForumManager.UpdateForum(forum))
                    return Ok("Форум успешно обновлен");
                else
                    return Problem("Не удалось обновить форум");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpDelete]
        [Route("DeleteForum")]
        public IActionResult DeleteForum(int id)
        {
            try
            {
                if (ForumManager.DeleteForum(id))
                    return Ok("Успешно удален");
                else
                    return Problem("Не удалось удалить форум");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }


        [HttpGet]
        [Route("GetForumMessage")]
        public IActionResult GetForumMessage(int idForum)
        {
            try
            {
                var result = ForumManager.GetForumMessages(idForum);
                return Ok(result);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPost]
        [Route("AddForumMessage")]
        public IActionResult AddForumMessage(MessageForumWithoutId messageForum)
        {
            try
            {
                if (ForumManager.AddForumMessage(messageForum))
                    return Ok("Сообщение успешно добавлено");
                else
                    return Problem("Не удалось добавить сообщение");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPut]
        [Route("UpdateForumMessage")]
        public IActionResult UpdateForumMessage(MessageForum messageForum)
        {
            try
            {
                if (ForumManager.UpdateForumMessage(messageForum))
                    return Ok("Сообщение успешно обновлено");
                else
                    return Problem("Не удалось обновить сообщение");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpDelete]
        [Route("DeleteForumMessage")]
        public IActionResult DeleteForumMessage(int id)
        {
            try
            {
                if (ForumManager.DeleteForumMessage(id))
                    return Ok("Сообщение успешно удалено");
                else
                    return Problem("Не удалось удалить сообщение");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

    }
}