import { Colors, FontType, FontSize, Images } from '../Themes'
import React from 'react'
import { View, Image } from 'react-native';
import Styles from './Styles/NavigationStyles'
import { TabActions } from '@react-navigation/native';

import HeaderBackButton from '../Components/Header/HeaderBackButton'

const backImages = () => {
  return (
    <Image source={require('../Assets/Images/back_arrow_white.png')} style={Styles.icon} />
  )
}

const stackOptions = {
  headerStyle: {
    backgroundColor: Colors.pictonBlue, // Specify the height of your custom header
  },
  headerTitleStyle: {
    fontFamily: FontType.medium,
    fontSize: FontSize.title,
    letterSpacing: 0,
    color: Colors.white
  },
  headerBackTitleVisible: false,
  headerBackImage: backImages,
  headerBackTitleStyle: Styles.icon,
  headerLeftContainerStyle: {
    left: 10
  }
}

const correctiveOptions = ({ navigation }) => {
  const jumpToHome = TabActions.jumpTo('Home');
  const onPressBack = () => {
    navigation.dispatch(jumpToHome)
  }
  return ({
    headerLeft: () => <HeaderBackButton pressBack={onPressBack}/>
  })
}

export { stackOptions, correctiveOptions }