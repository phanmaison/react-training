using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoApp.Service
{
    public class ServiceResult<TEntity> where TEntity : class
    {
        public bool Success { get; set; }

        public IEnumerable<TEntity> Result { get; set; }
    }
}
