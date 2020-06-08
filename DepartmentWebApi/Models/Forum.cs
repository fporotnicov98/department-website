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
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public string Theme { get; set; }
        public DateTime ForumDate { get; set; }
        public List<MessageForumFIO> messages { get; set; }
        public int CountMessages { get; set; }

        public ForumWithMessages(int id, int authorId, string theme, DateTime forumDate, List<MessageForumFIO> messages, int countMessages)
        {
            Id = id;
            AuthorId = authorId;
            Theme = theme;
            ForumDate = forumDate;
            this.messages = messages;
            CountMessages = countMessages;
        }

        public ForumWithMessages(DataRow row)
        {
            Id = row.Field<int>("id");
            AuthorId = row.Field<int>("AuthorId");
            Theme = row.Field<string>("Theme");
            ForumDate = row.Field<DateTime>("ForumDate");
            messages = new List<MessageForumFIO>();
        }
    }


    public class ForumWithCount
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public string Theme { get; set; }
        public DateTime ForumDate { get; set; }
        public int CountMessages { get; set; }

        public ForumWithCount(DataRow row)
        {
            Id = row.Field<int>("id");
            AuthorId = row.Field<int>("AuthorId");
            Theme = row.Field<string>("Theme");
            ForumDate = row.Field<DateTime>("ForumDate");
            CountMessages = 0;
        }
    }
}
