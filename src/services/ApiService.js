import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.desouttertools.io/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  check(form) {
    return apiClient.post('/check', form)
  }
}
