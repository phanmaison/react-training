using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.IO;
using ToDoApp.Domain;
using ToDoApp.Middleware;
using ToDoApp.Service.Implements;
using ToDoApp.Service.Interfaces;
using Newtonsoft.Json.Serialization;

namespace ToDoApp
{
    /// <summary>
    /// Start up the application
    /// </summary>
    public class Startup
    {

        private IHostingEnvironment _environment;

        /// <summary>
        /// Initializes a new instance of the <see cref="Startup"/> class.
        /// </summary>
        /// <param name="configuration">The configuration.</param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        /// <summary>
        /// Configures the services.
        /// </summary>
        /// <param name="services">The services.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddControllers();

            services.AddDbContext<ToDoAppDbContext>(options =>
                    options.UseSqlServer(
                        Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(60);//You can set Time
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "ToDo API",
                    Description = "A simple example ASP.NET Core Web API"
                });

                var xmlFile = $"ToDoApp.xml";
                var xmlPath = Path.Combine(_environment.ContentRootPath, xmlFile);
                c.IncludeXmlComments(xmlPath);

            });

            //Register services
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IToDoService, ToDoService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// <summary>
        /// Configures the specified application.
        /// </summary>
        /// <param name="app">The application.</param>
        /// <param name="env">The env.</param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            _environment = env;

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));
            app.UseSession();
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "TODOAPP API");
            });

            //app.Run(async context =>
            //{
            //    context.Response.Redirect("/swagger/index.html");
            //});
        }
    }
}
