using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class MembersController(AppDbContext context) : BaseApiController
    {
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var members = await context.Users.ToListAsync();

            return Ok(members);
        }
        [AllowAnonymous]
        [HttpGet("{id}")] // localhost:1309/api/members/bob-id

        public async Task<ActionResult<AppUser>> GetMember(string id)
        {
            var members = await context.Users.FindAsync(id);

            if (members == null) return NotFound();

            return Ok(members);

        }
    }
}

