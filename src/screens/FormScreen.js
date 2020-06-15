import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, CheckBox } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationEvents } from 'react-navigation'
import * as Font from 'expo-font'

const FormScreen = ({navigation}) => {
    const loader = async _ => {
        await Font.loadAsync({
            Hamish: require('../../assets/fonts/Hamish.otf')
        })
    }
    loader()
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
                    getStreamie(streamUser)
                }}
            />
            <Text style={{
                alignSelf:'center',
                fontSize: 70,
                fontFamily: 'Hamish',
                marginBottom: -80,
                color: '#5090ff'
            }}>{streamUser}</Text>
            <Text style={styles.active}>ACTIVE</Text>
            <View style={{flex:1, flexDirection: 'row', minHeight: 50}}>
                <View style={{flex: 1, maxWidth: 60}}>
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
            <View style={{flex:1, flexDirection: 'row', minHeight: 50}}>
                <View style={{flex: 1, maxWidth: 60}}>
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
            <View style={{flex:1, flexDirection: 'row', minHeight: 50}}>
                <View style={{flex: 1, maxWidth: 60}}>
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
            <View style={{width:230, flex:1, alignSelf:'center', marginTop:10}}>
                <Button
                    title='submit your changes'
                    titleStyle={{backgroundColor:'#5090ff'}}
                    buttonStyle={{backgroundColor:'#5090ff'}}
                    onPress={_ => {
                        putStreamie({
                            streamUser,
                            youtube: youtube || youtubeKey, youtubeActive,
                            twitch: twitch || twitchKey, twitchActive,
                            facebook: facebook || facebookKey, facebookActive
                        })
                        navigation.navigate('SaveScreen', { streamUser })
                    }}
                />
                <View style={{height:30}} />
                {streamUser === 'teststream'
                    ?   <TouchableOpacity
                            style={styles.logout}
                            onPress={_ => navigation.navigate('SignupScreen')}
                        ><Text>signup</Text></TouchableOpacity>
                    : null}
                <TouchableOpacity
                    style={styles.logout}
                    onPress={signout}
                ><Text>logout</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const TEXT_LENGTH = 40
const TEXT_HEIGHT = 14
const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 130,
        marginBottom: 130
    },
    logout: {
        borderWidth: 0,
        borderColor: 'red',
        alignSelf: 'center'
    },
    label: {
        color: '#000'
    },
    active: {
        margin: 10,
        marginBottom: 80,
        marginLeft: -4,
        fontSize: 16,
        color: '#5090ff',
        fontWeight: 'bold',
        borderWidth: 0,
        borderColor: 'red',
        transform: [{ rotate: '-90deg'}],
        height: 35,
        width: 80
    }
})

FormScreen.navigationOptions = {
    headerShown: false
}

export default FormScreen
