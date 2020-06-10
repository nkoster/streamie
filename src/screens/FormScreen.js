import React, { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { Input, Button, CheckBox } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'

const FormScreen = _ => {
    const { tryLocalSignin } = useContext(AuthContext)
    useEffect(_ => { tryLocalSignin() }, [])
    const [youtube, setYoutube] = useState('')
    const [youtubeActive, setYoutubeActive] = useState(true)
    const [twitch, setTwitch] = useState('')
    const [twitchActive, setTwitchActive] = useState(true)
    const [facebook, setFacebook] = useState('')
    const [facebookActive, setFacebookActive] = useState(true)
    return (
        <View>
            <Text style={{margin:10, fontSize: 20}}>active</Text>
            <View style={{flex:1, flexDirection: 'row'}}>
                <CheckBox
                    onPress={_ => setYoutubeActive(!youtubeActive)}
                    checked={youtubeActive}
                    checkedColor='#5090ff'
                    iconLeft
                />
                <Input
                    value={youtube}
                    onChangeText={setYoutube}
                    inputStyle={{}}
                    placeholder='enter a youtube key here'
                    autoCapitalize='none'
                    autoCorrect={false}
                    label='YOUTUBE'
                />
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <CheckBox
                    onPress={_ => setTwitchActive(!twitchActive)}
                    checked={twitchActive}
                    checkedColor='#5090ff'
                    iconLeft
                />
                <Input
                    value={twitch}
                    onChangeText={setTwitch}
                    inputStyle={{}}
                    placeholder='enter a youtube key here'
                    autoCapitalize='none'
                    autoCorrect={false}
                    label='TWITCH'
                />
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <CheckBox
                    onPress={_ => setFacebookActive(!facebookActive)}
                    checked={facebookActive}
                    checkedColor='#5090ff'
                    iconLeft
                />
                <Input
                    value={facebook}
                    onChangeText={setFacebook}
                    inputStyle={{}}
                    placeholder='enter a youtube key here'
                    autoCapitalize='none'
                    autoCorrect={false}
                    label='FACEBOOK'
                />
            </View>
            <Button
                title='submit your changes'
                onPress={_ => {}}
            />
        </View>
    )
}

FormScreen.navigationOptions = {
    headerShown: false
}

export default FormScreen
