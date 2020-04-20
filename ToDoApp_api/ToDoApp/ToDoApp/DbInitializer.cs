using System.Collections.Generic;
using System.Linq;
using ToDoApp.Domain;
using ToDoApp.Domain.Entity;
using ToDoApp.Domain.Enums;

namespace ToDoApp
{
    public static class DbInitializer
    {
        public static void Seed(ToDoAppDbContext context)
        {
            if (!context.Users.Any())
            {

                var users = new List<User>()
                {
                    new User
                    {
                        UserName = "johndoe@gmail.com"
                    },
                    new User
                    {
                        UserName = "janedoe@yahoo.com"
                    },
                    new User
                    {
                        UserName = "andy@example.com"
                    },
                    new User
                    {
                        UserName = "john@example.com"
                    },
                    new User
                    {
                        UserName = "bill.gates@ms.com"
                    },
                    new User
                    {
                        UserName = "steve.jobs@apple.com"
                    },
                    new User
                    {
                        UserName = "mark@fb.com"
                    },
                    new User
                    {
                        UserName = "elton.john@singer.com"
                    },
                    new User
                    {
                        UserName = "brad.pitt@actor.com"
                    },
                    new User
                    {
                        UserName = "gal.gadot@actress.com"
                    }
                };

                context.Users.AddRange(users);
                context.SaveChanges();
            }

            if (!context.ToDoes.Any())
            {
                var todos = new List<ToDo>
                {
                    new ToDo
                    {
                        Content = "ToDo 1",
                        ToDoStatus = ToDoStatus.Active
                    },
                    new ToDo
                    {
                        Content = "ToDo 2",
                        ToDoStatus = ToDoStatus.Active
                    },
                    new ToDo
                    {
                        Content = "ToDo 3",
                        ToDoStatus = ToDoStatus.Active
                    },
                    new ToDo
                    {
                        Content = "ToDo 4",
                        ToDoStatus = ToDoStatus.Inactive
                    },

                };

                context.ToDoes.AddRange(todos);
                context.SaveChanges();
            }
        }
    }
}
