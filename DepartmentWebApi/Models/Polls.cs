using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class Polls
    {
        public int Id { get; set; }
        public string Theme { get; set; }
        public string PollType { get; set; }
        public DateTime PollDate { get; set; }

        public Polls(int id, string theme, string pollType, DateTime pollDate)
        {
            Id = id;
            Theme = theme;
            PollType = pollType;
            PollDate = pollDate;
        }


        public Polls(DataRow row)
        {
            Id = row.Field<int>("id");
            Theme = row.Field<string>("Theme");
            PollType = row.Field<string>("PollType");
            PollDate = row.Field<DateTime>("PollDate");
        }
    }

    public class PollsWithoutId
    {
        public string Theme { get; set; }
        public string PollType { get; set; }
        public DateTime PollDate { get; set; }

        public PollsWithoutId(string theme, string pollType, DateTime pollDate)
        {
            Theme = theme;
            PollType = pollType;
            PollDate = pollDate;
        }

    }

    public class PollsWithAnswer
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string PollType { get; set; }
        public DateTime PollDate { get; set; }
        public Answers[] Answers { get; set; }

        public PollsWithAnswer(int id, string theme, string pollType, DateTime pollDate, Answers[] answers)
        {
            Id = id;
            Question = theme;
            PollType = pollType;
            PollDate = pollDate;
            Answers = answers;
        }

        public PollsWithAnswer(DataRow row, int type)
        {
            if (type == 1)
            {
                Id = row.Field<int>("id");
                Question = row.Field<string>("Theme");
                PollType = row.Field<string>("PollType");
                PollDate = row.Field<DateTime>("PollDate");
                Answers answer = new Answers("Да", row.Field<int>("VoteYes"));
                Answers answer1 = new Answers("Нет", row.Field<int>("VoteNo"));
                Answers = new Answers[] { answer, answer1 };
            }
            else
            {
                Id = row.Field<int>("id");
                Question = row.Field<string>("Theme");
                PollType = row.Field<string>("PollType");
                PollDate = row.Field<DateTime>("PollDate");
                Answers answer = new Answers("1", row.Field<int>("Vote1"));
                Answers answer1 = new Answers("2", row.Field<int>("Vote2"));
                Answers answer2 = new Answers("3", row.Field<int>("Vote3"));
                Answers answer3 = new Answers("4", row.Field<int>("Vote4"));
                Answers answer4 = new Answers("5", row.Field<int>("Vote5"));
                Answers = new Answers[] { answer, answer1, answer2, answer3, answer4 };
            }
        }
    }
}
