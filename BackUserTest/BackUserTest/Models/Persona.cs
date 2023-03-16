using System.ComponentModel.DataAnnotations;

namespace BackUserTest.Models
{
    public class Persona
    {
        [Key]
        public int idPersona { get; set; }
        [Required]
        public string nombres { get; set; }
        [Required]
        public string apellidos { get; set; }
        [Required]
        public int numero_identificacion { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string tipo_identificacion { get; set; }
        [Required]
        public DateTime fecha_creacion { get; set; }

    }
}
