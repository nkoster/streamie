import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return (
        <>
            <Spacer />
            <Spacer><Text style={styles.title} h3>{headerText}</Text></Spacer>
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
        marginBottom: 30,
        color: 'gray',
        textAlign: 'center',
        textShadowColor: 'black', 
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 1
    }
}

export default AuthForm
