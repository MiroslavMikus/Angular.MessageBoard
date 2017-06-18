using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using backend.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

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
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("this the secret pharse"));

            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var claims = new Claim[] { new Claim(JwtRegisteredClaimNames.Sub, a_user.ID)};

            var jwt = new JwtSecurityToken(claims: claims, signingCredentials: signingCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return new JwtPacket() { Token = encodedJwt, FirstName = a_user.FirstName };
        }
    }
}