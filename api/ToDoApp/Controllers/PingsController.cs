using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ToDoApp.Controllers
{
    [Route("api/Pings")]
    [ApiController]
    public class PingsController : AppControllerBase
    {
        public PingsController()
        {
        }

        [HttpGet]
        [Route("")]
        public ActionResult Index()
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
