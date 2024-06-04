<template>
  <tr class="bg-gray-100 border-b">
    <td class="py-2 px-4">{{ crypto.cmc_rank }}</td>
    <td class="py-2 px-4">{{ `${crypto.name}` }}</td>
    <td class="py-2 px-4 uppercase">{{ `${crypto.symbol}` }}</td>
    <td class="py-2 px-4">{{ `$${crypto.quote.USD.price.toFixed(4)}` }}</td>
    <td class="py-2 px-4">{{ `${crypto.circulating_supply}` }}</td>
    <td class="py-2 px-4">{{ `${formatDate(crypto.last_updated)}` }}</td>



  </tr>
</template>

<script>
import {formatDateToItalianLiteral} from '../utils/FormatDate'
export default {
  props: {
    crypto: {
      type: Object,
      required: true
    }
  },
  methods:{
    formatDate(date){
      return formatDateToItalianLiteral(date)
    }
  }
}
</script>

<style scoped>

</style>
