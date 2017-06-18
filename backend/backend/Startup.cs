using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace backend
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.

            services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase());

            services.AddCors(options => options.AddPolicy("Cors",
                builder => 
                {
                    builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                }));
            services.AddMvc();
        }

        public void SeedData(ApiContext a_context)
        {
            a_context.Messages.Add(new Message()
            {
                Owner = "MMI",
                Text = "Some Text from backend"
            });

            a_context.Messages.Add(new Message()
            {
                Owner = "ETR",
                Text = "Also some test text"
            });

            a_context.Users.Add(new User()
            {
                Email = "a",
                Password = "aa",
                FirstName = "Miroslav"
            });

            a_context.SaveChanges();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("this the secret pharse"));

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = signingKey,
                    ValidateLifetime = false,
                    ValidateIssuer = false,
                    ValidateAudience = false
                }
            });

            app.UseCors("Cors");
            app.UseMvc();


            SeedData(app.ApplicationServices.GetService<ApiContext>());
        }
    }
}
