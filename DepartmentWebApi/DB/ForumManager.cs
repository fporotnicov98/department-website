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

        public static List<Forum> GetForum()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT * FROM Forum";

                        List<Forum> forums = new List<Forum>();
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());

                        foreach (DataRow row in table.Rows)
                        {
                            forums.Add(new Forum(row));
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


        public static bool AddForum(ForumWithoutId forum)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"INSERT INTO Forum VALUES(@Author, @Theme)";
                        command.Parameters.AddWithValue("@Author", forum.AuthorId);
                        command.Parameters.AddWithValue("@Theme", forum.Theme);
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

                        foreach (DataRow row in table.Rows)
                        {
                            messages.Add(new MessageForum(row));
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
