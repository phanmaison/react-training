using System.Collections.Generic;
using ToDoApp.Domain.Entity;
using ToDoApp.Domain.Enums;

namespace ToDoApp.Model
{
    public class ToDoModel : BaseModel
    {
        public List<ToDo> ToDos { get; set; }
        public int Count { get; set; }
    }
}
