using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        static List<Message> _messages = new List<Message>()
        {
            new Message()
            {
                Owner = "MMI",
                Text ="Some Text from backend"
            },
            new Message()
            {
                Owner = "ETR",
                Text = "Also some test text"
            }
        };

        public IEnumerable<Message> Get()
        {
            return _messages;
        }
        [HttpGet("{name}")]
        public IEnumerable<Message> Get(string name)
        {
            return _messages.Where(a => string.Equals(a.Owner, name, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        [HttpPost]
        public Message Post([FromBody] Message a_message)
        {
            _messages.Add(a_message);
            return a_message;
        }
    }
}