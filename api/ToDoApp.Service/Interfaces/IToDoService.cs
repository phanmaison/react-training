using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoApp.Domain.Entity;

namespace ToDoApp.Service.Interfaces
{
    public interface IToDoService
    {
        Task<List<ToDo>> GetAll();
        Task<List<ToDo>> GetToDoList(string userId);
        Task<Guid> Create(ToDo entity);
        Task<string> Update(Guid id, ToDo entity);
        Task<ToDo> FindById(Guid id);
        Task<bool> Delete(Guid id);
    }
}
