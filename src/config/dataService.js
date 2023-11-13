import axios from 'axios'
import { getItem } from '../utility/localStorageControl'
let API_KEY = import.meta.env.ALPHAVANTAGE_API_KEY || 'XVD9KCU9OYNKGY7M'
let API_ENDPOINT = 'https://www.alphavantage.co'
const authHeader = () => ({
  Authorization: `Bearer ${getItem('access_token')}` // Not yet implemented
})
const axiosApiClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${getItem('access_token')}`,
    'Content-Type': 'application/json'
  }
})

class DataService {
  static get(path = '', apiParams = {}) {
    return axiosApiClient({
      method: 'GET',
      url: path,
      params: apiParams,
      headers: { ...authHeader() }
    })
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return axiosApiClient({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader }
    })
  }

  static patch(path = '', data = {}) {
    return axiosApiClient({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }

  static delete(path = '', data = {}) {
    return axiosApiClient({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }

  static put(path = '', data = {}) {
    return axiosApiClient({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }
}

axiosApiClient.interceptors.request.use((config) => {
  const requestConfig = config
  const { headers } = config
  requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem('access_token')}` }
  requestConfig.params['apikey'] = API_KEY
  /*
  if (process.env.NODE_ENV === 'production') {
    requestConfig.baseURL = 'https://www.alphavantage.co'
    requestConfig.params['apikey'] = API_KEY
  }
  */
  return requestConfig
})

axiosApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error
    const originalRequest = error.config
    if (response) {
      if (response.status === 500) {
        console.log('Error, do something')
      } else {
        return originalRequest
      }
    }
    return Promise.reject(error)
  }
)
export { DataService }
