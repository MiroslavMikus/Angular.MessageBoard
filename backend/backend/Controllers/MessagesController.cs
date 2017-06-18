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
        private readonly ApiContext context;

        public MessagesController(ApiContext a_context)
        {
            context = a_context;
        }

        public IEnumerable<Message> Get()
        {
            return context.Messages;
        }

        [HttpGet("{name}")]
        public IEnumerable<Message> Get(string name)
        {
            return context.Messages.Where(a => string.Equals(a.Owner, name, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        [HttpPost]
        public Message Post([FromBody] Message a_message)
        {
            var dbMessage = context.Messages.Add(a_message).Entity;
            context.SaveChanges();
            return dbMessage;
        }
    }
}