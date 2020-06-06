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

        public Forum(int id, int authorId, string theme)
        {
            Id = id;
            AuthorId = authorId;
            Theme = theme;
        }

        public Forum(DataRow row)
        {
            Id = row.Field<int>("id");
            AuthorId = row.Field<int>("AuthorId");
            Theme = row.Field<string>("Theme");
        }
    }

    public class ForumWithoutId
    {
        public int AuthorId { get; set; }
        public string Theme { get; set; }

        public ForumWithoutId(int authorId, string theme)
        {
            AuthorId = authorId;
            Theme = theme;
        }
    }
}
