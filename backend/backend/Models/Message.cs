using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Message
    {
        public int ID { get; set; }
        public string Owner { get; set; }
        public string Text { get; set; }
    }
}
