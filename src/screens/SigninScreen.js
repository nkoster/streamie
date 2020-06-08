import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SigninScreen = _ => {
    const { tryLocalSignin } = useContext(AuthContext)
    useEffect(_ => { tryLocalSignin() }, [])
    const { state, signin, clearErrorMessage } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <NavigationEvents
                onDidFocus={clearErrorMessage}
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText='sign in to streamie'
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText='submit'
            />
        </View>
    )
}
 SigninScreen.navigationOptions = _ => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    link: {
        color: 'gray',
        textAlign: 'center'
    },
})

export default SigninScreen
