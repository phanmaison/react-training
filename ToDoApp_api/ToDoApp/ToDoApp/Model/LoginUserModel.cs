using System.ComponentModel.DataAnnotations;

namespace ToDoApp.Model
{
    /// <summary>
    /// Model for login user
    /// </summary>
    public class LoginUserModel
    {
        /// <summary>
        /// username
        /// </summary>
        [Required]
        public string Username { get; set; }
    }
}
