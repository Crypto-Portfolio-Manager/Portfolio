const grpc = require('@grpc/grpc-js');
const {createPortfolio} = require('../usecase/webapi/portfolio')
const Portfolio = require('../entity/models')

module.exports = {
    createPortfolioController
};



async function createPortfolioController(call, callback) {
    const {name, userId} = call.request;
    const portfolio = new Portfolio(
        name, 
        userId
    );

    console.log(portfolio)

    try {
        await createPortfolio(portfolio);
        callback(null, { success: true });
    } catch(error) {
        callback({
            code: grpc.status.INTERNAL,
            message: `Error creating portfolio: ${error.message}`,
        }, null);
    }
}