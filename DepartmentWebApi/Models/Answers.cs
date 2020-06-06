using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentWebApi.Models
{
    public class Answers
    {
        public string Option { get; set; }
        public int Votes { get; set; }

        public Answers(string option, int votes)
        {
            Option = option;
            Votes = votes;
        }
    }
}
