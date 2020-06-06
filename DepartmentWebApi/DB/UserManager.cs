using NLog;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.DB
{
    public class UserManager
    {
        private static string connectionString = "Server=DepartmentServ;Database=Depart;User Id=Serv;Password=5w~M3m<-q&";
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        public static void GetUser()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {

                }
            }
        }

        public static void AddUser()
        {

        }
    }
}
