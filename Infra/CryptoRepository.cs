using Microsoft.Extensions.Logging;

namespace Infra
{
    public class CryptoRepository : ICryptoRepository
    {
        private readonly IList<string> _cryptos;
        private readonly ILogger<CryptoRepository> _logger;
        private readonly Guid _instanceId = Guid.NewGuid();

        public CryptoRepository(ILogger<CryptoRepository> logger)
        {
            _logger = logger;
            _cryptos = new List<String>();

            _logger.LogInformation($"Repo Instanceid{_instanceId}. Info: Repositório criado com sucesso.");
        }

        public void Insert(string name)
        {
            _cryptos.Add(name);

            _logger.LogInformation($"Repo Instanceid{_instanceId}. Info: crypto criada com sucesso.");
        }
    }
}
