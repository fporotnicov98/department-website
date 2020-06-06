using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class News
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public string Theme { get; set; }
        public string NewsText { get; set; }
        public DateTime NewsDate { get; set; }
        public int IsImportant { get; set; }

        public News(int id, int authorId, string theme, string news_Text, DateTime news_Date, int isimportant)
        {
            Id = id;
            AuthorId = authorId;
            Theme = theme;
            NewsText = news_Text;
            NewsDate = news_Date;
            IsImportant = isimportant;
        }

        public News(DataRow row)
        {
            Id = row.Field<int>("id");
            AuthorId = row.Field<int>("AuthorId");
            Theme = row.Field<string>("Theme");
            NewsText = row.Field<string>("NewsText");
            NewsDate = row.Field<DateTime>("NewsDate");
            IsImportant = row.Field<int>("isImportant");
        }
    }

    public class NewsWithoutId
    {
        public int AuthorId { get; set; }
        public string Theme { get; set; }
        public string NewsText { get; set; }
        public DateTime NewsDate { get; set; }
        public int IsImportant { get; set; }

        public NewsWithoutId(int authorId, string theme, string news_Text, DateTime news_Date, int isImportant)
        {
            AuthorId = authorId;
            Theme = theme;
            NewsText = news_Text;
            NewsDate = news_Date;
            IsImportant = isImportant;
        }
    }

    public class NewsAuthorName
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Theme { get; set; }
        public string NewsText { get; set; }
        public DateTime NewsDate { get; set; }
        public bool IsImportant { get; set; }

        public NewsAuthorName(int id, string author, string theme, string news_Text, DateTime news_Date, bool isImportant)
        {
            Id = id;
            Author = author;
            Theme = theme;
            NewsText = news_Text;
            NewsDate = news_Date;
            IsImportant = isImportant;
        }

        public NewsAuthorName(DataRow row)
        {
            Id = row.Field<int>("id");
            Author = "Тестовый"; //row.Field<string>("Login");
            Theme = row.Field<string>("Theme");
            NewsText = row.Field<string>("NewsText");
            NewsDate = row.Field<DateTime>("NewsDate");
            IsImportant = row.Field<bool>("isImportant");
        }
    }
    
    public class NewsWithoutAuthor
    {
        public int Id { get; set; }
        public string Theme { get; set; }
        public string NewsText { get; set; }
        public DateTime NewsDate { get; set; }
        public bool IsImportant { get; set; }

        public NewsWithoutAuthor(int id, string theme, string news_Text, DateTime news_Date, bool isImportant)
        {
            Id = id;
            Theme = theme;
            NewsText = news_Text;
            NewsDate = news_Date;
            IsImportant = isImportant;
        }
    }

    public class Slider
    {
        public int Id { get; set; }
        public bool IsImportant { get; set; }

        public Slider(int id, bool isImportant)
        {
            Id = id;
            IsImportant = isImportant;
        }
    }
}
