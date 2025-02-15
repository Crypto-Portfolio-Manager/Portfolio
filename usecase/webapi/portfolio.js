const {createPortfolioSql} = require('../repo/portfolio_repo')

module.exports = {
    createPortfolio
};



async function createPortfolio(portfolio) {
    console.log("WebAPI", portfolio)
    try {
        await createPortfolioSql(portfolio)
    } catch(error) {
        throw error
    }
}