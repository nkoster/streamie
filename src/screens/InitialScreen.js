import React, { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const InitialScreen = _ => {
    const { tryLocalSignin } = useContext(AuthContext)
    useEffect(_ => { tryLocalSignin() }, [])
    return null
}

export default InitialScreen
