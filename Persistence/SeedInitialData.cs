using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class SeedInitialData
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Projects.Any()) 
            {
                return;
            }
            var projects = new List<Project>
            {
                new Project
                {
                    Date = DateTime.Now,
                    Tower = "Resilience",
                    TechPod = "Pod1",
                    Solution = "Resilience Client Solution/Idea",
                    Status = "Active",
                    DomainArchitecture = "Muthukumar Vaidhianathan",
                    ProductOwner = "John Hatcher",
                    ScrumMaster = "Dan Okabadego",
                    UxDesigner = "",
                    TechnicalLead = "James Ortega",
                    Developer1 = "Gary Laitman",
                    Developer2 = "Timothy Strumfels",
                    Developer3 = "Avanthi Koneru",
                    Developer4 = "Chetan Kumar (9/20)",
                    Developer5 = "Tech/Open Req/US",
                    Developer6 = "",
                    Developer7 = "",
                },
            };
            await context.Projects.AddRangeAsync(projects);
            await context.SaveChangesAsync();
        }
    }
}