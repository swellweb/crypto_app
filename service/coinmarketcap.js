import axios from 'axios';

const coinmarketcap = process.env.coinmarketcap
const apiClient = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  headers: {
    'X-CMC_PRO_API_KEY': coinmarketcap
  }
});

export default {
  getCryptocurrencyListings(limit = 100) {
    return apiClient.get('/cryptocurrency/listings/latest', {
      params: {
        limit: limit,
        sort: 'market_cap'
      }
    });
  }
}
