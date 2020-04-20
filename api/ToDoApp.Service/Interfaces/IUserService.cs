using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoApp.Domain.Entity;

namespace ToDoApp.Service.Interfaces
{
    public interface IUserService
    {
        Task<User> Get(string userName);
        Task<List<User>> GetAll();
        Task<bool> IsExist(string userName);
        Task<User> Create(User entity);
        Task<User> Login(string userName, string password);
    }
}
