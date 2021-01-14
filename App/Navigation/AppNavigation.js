import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '../Containers/HomePage/HomeContainer'
import CorrectiveDetailContainer from '../Containers/CorrectiveDetailPage/CorrectiveDetailContainer'
import CorrectiveListContainer from '../Containers/TicketPage/CorrectiveListContainer'
import * as React from 'react';

import { stackOptions, correctiveOptions } from './AppNavigationOptions'
import CorrectiveInputFormContainer from '../Containers/CorrectiveInputFormPage/CorrectiveInputFormContainer';
// Manifest of possible screens

const CorrectiveStack = createStackNavigator()
const MainTab = createBottomTabNavigator()

const CorrectiveScreen = () => {
  return (
    <CorrectiveStack.Navigator
      screenOptions={stackOptions}
    >
      <CorrectiveStack.Screen
        name="CorrectiveList"
        component={CorrectiveListContainer}
        options={correctiveOptions}
      />
      <CorrectiveStack.Screen
        name="CorrectiveDetail"
        component={CorrectiveDetailContainer}
        options={({ route }) => ({ title: route.params.ticketNo })}
      />
      <CorrectiveStack.Screen
        name="CorrectiveInputForm"
        component={CorrectiveInputFormContainer}
        options={({ route }) => ({ title: route.params.ticketNo })}
      />
    </CorrectiveStack.Navigator>
  )
}

const MainScreen = () => {
  return (
    <MainTab.Navigator
      screenOptions={{ tabBarVisible: false }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeContainer}
      />
      <MainTab.Screen
        name="Corrective"
        component={CorrectiveScreen}
      />
    </MainTab.Navigator>
  )
}

const AppNavigation = MainScreen

export default AppNavigation
