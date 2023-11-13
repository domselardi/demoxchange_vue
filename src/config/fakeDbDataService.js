import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateFakeExchangeRate(apiParams) {
  let tmpResult = {
    'Realtime Currency Exchange Rate': {
      '1. From_Currency Code': apiParams.from_currency,
      '2. From_Currency Name': apiParams.fromCurrencyLabel,
      '3. To_Currency Code': apiParams.to_currency,
      '4. To_Currency Name': apiParams.toCurrencyLabel,
      '5. Exchange Rate': `${randomIntFromInterval(1, 99999)}.${randomIntFromInterval(
        1,
        99999999
      )}`,
      '6. Last Refreshed': new Date().toString(),
      '7. Time Zone': 'UTC',
      '8. Bid Price': `${randomIntFromInterval(1, 99999)}.${randomIntFromInterval(1, 99999999)}`,
      '9. Ask Price': `${randomIntFromInterval(1, 99999)}.${randomIntFromInterval(1, 99999999)}`
    }
  }
  return tmpResult
}
mock.onGet('/loadFakeLocalRealtimeCurrencyExchange').reply(function (config) {
  return [200, generateFakeExchangeRate(config.params)]
})

class FakeDbDataService {
  static get(path = '', apiParams = {}) {
    return axios.get(path, { params: apiParams }).then(function (response) {
      return response.data
    })
  }
}

export { FakeDbDataService }
