using ToDoApp.Domain.Enums;

namespace ToDoApp.Domain.Entity
{
    public class ToDo : BaseEntity
    {
        public string Content { get; set; }
        public ToDoStatus ToDoStatus { get; set; }
        public string UserId { get; set; }
    }
}
