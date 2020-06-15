import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import * as Font from 'expo-font'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const loader = async _ => {
        await Font.loadAsync({
            Hamish: require('../../assets/fonts/Hamish.otf')
        })
    }
    loader()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return (
        <>
            <Spacer />
            <Spacer><Text style={styles.title}>{headerText}</Text></Spacer>
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
            { errorMessage
                ? <Text style={styles.errorMessage}>{errorMessage}</Text>
                : null
            }
            <Spacer>
                <Button
                    title={submitButtonText}
                    titleStyle={{backgroundColor:'#5090ff'}}
                    buttonStyle={{backgroundColor:'#5090ff'}}
                    onPress={() => {
                        return email.length > 2 && password.length > 1
                            ? onSubmit({ email, password })
                            : null
                    }}
                />
            </Spacer>

        </>
    )
}

const styles = {
    errorMessage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f06',
        textAlign: 'center',
        marginLeft: 8
    },
    title: {
        fontFamily: 'Hamish',
        marginBottom: 30,
        fontSize: 40,
        color: '#5090ff',
        textAlign: 'center'
    }
}

export default AuthForm
