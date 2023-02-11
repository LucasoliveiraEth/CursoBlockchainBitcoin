using Hash.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Security.Cryptography;
using System.Text;

namespace Hash.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HashController : ControllerBase
    {

        [SwaggerOperation(Summary = "Obter Hash", Tags = new[] { "Hash Service" })]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(HashResponse))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpGet(Name = "Hash")]
        public async Task<IActionResult> Get(string secret)
        {
            if (secret.Length <= 5)
                return BadRequest(new ErrorResponse()
                {
                    Message = "Dados inválidos, informe o secret com mais de 5 caracteres.",
                    StatusCode = 422
                });

            var sha256 = SHA256.Create();
            var secretBytes = Encoding.UTF8.GetBytes(secret);
            var secretHash = sha256.ComputeHash(secretBytes);

            return Ok(await Task.FromResult(new HashResponse() { Hash = Convert.ToHexString(secretHash) }));
        }
    }
}