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
        public IEnumerable<Message> Get()
        {
            return new Message[]
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
        }
    }
}