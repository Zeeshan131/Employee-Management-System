using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Projects;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProjectsController : BaseApiController
    {
        // GET /API/Projects
        [HttpGet]
        public async Task<ActionResult<List<Project>>> GetProjects()
        {
            return await Mediator.Send(new List.Query());
        }

        // GET /API/Projects/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        // POST /API/Projects
        [HttpPost]
        public async Task<IActionResult> CreateProject(Project project)
        {
            return Ok(await Mediator.Send(new Create.Command{Project = project}));
        }

        // PUT /API/Projects
        [HttpPut("{id}")]
        public async Task<IActionResult> EditProject(Guid id, Project project)
        {
            project.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Project = project}));
        }

        // DELETE API/Projects/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}