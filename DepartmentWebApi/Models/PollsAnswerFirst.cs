using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class PollsAnswerFirst
    {
        public int Id { get; set; }
        public int idPoll { get; set; }
        public int VoteYes { get; set; }
        public int VoteNo { get; set; }

        public PollsAnswerFirst(int id, int idPoll, int voteYes, int voteNo)
        {
            Id = id;
            this.idPoll = idPoll;
            VoteYes = voteYes;
            VoteNo = voteNo;
        }

        public PollsAnswerFirst(DataRow row)
        {
            Id = row.Field<int>("id");
            this.idPoll = row.Field<int>("idPoll");
            VoteYes = row.Field<int>("VoteYes");
            VoteNo = row.Field<int>("VoteNo");
        }
    }

    public class PollsAnswerFirstWithoutId
    {
        public int idPoll { get; set; }
        public int VoteYes { get; set; }
        public int VoteNo { get; set; }

        public PollsAnswerFirstWithoutId(int idPoll, int voteYes, int voteNo)
        {
            this.idPoll = idPoll;
            VoteYes = voteYes;
            VoteNo = voteNo;
        }
    }
}
