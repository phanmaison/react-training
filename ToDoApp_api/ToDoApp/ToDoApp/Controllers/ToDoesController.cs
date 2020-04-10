using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoApp.Domain.Entity;
using ToDoApp.Model;
using ToDoApp.Service.Interfaces;

namespace ToDoApp.Controllers
{
    /// <summary>
    /// Task management
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoesController : ControllerBase
    {
        private readonly IToDoService _toDoService;
        private readonly IUserService _userService;
        public ToDoesController(IToDoService toDoService, IUserService userService)
        {
            _toDoService = toDoService;
            _userService = userService;
        }

        // GET: api/ToDo

        /// <summary>
        /// Get all tasks
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<IEnumerable<ToDo>>> Gets()
        {
            var result = await _toDoService.GetAll();
            return Ok(new ToDoModel
            {
                ToDos = result,
                Success = true,
                Count = result.Count
            });

        }

        // GET: api/ToDo/5

        /// <summary>
        /// Get tasks by taskId
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDo>> Get(Guid id)
        {
            var result = await _toDoService.FindById(id);
            if (result == null)
            {
                return BadRequest(new FailureModel
                {
                    Message = "Not found todo"
                });
            }

            return Ok(result);
        }

        /// <summary>
        /// Get tasks by userId
        /// </summary>
        /// <param name="userId">The user identifier.</param>
        /// <returns></returns>
        [HttpGet("gettodobyuserid/{id}")]
        public async Task<ActionResult<IEnumerable<ToDo>>> GetToDoByUserId(string userId)
        {
            var user = _userService.Get(userId);
            if(user == null)
            {
                return NotFound(new FailureModel
                {
                    Message = "User name is not found"
                });
            }
            var result = await _toDoService.GetToDoList(userId);
            return Ok(new ToDoModel
            {
                ToDos = result,
                Success = true,
                Count = result.Count
            });
            
        }

        // PUT: api/ToDoes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.

        /// <summary>
        /// Update task
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDo(Guid id, ToDo model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result = await _toDoService.Update(id, model);
                    if (string.IsNullOrEmpty(result.ToString()))
                    {
                        return BadRequest(new FailureModel
                        {
                            Message = "Can't find todo!"
                        });
                    }
                    return Ok(result);
                }
                return BadRequest(new FailureModel
                {
                    Message = "Invalid model. Please try again!"
                });

            }
            catch (Exception ex)
            {
                return BadRequest(new FailureModel
                {
                    Message = "Update todo failed. Please try again."
                });
            }
        }

        // POST: api/ToDoes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.


        /// <summary>
        /// Create new task
        /// </summary>
        /// <param name="model">The model.</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<ToDo>> Post(ToDo model)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    await _toDoService.Create(new ToDo
                    {
                        Content = model.Content,
                        ToDoStatus = model.ToDoStatus,
                        UserId = model.UserId
                    });

                    return Ok(new BaseModel
                    {
                        Success = true
                    });
                }
                return BadRequest(new FailureModel
                {
                    Message = "Invalid model. Please try again!"
                });
            }
            catch(Exception ex)
            {
                return BadRequest(new FailureModel
                {
                    Message = "Add new todo failed. Please try again."
                });
            }
        }

        // DELETE: api/ToDoes/5
        /// <summary>
        /// Delete task by Id
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<ToDo>> DeleteToDo(Guid id)
        {
            try
            {
                var result = await _toDoService.Delete(id);
                if (!result)
                {
                    return BadRequest(new FailureModel
                    {
                        Message = "Can't find todo"
                    });
                }

                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(new FailureModel
                {
                    Message = "Delete todo failed. Please try again."
                });
            }
        }

    }
}
