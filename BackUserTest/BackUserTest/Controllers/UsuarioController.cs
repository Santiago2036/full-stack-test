using BackUserTest.Controllers.utils;
using BackUserTest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Security.Cryptography;
using System.Text;
using System.Threading;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackUserTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly AplicationDbContext _context;



        public UsuarioController(AplicationDbContext context)
        {
            _context = context;
           
        }

        public static string Llave = "yye8san23sashmmhsye";

       

        // GET: api/<UsuarioController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listUsuarios = await _context.Persona.ToListAsync();
                return Ok(listUsuarios);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        // GET api/<UsuarioController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {   
                var usuario = await _context.Persona.FindAsync(id);
                return Ok(usuario);

                if (usuario == null)
                {
                    return NotFound();
                }
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<UsuarioController>
        [HttpPost]
        public  async Task<IActionResult> Post([FromBody] Usuario usuario)
        {
            try
            {
                //var passEncrypt = _encryptionService.Encryption(usuario.pass, Llave);
                //usuario.pass = passEncrypt;
                _context.Add(usuario);
                await _context.SaveChangesAsync();

                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Usuario usuario)
        {
            try
            {
                if(id != usuario.idPersona)
                {
                    return BadRequest();
                }
                _context.Update(usuario);
                await _context.SaveChangesAsync();

                return Ok(new {message = "actualizacion completada con exito!" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
       
        [HttpPost("login")]
        public async Task<IActionResult> PostLogin([FromBody] loginRequest usuario)
        {
            try
            {
                Usuario? Auth = await _context.Usuario.FirstOrDefaultAsync(e => e.email == usuario.email && e.pass == usuario.pass);
                bool res = false;
                if (Auth == null)
                {
                    return Ok(res);
                }
                else
                {
                    res = true;
                    return Ok(res);
                }
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var persona = await _context.Persona.FindAsync(id);
                if (persona== null)
                {
                    return NotFound();
                }
                _context.Persona.Remove(persona);
                await _context.SaveChangesAsync();

                return Ok(new { message = "eliminado con exito!" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
