<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">{{ `Il valore di Bitcoin è $${bitcoinPrice.toFixed(2)}` }}</h1>
    <p class="mb-8">{{ `La cryptovaluta con maggior Market Cap dopo Bitcoin è ${secondCryptoName} con valore $${secondCryptoPrice.toFixed(2)}` }}</p>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table v-if="!loading && cryptos.length" class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-2 px-4">Rank</th>
            <th class="py-2 px-4">NAME</th>
            <th class="py-2 px-4">SYMBOL</th>
            <th class="py-2 px-4">PRICE</th>
            <th class="py-2 px-4">CIRCULATING SUPPLY</th>
            <th class="py-2 px-4">LAST UPDATE</th>
          </tr>
        </thead>
        <tbody>
          <RigaTabella v-for="crypto in cryptos" :key="crypto.id" :crypto="crypto" />
        </tbody>
      </table>
      <div v-else-if="loading" class="flex justify-center items-center h-64">
        <svg class="animate-spin h-10 w-10 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      </div>
      <div v-else>
        <p class="text-center text-gray-500">Nessun dato disponibile</p>
      </div>
    </div>
  </div>
</template>

<script>
import CoinMarketCapService from '~/service/coinmarketcap';
import RigaTabella from '../components/RigaTabella.vue';

export default {
  components: {
    RigaTabella
  },
  data() {
    return {
      cryptos: [],
      bitcoinPrice: null,
      secondCryptoName: null,
      secondCryptoPrice: null,
      loading: true
    }
  },
  async asyncData({ $axios, $config }) {
    try {
      const response = await $axios.$get('/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.coinmarketcap
        },
        params: {
          limit: 100,
          sort: 'market_cap'
        }
      });
      const cryptos = response.data;
      const bitcoin = cryptos.find(crypto => crypto.name === 'Bitcoin');
      const secondCrypto = cryptos.find(crypto => crypto.name !== 'Bitcoin');

      return {
        bitcoinPrice: bitcoin.quote.USD.price,
        secondCryptoName: secondCrypto.name,
        secondCryptoPrice: secondCrypto.quote.USD.price
      }
    } catch (error) {
      console.error('Errore nella chiamata API:', error);
    }
  },
  async mounted() {
    try {
      const response = await CoinMarketCapService.getCryptocurrencyListings();
      const cryptos = response.data.data;
      this.cryptos = cryptos;
    } catch (error) {
      console.error('Errore nella chiamata API:', error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style>
/* Aggiungi qui il tuo stile */
</style>
