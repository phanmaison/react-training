using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ToDoApp.Domain;
using ToDoApp.Domain.Entity;

namespace ToDoApp.Service.Implements
{
    public abstract class ServiceBase
    {
        protected readonly ToDoAppDbContext DbContext;

        /// <summary>
        /// Initializes a new instance of the <see cref="ServiceBase"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        protected ServiceBase(ToDoAppDbContext context)
        {
            DbContext = context;
        }
    }

    public abstract class GenericServiceBase<T> : ServiceBase where T : BaseEntity
    {
        protected GenericServiceBase(ToDoAppDbContext context) : base(context)
        {
        }

        protected DbSet<T> DbSet => this.DbContext.Set<T>();

        /// <summary>
        /// Gets the by id
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        public T GetById(Guid id)
        {
            return DbSet.SingleOrDefault(x => x.Id == id);
        }

        /// <summary>
        /// Gets all
        /// </summary>
        /// <returns></returns>
        public List<T> GetAll()
        {
            return DbSet.ToList();
        }

        public virtual void Insert(T entity)
        {
            DbSet.Add(entity);
            DbContext.SaveChanges();
        }


        public virtual void Update(T entity)
        {
            DbSet.Add(entity);
            DbContext.SaveChanges();
        }
    }
}
