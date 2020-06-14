import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, CheckBox } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationEvents } from 'react-navigation'

const FormScreen = ({navigation}) => {
    const { state: {
        streamUser,
        youtubeKey, youtubeUsed,
        twitchKey, twitchUsed,
        facebookKey, facebookUsed
    }, tryLocalSignin, getStreamie, putStreamie, signout } = useContext(AuthContext)
    useEffect(_ => { tryLocalSignin() }, [])
    useEffect(_ => {
        setYoutube(youtubeKey)
        setYoutubeActive(youtubeUsed)
        setTwitch(twitchKey)
        setTwitchActive(twitchUsed)
        setFacebook(facebookKey)
        setFacebookActive(facebookUsed)
    },[youtubeUsed, youtubeKey, twitchUsed, twitchKey, facebookUsed, facebookKey])
    const [youtube, setYoutube] = useState('')
    const [youtubeActive, setYoutubeActive] = useState(youtubeUsed)
    const [twitch, setTwitch] = useState('')
    const [twitchActive, setTwitchActive] = useState(twitchUsed)
    const [facebook, setFacebook] = useState('')
    const [facebookActive, setFacebookActive] = useState(facebookUsed)
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={_ => {
                    getStreamie()
                }}
            />
            <Text style={{alignSelf:'center', fontSize:30}}>{streamUser}</Text>
            <Text style={{margin:10, marginBottom:40, fontSize: 14, color: '#666', fontWeight: 'bold'}}>active</Text>
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
                        onChangeText={setYoutube}
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='YOUTUBE'
                        labelStyle={styles.label}
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
                        labelStyle={styles.label}
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
                        labelStyle={styles.label}
                    />
                </View>
            </View>
            <Button
                title='submit your changes'
                onPress={_ => {
                    putStreamie({
                        streamUser,
                        youtube: youtube || youtubeKey, youtubeActive,
                        twitch: twitch || twitchKey, twitchActive,
                        facebook: facebook || facebookKey, facebookActive
                    })
                    navigation.navigate('SaveScreen')
                }}
            />
            <TouchableOpacity
                onPress={signout}
            ><Text style={styles.logout}>logout</Text></TouchableOpacity>
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
    },
    logout: {
        marginTop: 40,
        alignSelf: 'center'
    },
    label: {
        color: '#000'
    }
})

FormScreen.navigationOptions = {
    headerShown: false
}

export default FormScreen
