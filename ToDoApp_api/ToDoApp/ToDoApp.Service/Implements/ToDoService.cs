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
    public class ToDoService : IToDoService
    {
        private readonly ToDoAppDbContext _dbContext;
        private readonly IUserService _userService;
        public ToDoService(ToDoAppDbContext dbContext, IUserService userService)
        {
            _dbContext = dbContext;
            _userService = userService;
        }
        public async Task<Guid> Create(ToDo entity)
        {
            _dbContext.ToDoes.Add(entity);
            await _dbContext.SaveChangesAsync();
            return entity.Id;
        }

        public async Task<bool> Delete(Guid id)
        {
            var existedToDo = await _dbContext.ToDoes.FindAsync(id);
            if (existedToDo == null) { return false; }
            existedToDo.IsDeleted = true;
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<ToDo> FindById(Guid id)
        {
            return await _dbContext.ToDoes.FindAsync(id);
            //if(existedToDo == null)
            //{

            //}
        }

        public async Task<List<ToDo>> GetAll()
        {
            var lstToDo = await _dbContext.ToDoes.AsNoTracking().ToArrayAsync();
            if (lstToDo == null)
                return null;
            return lstToDo.ToList();
        }

        public async Task<List<ToDo>> GetToDoList(string userId)
        {
            var lstToDo = await _dbContext.ToDoes.AsNoTracking().Where(x => x.UserId == userId.ToString()).ToArrayAsync();
            if (lstToDo == null)
                return null;
            return lstToDo.ToList();
        }

        public async Task<string> Update(Guid id, ToDo entity)
        {
            var existedToDo = await _dbContext.ToDoes.FindAsync(id);
            if (existedToDo == null) { return string.Empty; }
            existedToDo.Content = entity.Content;
            existedToDo.ToDoStatus = entity.ToDoStatus;
            await _dbContext.SaveChangesAsync();
            return existedToDo.Id.ToString();
        }
    }
}
