using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] // localhost:1309/api/members
    [ApiController]
    public class MembersController(AppDbContext context) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var members = await context.Users.ToListAsync();

            return Ok(members);
        }

        [HttpGet("{id}")] // localhost:1309/api/members/bob-id

        public async Task<ActionResult<AppUser>> GetMember(string id)
        {
            var members = await context.Users.FindAsync(id);

            if (members == null) return NotFound();

            return Ok(members);

        }
    }
}

