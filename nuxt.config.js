import coinmarketcap from './service/coinmarketcap';

require('dotenv').config();

export default {
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://pro-api.coinmarketcap.com/v1'
  },
  publicRuntimeConfig: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
  },
  env: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
  },
  css: [
    '~/assets/css/tailwind.css'
  ]
}
