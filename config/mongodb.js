const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '/Users/stepansalikov/CryptoManager/.env' });

const client = new MongoClient(process.env.MONGO_DB_URL);

module.exports = client;