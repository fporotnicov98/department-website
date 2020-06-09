using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class MessageForum
    {
        public int Id { get; set; }
        public int MessageId { get; set; }
        public int idForum { get; set; }
        public int idAuthor { get; set; }
        public string MessageText { get; set; }
        public DateTime MessageDate { get; set; }

        public MessageForum(int id, int messageId, int idForum, int idAuthor, string messageText, DateTime messageDate)
        {
            Id = id;
            MessageId = messageId;
            this.idForum = idForum;
            this.idAuthor = idAuthor;
            MessageText = messageText;
            MessageDate = messageDate;
        }

        public MessageForum(DataRow row, int id)
        {
            Id = row.Field<int>("id");
            MessageId = id;
            idForum = row.Field<int>("idForum");
            idAuthor = row.Field<int>("idAuthor");
            MessageText = row.Field<string>("MessageText");
            MessageDate = row.Field<DateTime>("MessageDate");
        }
    }

    public class MessageForumWithoutId
    {
        public int idForum { get; set; }
        public int idAuthor { get; set; }
        public string MessageText { get; set; }
        public DateTime MessageDate { get; set; }

        public MessageForumWithoutId(int idForum, int idAuthor, string messageText, DateTime messageDate)
        {
            this.idForum = idForum;
            this.idAuthor = idAuthor;
            MessageText = messageText;
            MessageDate = messageDate;
        }
    }


    public class MessageForumFIO
    {
        public int Id { get; set; }
        public int MessageId { get; set; }
        public int idForum { get; set; }
        public int idAuthor { get; set; }
        public string FIO { get; set; }
        public string MessageText { get; set; }
        public DateTime MessageDate { get; set; }

        public MessageForumFIO(int id, int messageId, int idForum, int idAuthor, string fIO, string messageText, DateTime messageDate)
        {
            Id = id;
            MessageId = messageId;
            this.idForum = idForum;
            this.idAuthor = idAuthor;
            FIO = fIO;
            MessageText = messageText;
            MessageDate = messageDate;
        }

        public MessageForumFIO(DataRow row, int id)
        {
            Id = row.Field<int>("id");
            MessageId = id;
            idForum = row.Field<int>("idForum");
            idAuthor = row.Field<int>("idAuthor");
            FIO = row.Field<string>("FIO");
            MessageText = row.Field<string>("MessageText");
            MessageDate = row.Field<DateTime>("MessageDate");
        }
    }
}
