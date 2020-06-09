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

    public class UserTemporary
    {
        public string Email { get; set; }
        public byte[] Password { get; set; }
        public string FIO { get; set; }
        public string RoleUser { get; set; }
        public string Code { get; set; }
        public int Attempts { get; set; }

        public UserTemporary(string email, byte[] password, string fIO, string roleUser, string code, int attempts)
        {
            Email = email;
            Password = password;
            FIO = fIO;
            RoleUser = roleUser;
            Code = code;
            Attempts = attempts;
        }

        public UserTemporary(DataRow row)
        {
            Email = row.Field<string>("Email");
            Password = row.Field<byte[]>("Password");
            FIO = row.Field<string>("FIO");
            RoleUser = row.Field<string>("RoleUser");
            Code = row.Field<string>("Code");
            Attempts = row.Field<int>("Attempts");
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

    public class UsersWithoutPass
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FIO { get; set; }
        public string RoleUser { get; set; }

        public UsersWithoutPass(int id, string email, string fIO, string roleUser)
        {
            Id = id;
            Email = email;
            FIO = fIO;
            RoleUser = roleUser;
        }
    }

    public class UpdateUserRole
    {
        public int Id { get; set; }
        public string UserRole { get; set; }

        public UpdateUserRole(int id, string userRole)
        {
            Id = id;
            UserRole = userRole;
        }
    }
}
