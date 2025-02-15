const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const {createPortfolioController} = require('../controller/portfolio_controller.js')

const PROTO_PATH = '/Users/stepansalikov/CryptoManager/Portfolio/config/proto/portfolio.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const portfolioProto = grpc.loadPackageDefinition(packageDefinition).portfolioproto;

function main() {
  const server = new grpc.Server();
  server.addService(portfolioProto.Portfolio.service, {CreatePortfolio: createPortfolioController });

  const port = 50052;
  server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, bindPort) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server running at http://localhost:${bindPort}`);
    server.start();
  });
}

main();
