using System;
using System.Threading.Tasks;
using ToDoApp.Domain.Entity;

namespace ToDoApp.Service.Interfaces
{
    public interface IUserService
    {
        Task<User> Get(string userName);
        Task<string[]> GetUserNames();
        Task<bool> CheckExist(string userName);
        Task<Guid> Create(User entity);
        Task<string[]> GetTaskList(string userName);
    }
}
