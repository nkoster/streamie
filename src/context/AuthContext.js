import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import streamieApi from '../api/streamie'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error':
            return { ...state, errorMessage: '' }
        case 'signin':
            return {
                errorMessage: '',
                token: action.payload.token,
                streamUser: action.payload.streamUser
            }
        case 'signout':
            return { token: null }
        case 'getStreamie':
            console.log(action.payload)
            return action.payload
        default: return state
    }
}

const clearErrorMessage = dispatch => _ => {
    dispatch({ type: 'clear_error', payload: '' })
}

const tryLocalSignin = dispatch => async _ => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        const streamUser = await AsyncStorage.getItem('streamUser')
        dispatch({ type: 'signin', payload: { token, streamUser }})
        navigate('FormScreen', {})
    } else {
        navigate('SigninScreen')
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await streamieApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        await AsyncStorage.setItem('streamUser', response.data.streamUser)
        dispatch({ type: 'signin', payload: response.data})
        navigate('FormScreen')
    } catch(err) {
        dispatch({ type: 'add_error', payload: err.message })
    }
}

const signout = dispatch => async _ => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('streamUser')
    dispatch({ type: 'signout' })
    navigate('SigninScreen')
}

const getStreamie = dispatch => async streamUser => {
    try {
        const response = await streamieApi.get(`/getstreamie/${streamUser}`)
        dispatch({ type: 'getStreamie', payload: response.data })
    } catch(err) {
        console.log('getstreamie error:', err.message)
    }
}

const putStreamie = dispatch => async data => {
    console.log(data)
    try {
        streamieApi.post('/putstreamie', data)
    } catch(err) {
        console.log('putstreamie error:', err.message)
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, clearErrorMessage, tryLocalSignin, getStreamie, putStreamie },
    { token: null, errorMessage: '' }
)
