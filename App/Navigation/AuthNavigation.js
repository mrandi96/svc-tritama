import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../Containers/LoginPage/LoginContainer'
import * as React from 'react';


const AuthStack = createStackNavigator()

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen
        name="Login"
        component={LoginContainer}
      />
    </AuthStack.Navigator>
  )
}

const AuthNavigation = AuthScreen

export default AuthNavigation