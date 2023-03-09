public class BrokerController : ControllerBase
{
    private readonly IRepository<Broker> _brokerRepository;

    public BrokerController(IRepository<Broker> brokerRepository)
    {
        _brokerRepository = brokerRepository;
    }

    // Métodos do controlador aqui
}
