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
    public class PollsManager
    {
        private static string connectionString = "Server=DepartmentServ;Database=Depart;User Id=Serv;Password=5w~M3m<-q&";
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        public static List<PollsWithAnswer> GetPoll()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    List<PollsWithAnswer> result;
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT P.id, P.Theme, P.PollType, P.PollDate, F.VoteYes, F.VoteNo FROM Polls P INNER JOIN PollsAnswerFirst F ON P.id = F.idPoll";
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());

                        result = new List<PollsWithAnswer>();

                        foreach (DataRow row in table.Rows)
                        {
                            result.Add(new PollsWithAnswer(row, 1));
                        }
                    }

                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = @"SELECT P.id, P.Theme, P.PollType, P.PollDate, F.Vote1, F.Vote2, F.Vote3, F.Vote4, F.Vote5 FROM Polls P INNER JOIN PollsAnswerSecond F ON P.id = F.idPoll";
                        DataTable table = new DataTable();
                        table.Load(command.ExecuteReader());


                        foreach (DataRow row in table.Rows)
                        {
                            result.Add(new PollsWithAnswer(row, 2));
                        }
                    }
                    return result;

                }
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return null;
            }
        }

        public static bool AddPoll(PollsWithoutId polls)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandText = "INSERT INTO Polls VALUES(@Theme, @PollType, @PollDate)";
                        command.Parameters.AddWithValue("@Theme", polls.Theme);
                        command.Parameters.AddWithValue("@PollType", polls.PollType);
                        command.Parameters.AddWithValue("@PollDate", polls.PollDate);
                        command.ExecuteNonQuery();
                    }
                }
                return true;
            }
            catch(Exception ex)
            {
                logger.Error(ex);
                return false;
            }
        }
    }
}
