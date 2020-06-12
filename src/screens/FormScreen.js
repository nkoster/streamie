import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, CheckBox } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'

const FormScreen = _ => {
    const { state: {
        streamUser, youtubeKey, twitchKey, facebookKey
    }, tryLocalSignin, getStreamie, putStreamie } = useContext(AuthContext)
    console.log('STATE', streamUser)
    useEffect(_ => { tryLocalSignin();getStreamie() }, [])
    const [youtube, setYoutube] = useState(youtubeKey)
    const [youtubeActive, setYoutubeActive] = useState(true)
    const [twitch, setTwitch] = useState('')
    const [twitchActive, setTwitchActive] = useState(true)
    const [facebook, setFacebook] = useState('')
    const [facebookActive, setFacebookActive] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={{alignSelf:'center'}}>{streamUser}</Text>
            <Text style={{margin:10, fontSize: 14, color: '#666', fontWeight: 'bold'}}>active</Text>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex: 1, maxWidth: 50}}>
                    <CheckBox
                        onPress={_ => setYoutubeActive(!youtubeActive)}
                        checked={youtubeActive}
                        checkedColor='#5090ff'
                        iconLeft
                    />
                </View>
                <View style={{flex: 1, alignSelf: 'stretch'}}>
                    <Input
                        value={youtube}
                        placeholder={youtubeKey}
                        onChangeText={data=>{setYoutube(data)}}
                        // placeholder='enter a youtube key here'
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='YOUTUBE'
                    />
                </View>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex: 1, maxWidth: 50}}>
                    <CheckBox
                        onPress={_ => setTwitchActive(!twitchActive)}
                        checked={twitchActive}
                        checkedColor='#5090ff'
                        iconLeft
                    />
                </View>
                <View style={{flex: 1, alignSelf: 'stretch'}}>
                    <Input
                        value={twitch}
                        onChangeText={setTwitch}
                        placeholder={twitchKey}
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='TWITCH'
                    />
                </View>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex: 1, maxWidth: 50}}>
                    <CheckBox
                        onPress={_ => setFacebookActive(!facebookActive)}
                        checked={facebookActive}
                        checkedColor='#5090ff'
                        iconLeft
                    />
                </View>
                <View style={{flex: 1, alignSelf: 'stretch'}}>
                    <Input
                        value={facebook}
                        onChangeText={setFacebook}
                        placeholder={facebookKey}
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='FACEBOOK'
                    />
                </View>
            </View>
            <Button
                title='submit your changes'
                onPress={_ => putStreamie({
                    streamUser,
                    youtube: youtube || youtubeKey, youtubeActive,
                    twitch: twitch || twitchKey, twitchActive,
                    facebook: facebook || facebookKey, facebookActive
                })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 130,
        marginBottom: 130
    }
})

FormScreen.navigationOptions = {
    headerShown: false
}

export default FormScreen
