using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json.Linq;

namespace DepartmentWebApi.Models
{
    public class AuthModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        
    }
}