import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { FontAwesome5 } from '@expo/vector-icons'; 

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
            <FontAwesome5 style={{alignSelf:'center'}} name='wine-bottle' size={70} color='#5090ff' />
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
