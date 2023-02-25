using Microsoft.AspNetCore.Mvc;
using Services;
using Swashbuckle.AspNetCore.Annotations;

namespace DependencyInjection.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CryptoController : ControllerBase
    {
        private readonly ILogger<CryptoController> _logger;

        public CryptoController(ILogger<CryptoController> logger)
        {
            _logger = logger;
        }

        [SwaggerOperation(Summary = "CriarBitcoin", Tags = new[] { "Bitcoin Service" })]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("CriarBitcoin")]
        [HttpPost]
        public IActionResult InsertBitcoin(
          [FromServices] BitcoinService bitcoinService,
          [FromBody] string name)
        {
            bitcoinService.AddCrypto(name);

            return Ok();
        }

        [SwaggerOperation(Summary = "CriarEthereum", Tags = new[] { "Ethereum Service" })]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("CriarEthereum")]
        [HttpPost]
        public IActionResult InsertEthereum([FromServices] EthereumService ethereumService, [FromBody] string name)
        {
            ethereumService.AddCrypto(name);

            return Ok();
        }

        [SwaggerOperation(Summary = "CriarBitcoinEthereum", Tags = new[] { "Bitcoin/Ethereum Service" })]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("CriarBitcoinEthereum")]
        [HttpPost]
        public IActionResult InsertBitcoinEthereum(
            [FromServices] BitcoinService bitcoinService, 
            [FromServices] EthereumService ethereumService, 
            [FromBody] string name)
        {
            bitcoinService.AddCrypto(name);
            ethereumService.AddCrypto(name);

            return Ok();
        }
    }
}