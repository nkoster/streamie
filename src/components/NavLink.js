import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import Spacer from './Spacer'

const NavLink = ({ navigation, title, routeName }) => {
    return (
        <TouchableOpacity onPress={_ => navigation.navigate(routeName)} >
        <Spacer>
            <Text style={styles.link}>
                {title}
            </Text>
        </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'gray',
        textAlign: 'center'
    }
})

export default withNavigation(NavLink)
