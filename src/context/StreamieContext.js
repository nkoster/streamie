import createDataContext from './createDataContext'
import streamieApi from '../api/streamie'

const streamieReducer = (state, action) => {
    switch(action.type) {
        case 'updateStreamie':
            return state
        default:
            return state
    }
}

const updateStreamie = dispatch => async (id, streamie) => {
    try {
        const response = await streamieApi.get('/updatestreamie', { id, streamie })
        dispatch({ type: 'updateStreamie', payload: '' })
    } catch(err) {
        console.log('updateStreamie error', err.message)
    }
}

export const { Provider, Context } = createDataContext(
    streamieReducer,
    { updateStreamie },
    []
)
