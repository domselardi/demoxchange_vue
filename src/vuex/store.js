import { createStore } from 'vuex'
import currencyList from './modules/currencyList'
import currencyExchangeRate from './modules/currencyExchangeRate/actionCreator.js'
export default createStore({
  modules: {
    currencyList,
    currencyExchangeRate
  }
})
