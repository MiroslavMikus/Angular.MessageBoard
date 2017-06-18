using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{
    public class EditProfileData
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private readonly ApiContext context;

        public UsersController(ApiContext a_context)
        {
            context = a_context;
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id)
        {
            var user = context.Users.SingleOrDefault(a => string.Equals(a.ID, id));

            if (user == null)
                return NotFound("User not found");

            return Ok(user);
        }

        [Authorize]
        [HttpGet("me")]
        public ActionResult Get()
        {
            return Ok(GetSecuredUser());
        }

        [Authorize]
        [HttpPost("me")]
        public ActionResult Post([FromBody] EditProfileData a_profileData)
        {
            var user = GetSecuredUser();

            user.FirstName = a_profileData.FirstName ?? user.FirstName;
            user.LastName = a_profileData.LastName ?? user.LastName;

            context.SaveChanges();
            return Ok(user);
        }

        private User GetSecuredUser()
        {
            var id = HttpContext.User.Claims.First().Value;

            return context.Users.SingleOrDefault(a => a.ID == id);
        }
    }
}