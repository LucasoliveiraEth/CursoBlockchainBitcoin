public class BrokerRepository : IRepository<Broker>
{
    private readonly IDbConnection _dbConnection;

    public BrokerRepository(IDbConnection dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public async Task<Broker> GetByIdAsync(int id)
    {
        string sql = "SELECT * FROM Brokers WHERE Id = @Id";
        return await _dbConnection.QueryFirstOrDefaultAsync<Broker>(sql, new { Id = id });
    }

    public async Task<IEnumerable<Broker>> GetAllAsync()
    {
        string sql = "SELECT * FROM Brokers";
        return await _dbConnection.QueryAsync<Broker>(sql);
    }

    public async Task AddAsync(Broker entity)
    {
        string sql = "INSERT INTO Brokers (Name) VALUES (@Name)";
        await _dbConnection.ExecuteAsync(sql, entity);
    }

    public async Task UpdateAsync(Broker entity)
    {
        string sql = "UPDATE Brokers SET Name = @Name WHERE Id = @Id";
        await _dbConnection.ExecuteAsync(sql, entity);
    }

    public async Task RemoveAsync(Broker entity)
    {
        string sql = "DELETE FROM Brokers WHERE Id = @Id";
        await _dbConnection.ExecuteAsync(sql, new { Id = entity.Id });
    }
}
