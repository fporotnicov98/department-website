using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class Forum
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public string Theme { get; set; }
        public DateTime ForumDate { get; set; }

        public Forum(int id, int authorId, string theme, DateTime forumDate)
        {
            Id = id;
            AuthorId = authorId;
            Theme = theme;
            ForumDate = forumDate;
        }

        public Forum(DataRow row)
        {
            Id = row.Field<int>("id");
            AuthorId = row.Field<int>("AuthorId");
            Theme = row.Field<string>("Theme");
            ForumDate = row.Field<DateTime>("ForumDate");
        }
    }

    public class ForumWithoutId
    {
        public int AuthorId { get; set; }
        public string Theme { get; set; }
        public DateTime ForumDate { get; set; }

        public ForumWithoutId(int authorId, string theme, DateTime forumDate)
        {
            AuthorId = authorId;
            Theme = theme;
            ForumDate = forumDate;
        }
    }

    public class ForumWithMessages
    {
        public int AuthorId { get; set; }
        public string Theme { get; set; }
        public DateTime ForumDate { get; set; }
        public List<MessageForum> messages { get; set; }
        public int CountMessages { get; set; }

        public ForumWithMessages(int authorId, string theme, DateTime forumDate, List<MessageForum> messages)
        {
            AuthorId = authorId;
            Theme = theme;
            ForumDate = forumDate;
            this.messages = messages;
        }

        public ForumWithMessages(DataRow row)
        {
            AuthorId = row.Field<int>("AuthorId");
            Theme = row.Field<string>("Theme");
            ForumDate = row.Field<DateTime>("ForumDate");
            messages = new List<MessageForum>();
        }
    }
}
