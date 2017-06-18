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
    public class JwtPacket
    {
        public string Token { get; set; }
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


        [HttpPost("register")]
        public JwtPacket Register([FromBody] User a_user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            context.Users.Add(a_user);
            context.SaveChanges();

            return new JwtPacket() { Token = encodedJwt };
        }
    }
}