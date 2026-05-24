using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Member
    {
        public required string Id { get; set; }
        public required string Email { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public string? ImageUrl { get; set; }
        public required string DisplayName { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public required string Gender { get; set; }
        public string? Description { get; set; }
        public required string City { get; set; }
        public required string Country { get; set; }

        //Navigation Property
        [JsonIgnore]
        public List<Photo> Photos { get; set; } = [];

        [ForeignKey(nameof(Id))]
        [JsonIgnore]
        public AppUser User { get; set; } = null!;



    }
}