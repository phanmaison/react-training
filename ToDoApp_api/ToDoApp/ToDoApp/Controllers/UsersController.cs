using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using ToDoApp.Domain.Entity;
using ToDoApp.Model;
using ToDoApp.Service.Interfaces;

namespace ToDoApp.Controllers
{
    /// <summary>
    /// User management
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [Route("api/user")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }


        /// <summary>
        /// Get all users
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("")]
        public async Task<ActionResult> Index()
        {
            var userNames = await _userService.GetAll();
            return Ok(userNames);
        }

        // POST: api/Users
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.

        /// <summary>
        /// Create new users
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns></returns>
        [HttpPost]
        [Route("create")]
        public async Task<ActionResult<User>> Create(UserModel user)
        {
            if (!ValidateEmail(user.Email))
            {
                return BadRequest(new FailureModel
                {
                    Message = "Invalid Email"
                });
            }
            if (await _userService.CheckExist(user.Email))
            {
                return BadRequest(new FailureModel
                {
                    Message = "This email is already in use"
                });
            }

            await _userService.Create(new User
            {
                UserName = user.Email
            });

            return Ok(new BaseModel
            {
                Success = true
            });
        }

        private static bool ValidateEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return false;
            }

            return Regex.Match(email, "^[a-z0-9_\\+-]+(\\.[a-z0-9_\\+-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*\\.([a-z]{2,4})$").Success;
        }
    }
}
