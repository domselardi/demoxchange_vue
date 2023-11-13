<script setup>
import { ref, reactive, computed, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import HeaderZoneCpt from '../components/HeaderZoneCpt.vue'
import LogoCpt from '../components/LogoCpt.vue'
import TableCpt from '../components/TableCpt.vue'
const { state, dispatch } = useStore()
const apiParams = reactive({})
const fromCurrency = ref(null)
const fromCurrencyLabel = ref('')
const toCurrencyLabel = ref('')
const toCurrency = ref(null)
const apiFunction = ref('CURRENCY_EXCHANGE_RATE')
const realtimeExchangeDataFromStore = computed(() => state.currencyExchangeRate.data)
apiParams['function'] = apiFunction
apiParams['from_currency'] = fromCurrency
apiParams['to_currency'] = toCurrency
apiParams['fromCurrencyLabel'] = fromCurrencyLabel
apiParams['toCurrencyLabel'] = toCurrencyLabel
let counter = ref(0)
let apiPooler = ref(null)

function currencyFilterWasChanged(x) {
  if (x.direction === 'from_currency') {
    fromCurrency.value = x.currencyCode
    fromCurrencyLabel.value = x.currencyLabel
  }
  if (x.direction === 'to_currency') {
    toCurrency.value = x.currencyCode
    toCurrencyLabel.value = x.currencyLabel
  }
}

function watchApiEndpoint(apiParams) {
  if (!state.currencyExchangeRate.loading) {
    dispatch('currencyExchangeRate/loadApiData', apiParams)
  }
  counter.value++
}

onMounted(() => {
  // First thing after the homepage view is mounted - start the apiPooler with a 5 sec interval
  if (!state.currencyExchangeRate.loading) {
    dispatch('currencyExchangeRate/loadApiData', apiParams)
    setTimeout(() => {
      // wait 3 seconds and then start apiPooler
      apiPooler.value = setInterval(watchApiEndpoint, 3000, apiParams)
    }, 100)
  }
})

onBeforeUnmount(() => {
  clearInterval(apiPooler.value)
  // Reset the currencyExchangeRate data store
  dispatch('currencyExchangeRate/resetApiDataStore')
})
</script>

<template>
  <div class="appHolder demoxchangeHomepageView">
    <LogoCpt />
    <HeaderZoneCpt @currencyFilterWasChanged="currencyFilterWasChanged" />
    <TableCpt
      v-if="state.currencyExchangeRate.data.length > 0"
      :api-data="realtimeExchangeDataFromStore"
    />
  </div>
</template>

<style scoped lang="scss">
.demoxchangeHomepageView {
  padding-bottom: 5rem;
}
.exchangeCurrencyFilters {
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0;
    padding: 0;

    li {
      padding: 0;
      margin: 0 1.2rem 0 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  label {
    font-size: 1.2rem;
    display: block;
    margin: 0 0 0.6rem 0;
    color: azure;
  }
}
</style>
