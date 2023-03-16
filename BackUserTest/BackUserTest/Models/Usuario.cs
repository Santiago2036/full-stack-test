using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackUserTest.Models
{
    public class Usuario: Persona
    {
        [Required]
        public string pass { get; set; }

    }
}
