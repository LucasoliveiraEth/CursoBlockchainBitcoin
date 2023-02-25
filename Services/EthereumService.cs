using Infra;
using Microsoft.Extensions.Logging;

namespace Services
{
    public class EthereumService
    {
        private readonly ICryptoRepository _cryptoRepository;
        private readonly ILogger<EthereumService> _logger;

        public EthereumService(ICryptoRepository cryptoRepository, 
            ILogger<EthereumService> logger)
        {
            _logger = logger;
            _cryptoRepository = cryptoRepository;
        }

        public void AddCrypto(string name)
        {
            _cryptoRepository.Insert(name);
        }

    }
}
