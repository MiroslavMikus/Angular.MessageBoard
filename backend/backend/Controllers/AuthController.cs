using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using backend.Models;

namespace backend.Controllers
{
    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class JwtPacket
    {
        public string Token { get; set; }
        public string FirstName { get; set; }
    }

    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly ApiContext context;

        public AuthController(ApiContext a_context)
        {
            context = a_context;
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginData a_loginData)
        {
            var user = context.Users
                .SingleOrDefault(a => string.Equals(a.Password, a_loginData.Password) && string.Equals(a.Email, a_loginData.Email));

            if (user == null)
                return NotFound("Email or passord incorrect");

            return Ok(CreateJwtPacket(user));
        }

        [HttpPost("register")]
        public JwtPacket Register([FromBody] User a_user)
        {
            context.Users.Add(a_user);

            context.SaveChanges();

            return CreateJwtPacket(a_user);
        }

        private JwtPacket CreateJwtPacket(User a_user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return new JwtPacket() { Token = encodedJwt, FirstName = a_user.FirstName };
        }
    }
}