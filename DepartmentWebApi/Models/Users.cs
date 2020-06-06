using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Position { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string RoleUser { get; set; }

        public Users(int id, string email, string login, string password, string position, string firstName, string lastName, string roleUser)
        {
            Id = id;
            Email = email;
            Login = login;
            Password = password;
            Position = position;
            FirstName = firstName;
            LastName = lastName;
            RoleUser = roleUser;
        }


        public Users(DataRow row)
        {
            Id = row.Field<int>("id");
            Email = row.Field<string>("Email");
            Login = row.Field<string>("Login");
            Password = row.Field<string>("Password");
            Position = row.Field<string>("Position");
            FirstName = row.Field<string>("FirstName");
            LastName = row.Field<string>("LastName");
            RoleUser = row.Field<string>("RoleUser");
        }
    }

    public class UsersWithoutId
    {
        public string Email { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Position { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string RoleUser { get; set; }

        public UsersWithoutId(string email, string login, string password, string position, string firstName, string lastName, string roleUser)
        {
            Email = email;
            Login = login;
            Password = password;
            Position = position;
            FirstName = firstName;
            LastName = lastName;
            RoleUser = roleUser;
        }
    }
}
