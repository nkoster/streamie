import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'

const SaveScreen = ({navigation}) => {
    return (
        <View>
            <NavigationEvents
                onWillFocus={_ => {
                    setTimeout(_ => navigation.navigate('FormScreen'), 1500)
                }}
            />
            <Text style={styles.text}>streamie updated!</Text>
        </View>
    )
}

SaveScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 150
    }
})

export default SaveScreen
