using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using ToDoApp.Domain.Entity;
using ToDoApp.Model;
using ToDoApp.Service.Interfaces;

namespace ToDoApp.Controllers
{
    [Route("api/Pings")]
    [ApiController]
    public class PingsController : ControllerBase
    {
        public PingsController()
        {
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult> Index()
        {
            return new ObjectResult(new
            {
                Code = 1,
                Data = new
                {
                    time = "2020/04/08 12:00",
                },
                Message = "Online"
            });
        }

    }
}
