using Microsoft.EntityFrameworkCore;

using ToDoApp.Domain.Entity;

namespace ToDoApp.Domain
{
 

    public partial class ToDoAppDbContext : DbContext
    {
        public ToDoAppDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<ToDo> ToDoes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
