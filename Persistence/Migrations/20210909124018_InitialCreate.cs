using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Tower = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TechPod = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Solution = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DomainArchitecture = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductOwner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScrumMaster = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UxDesigner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TechnicalLead = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Developer1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Developer2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Developer3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Developer4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Developer5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Developer6 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Developer7 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
