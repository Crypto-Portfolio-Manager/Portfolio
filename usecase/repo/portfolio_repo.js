const Portfolio = require('../../entity/models')
const client = require('../../config/mongodb')

module.exports = {
    createPortfolioSql
};

async function createPortfolioSql(portfolio) {
    console.log('REPO', portfolio)
    try {
      await client.connect()

      const database = client.db("cryptomanager");
      const portfolios = database.collection("portfolios");

      const result = await portfolios.insertOne(portfolio);

      return result.insertedId;
    } catch (err) {
      console.error('Ошибка при создании:', err);
    } finally {
        await client.close();
      }
  }
