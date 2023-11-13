function generateCleanDataArray(dataFromApi) {
  let cleanDataObject = {}
  for (const [key, value] of Object.entries(dataFromApi['Realtime Currency Exchange Rate'])) {
    switch (key) {
      case '1. From_Currency Code':
        cleanDataObject.fromCurrency = value
        break
      case '2. From_Currency Name':
        cleanDataObject.fromCurrencyLabel = value
        break
      case '3. To_Currency Code':
        cleanDataObject.toCurrency = value
        break
      case '4. To_Currency Name':
        cleanDataObject.toCurrencyLabel = value
        break
      case '5. Exchange Rate':
        cleanDataObject.exchangeRate = value
        break
      case '6. Last Refreshed':
        cleanDataObject.lastRefreshed = value
        break
      case '7. Time Zone':
        cleanDataObject.timeZone = value
        break
      case '8. Bid Price':
        cleanDataObject.bidPrice = value
        break
      case '9. Ask Price':
        cleanDataObject.askPrice = value
        break
      default:
        console.log(
          `Api response has some key value pair that we do not use. Check it out: ${key}: ${value}`
        )
    }
  }
  return cleanDataObject
}

export default {
  MutationAxiosAddBeginBegin(state) {
    state.loading = true
  },

  MutationAxiosResetData(state) {
    state.data = []
    state.loading = false
  },

  MutationAxiosAddBeginSuccess(state, data) {
    state.loading = false
    state.data = data
  },

  MutationAxiosAddBeginErr(state, err) {
    state.loading = false
    state.error = err
  },

  MutationAxiosReadBegin(state) {
    state.loading = true
  },

  MutationAxiosReadSuccess(state, dataFromApi) {
    let tmpCleanedData = generateCleanDataArray(dataFromApi)
    tmpCleanedData.id = state.data.length + 1
    state.data.push(tmpCleanedData)
    state.loading = false
  },

  MutationAxiosReadErr(state, err) {
    state.loading = false
    state.error = err
  },

  MutationAxiosUpdateBegin(state) {
    state.loading = true
  },

  MutationAxiosUpdateSuccess(state, data) {
    state.loading = false
    state.data = data
  },

  MutationAxiosUpdateErr(state, err) {
    state.loading = false
    state.error = err
  },

  MutationAxiosDeleteBegin(state) {
    state.loading = true
  },

  MutationAxiosDeleteSuccess(state) {
    state.loading = false
    // state.data = data;
  },

  MutationAxiosDeleteErr(state, err) {
    state.loading = false
    state.error = err
  },

  MutationAxiosSingleDataBegin(state) {
    state.loading = true
  },

  MutationAxiosSingleDataSuccess(state, data) {
    state.loading = false
    state.data = data
  },

  MutationAxiosSingleDataErr(state, err) {
    state.loading = false
    state.error = err
  },

  MutationAxiosUploadBegin(state) {
    state.fileLoading = true
  },

  MutationAxiosUploadSuccess(state, data) {
    state.fileLoading = false
    state.url = data
    state.error = false
  },

  MutationAxiosUploadErr(state, err) {
    state.fileLoading = false
    state.error = err
  },

  MutationAxiosSearchBegin(state) {
    state.loading = true
  },

  MutationAxiosSearchSuccess(state, data) {
    state.loading = false
    state.data = data
  },

  MutationAxiosSearchErr(state, err) {
    state.loading = false
    state.error = err
  }
}
