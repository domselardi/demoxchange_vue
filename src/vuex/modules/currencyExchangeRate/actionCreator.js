import mutations from './mutations'
import { DataService } from '../../../config/dataService'
import { FakeDbDataService } from '../../../config/fakeDbDataService'

const state = () => ({
  apiCallsCounter: 0,
  data: [],
  isLoading: false,
  error: null
})

const actions = {
  async loadApiData({ commit }, apiParams) {
    try {
      await commit('MutationAxiosReadBegin')
      let liveDbResponse = {}
      try {
        liveDbResponse = await DataService.get('/query', apiParams)
        if (
          typeof liveDbResponse.data['Information'] === 'undefined' &&
          liveDbResponse.status === 200
        ) {
          liveDbResponse = liveDbResponse.data
        } else {
          throw new TypeError('liveApiErrored limit was reached! Defaulting to local mocked API')
        }
      } catch (error) {
        // Default to local mocked API
        liveDbResponse = await FakeDbDataService.get(
          '/loadFakeLocalRealtimeCurrencyExchange',
          apiParams
        )
      }
      await commit('MutationAxiosReadSuccess', liveDbResponse)
    } catch (err) {
      console.log(err)
      await commit('MutationAxiosReadErr', err)
    }
  },
  async resetApiDataStore({ commit }) {
    try {
      await commit('MutationAxiosReadBegin')
      await commit('MutationAxiosResetData')
    } catch (err) {
      console.log(err)
      await commit('MutationAxiosReadErr', err)
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
