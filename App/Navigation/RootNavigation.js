import { createStackNavigator } from '@react-navigation/stack';
import StartupScreen from '../Containers/StartupPage/StartupScreen'
import * as React from 'react';
const RootStack = createStackNavigator()

const RootScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <RootStack.Screen
        name="StartUp"
        component={StartupScreen}
      />
    </RootStack.Navigator>
  )
}

const RootNavigation = RootScreen

export default RootNavigation