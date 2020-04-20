using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public async Task<User> Create(User entity)
        {
            _dbContext.Users.Add(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<User> Get(string userName)
        {
            var user = await _dbContext.Users.AsNoTracking().SingleOrDefaultAsync(x => x.UserName == userName);
            return user;
        }

        public async Task<List<User>> GetAll()
        {
            return await _dbContext.Users.ToListAsync();
        }

        public async Task<User> Login(string userName, string password)
        {
            var user =  _dbContext.Users.SingleOrDefault(x => x.UserName == userName);           
            if (user.Password == password)
                return user;
            else
                return null;
        }

        
    }

}
