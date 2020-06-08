import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import InitialScreen from './src/screens/InitialScreen'
import SigninScreen from './src/screens/SigninScreen'
import FormScreen from './src/screens/FormScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'

const stackNavigator = createStackNavigator({
  // InitialScreen,
  SigninScreen, FormScreen
})

const App = createAppContainer(stackNavigator)

export default _ => {
  return (
      <AuthProvider>
        <App ref={navigator => { setNavigator(navigator) }} />
      </AuthProvider>
  )
}
