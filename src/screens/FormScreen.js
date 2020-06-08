import React, { useState, useEffect, useContext } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'

const FormScreen = _ => {
    const { tryLocalSignin } = useContext(AuthContext)
    useEffect(_ => { tryLocalSignin() }, [])
    const [youtube, setYoutube] = useState('')
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ width: '70%'}}>
                    <Input
                        style={{flex: 1}}
                        value={youtube}
                        onChangeText={setYoutube}
                        inputStyle={{}}
                        placeholder='enter a youtube key here'
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='YOUTUBE'
                    />
                </View>
                <View style={{ width: '30%'}}>
                    <Button
                        style={{flex: 1}}
                        title='send new youtube key'
                        onPress={_ => {}}
                    />
                </View>
            </View>
        </View>
    )
}

FormScreen.navigationOptions = {
    headerShown: false
}

export default FormScreen
