using System;
using System.Data;
using System.Data.SqlClient;
using DepartmentWebApi.Models;
using NLog;

namespace DepartmentWebApi.DB
{
    public class AuthManager
    {
        private static string connectionString = "Server=DepartmentServ;Database=Depart;User Id=Serv;Password=5w~M3m<-q&";
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        
        public static string Authenticate(string email, byte[] hashPassword)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT RoleUser FROM Users WHERE Email = @Email AND Password = @Password";
                        command.Parameters.AddWithValue("@Email", email);
                        command.Parameters.AddWithValue("@Password", hashPassword);
                        string role = command.ExecuteScalar().ToString();
                        return role;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public static Users Authorization(string email)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT * FROM Users WHERE Email = @Email";
                        command.Parameters.AddWithValue("@Email", email);
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());
                        return new Users(table.Rows[0].Field<int>("id"), table.Rows[0].Field<string>("Email"), 
                            null, table.Rows[0].Field<string>("FIO"), table.Rows[0].Field<string>("RoleUser"));
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public static bool UserExist(string email)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT COUNT(*) FROM Users WHERE Email = @Email";
                        command.Parameters.AddWithValue("@Email", email);
                        return (int)command.ExecuteScalar() > 0;

                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }

        public static bool Registration(UsersWithoutId user, byte[] hashPassword)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText =
                            @"INSERT INTO Users VALUES(@Email, @Password, @FIO, @RoleUser)";
                        command.Parameters.AddWithValue("@Email", user.Email);
                        command.Parameters.AddWithValue("@Password", hashPassword);
                        command.Parameters.AddWithValue("@FIO", user.FIO);
                        command.Parameters.AddWithValue("@RoleUser", user.RoleUser);
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

        public static bool InsertUserTemporary(UsersWithoutIdRole user, byte[] hashPassword, string code)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"INSERT INTO UserTemporary VALUES(@Email, @Password, @FIO, @RoleUser, @Code, @Attempts)";
                        command.Parameters.AddWithValue("@Email", user.Email);
                        command.Parameters.AddWithValue("@Password", hashPassword);
                        command.Parameters.AddWithValue("@FIO", user.FIO);
                        command.Parameters.AddWithValue("@RoleUser", "user");
                        command.Parameters.AddWithValue("@Code", code);
                        command.Parameters.AddWithValue("@Attempts", 0);
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

        public static bool ExistCode(int code)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT Count(*) FROM UserTemporary WHERE Code = @Code";
                        command.Parameters.AddWithValue("@Code", code);
                        return (int)command.ExecuteScalar() > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }

        public static UserTemporary GetTemporaryUser(int code)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT * FROM UserTemporary WHERE Code = @Code";
                        command.Parameters.AddWithValue("@Code", code);
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());

                        UserTemporary user = new UserTemporary(table.Rows[0]);
                        return user;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public static bool DeleteTemporaryUser(int code)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"DELETE FROM UserTemporary WHERE Code = @Code";
                        command.Parameters.AddWithValue("@Code", code);
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