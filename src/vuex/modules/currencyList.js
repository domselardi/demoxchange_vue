import currencyListData from '../../staticFakeDb/currencyListData.json'

const state = () => ({
  data: currencyListData,
  isLoading: false,
  error: null
})

export default {
  namespaced: true,
  state
}
