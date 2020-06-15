import React, { useContext, useState } from 'react'
import Spacer from '../components/Spacer'
import { View, StyleSheet } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)
    const [ email, setEmail ] = useState('')
    const [ streamUser, setStreamUser ] = useState('')
    const [ password, setPassword ] = useState('')
    return (
        <View style={styles.container}>
            <NavigationEvents
                onDidFocus={clearErrorMessage}
                onWillBlur={clearErrorMessage}
            />
            <Spacer />
            <Spacer><Text style={styles.title} h3>sign up</Text></Spacer>
            <Spacer />
            <Spacer>
                <Input
                    label='email'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input
                    label='password'
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry // same as secureTextEntry={true}
                />
            </Spacer>
            <Spacer>
                <Input
                    label='streamUser'
                    value={streamUser}
                    onChangeText={setStreamUser}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </Spacer>
            { state.errorMessage
                ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                : null
            }
            <Spacer>
                <Button
                    title='submit'
                    onPress={() => {
                        return email.length > 2 && password.length > 1
                            ? signup({ email, password, streamUser })
                            : null
                    }}
                />
            </Spacer>

            <Spacer />
            <NavLink
                title='Go Back'
                routeName='FormScreen'
            />
        </View>
    )
}

SignupScreen.navigationOptions = _ => {
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

export default SignupScreen
