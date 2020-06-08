﻿using System;
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
    }
}