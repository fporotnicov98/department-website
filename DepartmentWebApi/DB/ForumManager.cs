using DepartmentWebApi.Models;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using NLog;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.DB
{
    public class ForumManager
    {
        private static string connectionString = "Server=DepartmentServ;Database=Depart;User Id=Serv;Password=5w~M3m<-q&";
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        public static List<ForumWithCount> GetForum()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT * FROM Forum";

                        List<ForumWithCount> forums = new List<ForumWithCount>();
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());

                        foreach (DataRow row in table.Rows)
                        {
                            ForumWithCount forum = new ForumWithCount(row);
                            int count = GetForumMessages(row.Field<int>("id")).Count;
                            forum.CountMessages = count;
                            forums.Add(forum);
                        }
                        return forums;
                    }
                }
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public static ForumWithMessages GetForumById(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    ForumWithMessages forum;
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT * FROM Forum WHERE id = @Id";
                        command.Parameters.AddWithValue("@Id", id);
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());
                        forum = new ForumWithMessages(table.Rows[0]);

                    }
                    using(SqlCommand commandSql = connection.CreateCommand())
                    {
                        commandSql.CommandText = @"SELECT M.id, M.idForum, U.FIO, M.MessageText, M.MessageDate FROM MessageForum M INNER JOIN Users U ON M.idAuthor = U.id WHERE idForum = @Id";
                        commandSql.Parameters.AddWithValue("@Id", id);
                        DataTable table = new DataTable();
                        table.Load(commandSql.ExecuteReader());
                        List<MessageForumFIO> messages = new List<MessageForumFIO>();

                        int idMessage = 1;
                        foreach(DataRow row in table.Rows)
                        {
                            messages.Add(new MessageForumFIO(row, idMessage));
                            idMessage++;
                        }
                        forum.messages = messages;
                        forum.CountMessages = messages.Count-1;
                        if (messages.Count == 0) forum.CountMessages = 0;
                        return forum;
                    }

                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }


        public static bool AddForum(ForumWithoutId forum)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"INSERT INTO Forum VALUES(@Author, @Theme, @ForumDate)";
                        command.Parameters.AddWithValue("@Author", forum.AuthorId);
                        command.Parameters.AddWithValue("@Theme", forum.Theme);
                        command.Parameters.AddWithValue("@ForumDate", forum.ForumDate);
                        command.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }

        public static bool DeleteForum(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"DELETE FROM Forum WHERE id = @Id";
                        command.Parameters.AddWithValue("@Id", id);
                        command.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }

        public static bool UpdateForum(Forum forum)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"UPDATE Forum SET AuthorId = @AuthorId, Theme = @Theme WHERE id = @Id";
                        command.Parameters.AddWithValue("@AuthorId", forum.AuthorId);
                        command.Parameters.AddWithValue("@Theme", forum.Theme);
                        command.Parameters.AddWithValue("@Id", forum.Id);
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {

                logger.Error(ex);
                return false;
            }
        }

        public static List<MessageForum> GetForumMessages(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = "SELECT * FROM MessageForum Where idForum = @id";
                        command.Parameters.AddWithValue("@id", id);

                        List<MessageForum> messages = new List<MessageForum>();
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());
                        int idMessage = 1;
                        foreach (DataRow row in table.Rows)
                        {
                            messages.Add(new MessageForum(row, idMessage));
                            idMessage++;
                        }
                        return messages;
                    }
                }
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public static bool AddForumMessage(MessageForumWithoutId message)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = "INSERT INTO MessageForum VALUES(@idForum, @idAuthor, @MessageText, @MessageDate)";
                        command.Parameters.AddWithValue("@idForum", message.idForum);
                        command.Parameters.AddWithValue("@idAuthor", message.idAuthor);
                        command.Parameters.AddWithValue("@MessageText", message.MessageText);
                        command.Parameters.AddWithValue("@MessageDate", message.MessageDate);
                        command.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }

        public static bool DeleteForumMessage(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = "DELETE FROM MessageForum WHERE id = @Id";
                        command.Parameters.AddWithValue("@Id", id);
                        command.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }

        public static bool UpdateForumMessage(MessageForum message)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"UPDATE ForumMessage SET idForum = @idForum, idAuthor = @idAuthor, MessageText = @MessageText, MessageDate = @MessageDate
                                                WHERE id = @Id";
                        command.Parameters.AddWithValue("@Id", message.Id);
                        command.Parameters.AddWithValue("@idForum", message.idForum);
                        command.Parameters.AddWithValue("@idAuthor", message.idAuthor);
                        command.Parameters.AddWithValue("@MessageText", message.MessageText);
                        command.Parameters.AddWithValue("@MessageDate", message.MessageDate);

                        command.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }
    }
}
