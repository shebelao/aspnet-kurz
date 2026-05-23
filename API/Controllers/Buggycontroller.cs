using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class Buggycontroller:BaseApiController
    {
        [HttpGet("auth")]

        public IActionResult GetAuth()
        {
            return Unauthorized();
        }

        [HttpGet("not-found")]

        public IActionResult GetNothFound()
        {
            return NotFound();
        }

        [HttpGet("server-error")]

        public IActionResult GetServerError()
        {
            throw new Exception("THIS IS SERVER ERROR");
        }

         [HttpGet("bad-request")]
        public IActionResult GetBadRequest()
        {
            return BadRequest("BAD REQUEST:(");
        }

    }
}