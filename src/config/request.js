// axios 配置
import axios from 'axios'
const baseUrl = 'https://cnodejs.org/api/v1'

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + url, { params })
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + url, params)
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}
