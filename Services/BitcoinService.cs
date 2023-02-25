using Infra;
using Microsoft.Extensions.Logging;

namespace Services
{
    public class BitcoinService
    {
        private readonly ICryptoRepository _cryptoRepository;
        private readonly ILogger<BitcoinService> _logger;

        public BitcoinService(ICryptoRepository cryptoRepository, 
            ILogger<BitcoinService> logger)
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
