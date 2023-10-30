import axios from 'axios'
import Cookies from 'js-cookie'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config) => {
  const token = Cookies.get('@RRE')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      // handleInvalidToken();
    }
    return await Promise.reject(err)
  }
)
