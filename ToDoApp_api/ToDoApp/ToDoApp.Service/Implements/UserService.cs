using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using ToDoApp.Domain;
using ToDoApp.Domain.Entity;
using ToDoApp.Service.Interfaces;

namespace ToDoApp.Service.Implements
{
    public class UserService : IUserService
    {
        private readonly ToDoAppDbContext _dbContext;
        public UserService(ToDoAppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> CheckExist(string userName)
        {
            return await _dbContext.Users.AnyAsync(x => x.UserName == userName);
        }

        public async Task<Guid> Create(User entity)
        {
            _dbContext.Users.Add(entity);
            await _dbContext.SaveChangesAsync();
            return entity.Id;
        }

        public async Task<User> Get(string userName)
        {
            var user = await _dbContext.Users.AsNoTracking().SingleOrDefaultAsync(x => x.UserName == userName);
            return user;
        }

        public Task<string[]> GetTaskList(string userName)
        {
            throw new NotImplementedException();
        }

        public async Task<string[]> GetUserNames()
        {
            return await _dbContext.Users.AsNoTracking().Select(x => x.UserName).ToArrayAsync();
        }
    }

}
