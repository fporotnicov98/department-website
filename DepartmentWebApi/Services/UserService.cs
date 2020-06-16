using System;
using System.Collections;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using DepartmentWebApi.DB;
using DepartmentWebApi.Helpers;
using DepartmentWebApi.Models;
using Konscious.Security.Cryptography;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NLog;
using Org.BouncyCastle.Crypto.Paddings;

namespace DepartmentWebApi.Services
{
    public interface IUserService
    {
        string Authenticate(string email, string password);
        bool Registration(UsersWithoutId user);
        byte[] HashPassword(string Password);
        Users Authorization(string Email);
        string TokenAdmin(string Email);
    }

    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;

        private static readonly Logger logger = LogManager.GetCurrentClassLogger();


        public UserService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        public string Authenticate(string email, string password)
        {
            try
            {
                var argon2 = new Argon2i(Encoding.UTF8.GetBytes(password));
                argon2.Salt = Encoding.UTF8.GetBytes(_appSettings.Salt);
                argon2.DegreeOfParallelism = 16;
                argon2.MemorySize = 8192;
                argon2.Iterations = 40;
                byte[] hashPassword = argon2.GetBytes(512);
                string role = AuthManager.Authenticate(email, hashPassword);
                if (role == null)
                    return null;
                if (role.Equals("admin"))
                    return role;

                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, role)
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public bool Registration(UsersWithoutId user)
        {
            try
            {
                var argon2 = new Argon2i(Encoding.UTF8.GetBytes(user.Password));
                argon2.Salt = Encoding.UTF8.GetBytes(_appSettings.Salt);
                argon2.DegreeOfParallelism = 16;
                argon2.MemorySize = 8192;
                argon2.Iterations = 40;
                byte[] hashPassword = argon2.GetBytes(512);
                return AuthManager.Registration(user, hashPassword);
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return false;

            }

        }
        public byte[] HashPassword(string Password)
        {
            var argon2 = new Argon2i(Encoding.UTF8.GetBytes(Password));
            argon2.Salt = Encoding.UTF8.GetBytes(_appSettings.Salt);
            argon2.DegreeOfParallelism = 16;
            argon2.MemorySize = 8192;
            argon2.Iterations = 40;
            return argon2.GetBytes(512);
        }

        public string TokenAdmin(string Email)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, Email),
                    new Claim(ClaimTypes.Role, "admin")
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public Users Authorization(string Email)
        {
            return AuthManager.Authorization(Email);
        }
    }
}