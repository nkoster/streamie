import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const SaveScreen = ({navigation}) => {
    const streamUser = navigation.getParam('streamUser')
    return (
        <View>
            <NavigationEvents
                onWillFocus={_ => {
                    setTimeout(_ => navigation.navigate('FormScreen'), 2000)
                }}
            />
            <Text style={styles.text}>{streamUser} updated!</Text>
            {/* <Image
                style={{height:200,width:200,alignSelf:'center'}}
                resizeMode='contain'
                source={require('../../assets/bierie.png')}
            /> */}
            <MaterialCommunityIcons style={{alignSelf:'center'}} name='rocket' size={120} color='#5090ff' />
        </View>
    )
}

SaveScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        alignSelf: 'center',
        marginTop: 150,
        marginBottom: 30
    }
})

export default SaveScreen
