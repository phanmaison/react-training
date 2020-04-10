using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoApp.Domain.Entity;
using ToDoApp.Model;
using ToDoApp.Service.Interfaces;

namespace ToDoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        public AuthController(IUserService userService)
        {
            _userService = userService;
        }
        // TODO: login user, if user is not exists => create new user
        
        [HttpPost]
        [Route("login")]
        
        public async Task<ActionResult> Login(UserModel model)
        {
            if (ModelState.IsValid)
            {
                var userExisted = await _userService.CheckExist(model.Email);
                if (userExisted)
                {
                    var result = await _userService.Login(model.Email, model.Password);
                    //add session
                    
                    HttpContext.Session.SetString("Email", result.UserName);
                    HttpContext.Session.SetString("idUser", result.Id.ToString());

                    return Ok(result);
                }
                else
                {
                    var newuser = await _userService.Create(new User
                    {
                        UserName = model.Email
                    });
                    HttpContext.Session.SetString("Email", newuser.UserName);
                    HttpContext.Session.SetString("idUser", newuser.Id.ToString());
                    return Ok(newuser);
                }
            }
            return BadRequest(new FailureModel
            {
                Message = "Invalid model. Please try again!"
            });
        }


        //Logout
        [HttpPost]
        [Route("logout")]
        public ActionResult Logout()
        {
            HttpContext.Session.Clear();//remove session
            return Ok(new BaseModel
            {
                Success = true
            });
        }

    }
}