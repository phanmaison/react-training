using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoApp.Domain.Entity;
using ToDoApp.Model;
using ToDoApp.Service.Interfaces;

namespace ToDoApp.Controllers
{
    /// <summary>
    /// Authentication API
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : AppControllerBase
    {
        private readonly IUserService _userService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthController"/> class.
        /// </summary>
        /// <param name="userService">The user service.</param>
        public AuthController(IUserService userService)
        {
            _userService = userService;
        }
        // TODO: login user, if user is not exists => create new user

        /// <summary>
        /// Login user, if user is not exist then create new user
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("login")]

        public async Task<ActionResult> Login(LoginUserModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(new FailureModel
                {
                    Message = "Invalid model. Please try again!"
                });

            var userExisted = await _userService.IsExist(model.Username);

            if (userExisted)
            {
                var result = await _userService.Login(model.Username, "");
                //add session

                HttpContext.Session.SetString("Email", result.UserName);
                HttpContext.Session.SetString("idUser", result.Id.ToString());

                return Ok(result);
            }

            var newuser = await _userService.Create(new User
            {
                UserName = model.Username
            });
            HttpContext.Session.SetString("Email", newuser.UserName);
            HttpContext.Session.SetString("idUser", newuser.Id.ToString());
            return Ok(newuser);
        }


        /// <summary>
        /// Logouts of current session
        /// </summary>
        /// <returns></returns>
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