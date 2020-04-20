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
    public class UserService : GenericServiceBase<User>, IUserService
    {
        public UserService(ToDoAppDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<bool> CheckExist(string userName)
        {
            return await DbContext.Users.AnyAsync(x => x.UserName == userName);
        }

        public async Task<User> Create(User entity)
        {
            DbContext.Users.Add(entity);
            await DbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<User> Get(string userName)
        {
            var user = await this.DbSet.AsNoTracking().SingleOrDefaultAsync(x => x.UserName == userName);
            return user;
        }

        public async Task<List<User>> GetAll()
        {
            return await this.DbSet.ToListAsync();
        }


        public async Task<User> Login(string userName, string password)
        {
            var user = this.DbSet.SingleOrDefault(x => x.UserName == userName);
            return user;
        }
    }

}
