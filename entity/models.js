class Portfolio {
    constructor(name, userId) {
        if (!name) throw new Error("Portfolio name is required.");
        if (!userId) throw new Error("User ID is required.");
        
        this.name = name;
        this.userId = userId;
        this.assets = []; // Начальное состояние — пустой массив активов
        this.trades = []; // Начальное состояние — пустой массив сделок
        this.createdAt = new Date(); // Автоматически устанавливаем текущую дату
    }

    // Метод для добавления актива
    addAsset(asset) {
        if (!asset.assetId || !asset.assetName || asset.amount === undefined) {
            throw new Error("Invalid asset structure. 'assetId', 'assetName', and 'amount' are required.");
        }
        if (asset.amount < 0) {
            throw new Error("Asset amount cannot be negative.");
        }
        this.assets.push(asset);
    }

    // Метод для добавления сделки
    addTrade(trade) {
        if (!trade.tradeId || !trade.assetId || trade.amount === undefined || !trade.type || trade.price === undefined) {
            throw new Error("Invalid trade structure. 'tradeId', 'assetId', 'amount', 'type', and 'price' are required.");
        }
        if (trade.amount < 0) {
            throw new Error("Trade amount cannot be negative.");
        }
        if (!['buy', 'sell'].includes(trade.type)) {
            throw new Error("Invalid trade type. Allowed values are 'buy' or 'sell'.");
        }
        if (trade.price < 0) {
            throw new Error("Trade price cannot be negative.");
        }

        trade.date = trade.date || new Date(); // Устанавливаем текущую дату, если не указана
        this.trades.push(trade);
    }

    // Метод для получения всех активов
    getAssets() {
        return this.assets;
    }

    // Метод для получения всех сделок
    getTrades() {
        return this.trades;
    }

    // Метод для расчёта общей стоимости всех активов (пример логики)
    calculateTotalAssetsValue() {
        return this.assets.reduce((total, asset) => total + asset.amount, 0);
    }

    // Метод для валидации структуры перед сохранением (если нужно)
    validate() {
        if (!this.name) throw new Error("Portfolio name is required.");
        if (!this.userId) throw new Error("User ID is required.");
    }
}

module.exports = Portfolio;