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
    public class NewsController : ControllerBase
    {
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        [HttpGet]
        [Route("GetNews")]
        public IActionResult GetNews() 
        {
            try
            {
                var result = NewsManager.GetNews();
                return Ok(result);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPut]
        [Route("UpdateNews")]
        public IActionResult UpdateNews(NewsWithoutAuthor news)
        {
            try
            {
                if (NewsManager.UpdateNews(news))
                    return Ok("Новости успешно обновлены");
                else
                    return Problem("Не удалось обновить новость");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }


        [HttpPut]
        [Route("UpdateNewsImportant")]
        public IActionResult UpdateNewsImportant(Slider news)
        {
            try
            {
                if (NewsManager.UpdateNewsImportant(news.Id, news.IsImportant))
                    return Ok("Статус новости успешно обновлен");
                else
                    return Problem("Не удалось обновить статус новости");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }

        [HttpPost]
        [Route("AddNews")]
        public IActionResult AddNews(NewsWithoutId news)
        {
            try
            {
                logger.Info("Добавление новости");
                if (NewsManager.AddNews(news))
                    return Ok("Новость успешно добавлена");
                else
                    return Problem("Не удалось добавить новость");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }
        [HttpDelete]
        [Route("DeleteNews")]
        public IActionResult DeleteNews(int id)
        {
            try
            {
                if (NewsManager.DeleteNews(id))
                    return Ok("Новость успешно удалена");
                else
                    return Problem("Не удалось удалить новость");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return Problem("Ошибка :(");
            }
        }


    }
}