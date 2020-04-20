namespace ToDoApp.Domain.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateTableToDo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ToDoes", "ToDoStatus", c => c.Int(nullable: false));
            DropColumn("dbo.ToDoes", "Status");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ToDoes", "Status", c => c.Int(nullable: false));
            DropColumn("dbo.ToDoes", "ToDoStatus");
        }
    }
}
