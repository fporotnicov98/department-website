using DepartmentWebApi.Models;
using NLog;
using NLog.Fluent;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.DB
{
    public class NewsManager
    {
        private static string connectionString = "Server=DepartmentServ;Database=Depart;User Id=Serv;Password=5w~M3m<-q&";
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        public static List<NewsAuthorName> GetNews()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT N.id, N.Theme, N.NewsText, N.NewsDate, N.isImportant FROM News N
                                                LEFT JOIN Users U ON N.AuthorId = U.id
                                                ORDER BY N.id DESC";
                        DataTable table = new DataTable();
                        List<NewsAuthorName> news = new List<NewsAuthorName>();
                        table.Load(command.ExecuteReader());

                        foreach (DataRow row in table.Rows)
                        {
                            news.Add(new NewsAuthorName(row));
                        }
                        return news;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public static bool AddNews(NewsWithoutId news)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = "INSERT INTO News VALUES(@AuthorId, @Theme, @NewsText, @NewsDate, @Important)";
                        command.Parameters.AddWithValue("@AuthorId", news.AuthorId);
                        command.Parameters.AddWithValue("@Theme", news.Theme);
                        command.Parameters.AddWithValue("@NewsText", news.NewsText);
                        command.Parameters.AddWithValue("@NewsDate", news.NewsDate);
                        command.Parameters.AddWithValue("@Important", news.IsImportant);
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

        public static bool DeleteNews(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"DELETE FROM News WHERE id = @id";
                        command.Parameters.AddWithValue("@id", id);
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

        public static bool UpdateNews(NewsWithoutAuthor news)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"UPDATE News SET Theme = @Theme, NewsText = @NewsText, NewsDate = @NewsDate, isImportant = @isImportant
                                                WHERE id = @Id";
                        command.Parameters.AddWithValue("@Theme", news.Theme);
                        command.Parameters.AddWithValue("@NewsText", news.NewsText);
                        command.Parameters.AddWithValue("@NewsDate", news.NewsDate);
                        command.Parameters.AddWithValue("@Id", news.Id);
                        command.Parameters.AddWithValue("@isImportant", news.IsImportant);
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

        public static bool UpdateNewsImportant(int id, bool isImportant)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = "UPDATE News SET isImportant = @Important WHERE id = @Id";
                        command.Parameters.AddWithValue("@Id", id);
                        command.Parameters.AddWithValue("@Important", isImportant);
                        command.ExecuteNonQuery();
                    }
                    return true;
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
