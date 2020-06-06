using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class PollsAnswerSecond
    {
        public int Id { get; set; }
        public int idPoll { get; set; }
        public int Vote1 { get; set; }
        public int Vote2 { get; set; }
        public int Vote3 { get; set; }
        public int Vote4 { get; set; }
        public int Vote5 { get; set; }

        public PollsAnswerSecond(int id, int idPoll, int vote1, int vote2, int vote3, int vote4, int vote5)
        {
            Id = id;
            this.idPoll = idPoll;
            Vote1 = vote1;
            Vote2 = vote2;
            Vote3 = vote3;
            Vote4 = vote4;
            Vote5 = vote5;
        }

        public PollsAnswerSecond(DataRow row)
        {
            Id = row.Field<int>("id");
            idPoll = row.Field<int>("idPoll");
            Vote1 = row.Field<int>("Vote1");
            Vote2 = row.Field<int>("Vote2");
            Vote3 = row.Field<int>("Vote3");
            Vote4 = row.Field<int>("Vote4");
            Vote5 = row.Field<int>("Vote5");
        }
    }

    public class PollsAnswerSecondWithoutId
    {
        public int idPoll { get; set; }
        public int Vote1 { get; set; }
        public int Vote2 { get; set; }
        public int Vote3 { get; set; }
        public int Vote4 { get; set; }
        public int Vote5 { get; set; }

        public PollsAnswerSecondWithoutId(int idPoll, int vote1, int vote2, int vote3, int vote4, int vote5)
        {
            this.idPoll = idPoll;
            Vote1 = vote1;
            Vote2 = vote2;
            Vote3 = vote3;
            Vote4 = vote4;
            Vote5 = vote5;
        }
    }
}
