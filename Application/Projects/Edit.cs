using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Projects
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Project Project { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var project = await _context.Projects.FindAsync(request.Project.Id);
                
                // project.UxDesigner = request.Project.UxDesigner ?? project.UxDesigner;

                _mapper.Map(request.Project, project);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}