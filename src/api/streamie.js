import axios from 'axios'
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    baseURL: 'https://mapi.w3b.net'
    // baseURL: 'https://32272cd5362d.ngrok.io'
    // baseURL: 'http://localhost:3333'
})

instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

export default instance
