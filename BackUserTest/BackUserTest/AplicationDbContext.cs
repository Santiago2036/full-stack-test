using BackUserTest.Models;
using Microsoft.EntityFrameworkCore;

namespace BackUserTest
{
    public class AplicationDbContext:DbContext
    {
        public DbSet<Persona> Persona { get; set; }
        public DbSet<Usuario> Usuario { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        { }
    }
}
