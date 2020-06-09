using DepartmentWebApi.Models;
using NLog;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.DB
{
    public class UserManager
    {
        private static string connectionString = "Server=DepartmentServ;Database=Depart;User Id=Serv;Password=5w~M3m<-q&";
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        public static List<UsersWithoutPass> GetUsers()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandText = @"SELECT id, Email, FIO, RoleUser FROM Users";
                    DataTable table = new DataTable();
                    table.Load(command.ExecuteReader());
                    List<UsersWithoutPass> users = new List<UsersWithoutPass>();
                    foreach(DataRow row in table.Rows)
                    {
                        users.Add(new UsersWithoutPass(row.Field<int>("id"), row.Field<string>("Email"), row.Field<string>("FIO"), row.Field<string>("RoleUser")));
                    }
                    return users;
                }
            }
        }

        public static bool DeleteUser(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"DELETE FROM Users WHERE id = @Id";
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

        public static bool UpdateRole(int id, string Role)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"UPDATE Users SET RoleUser=@Role WHERE id = @Id";
                        command.Parameters.AddWithValue("@Id", id);
                        command.Parameters.AddWithValue("@Role", Role);
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
    }
}
