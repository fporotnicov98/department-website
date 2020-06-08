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
        public string Password { get; set; }
        public string FIO { get; set; }
        public string RoleUser { get; set; }

        public Users(int id, string email, string password, string fIO, string roleUser)
        {
            Id = id;
            Email = email;
            Password = password;
            FIO = fIO;
            RoleUser = roleUser;
        }

        public Users(DataRow row)
        {
            Id = row.Field<int>("id");
            Email = row.Field<string>("Email");
            Password = row.Field<string>("Password");
            FIO = row.Field<string>("FIO");
            RoleUser = row.Field<string>("RoleUser");
        }
    }

    public class UsersWithoutId
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FIO { get; set; }
        public string RoleUser { get; set; }

        public UsersWithoutId(string email, string password, string fIO, string roleUser)
        {
            Email = email;
            Password = password;
            FIO = fIO;
            RoleUser = roleUser;
        }
    }

    public class UsersWithoutIdRole
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FIO { get; set; }

        public UsersWithoutIdRole(string email, string password, string fIO)
        {
            Email = email;
            Password = password;
            FIO = fIO;
        }
    }
}
