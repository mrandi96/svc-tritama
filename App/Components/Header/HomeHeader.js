/**
 * StackHeaderComponent.
 * Show header tab navigation stack
 * how to use: import { StackHeader } from './Components/Header/StackHeader.component';
 *
 * @param {function} onPressBack - Function executed when back button is pressed. (Required)
 * @param {string} title - Prop if is set to true, the right component will be displayed.
 */
import React from 'react';
import { View, Image, Text, ImageBackground, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import { RoundedAvatar } from './../Avatar/RoundedAvatar'

import { Images } from '../../Themes';

import { Styles } from './Styles/HomeHeaderStyle'

const HomeHeader = (props) => {
  return (
    <ImageBackground style={Styles.homeHeaderContainer} source={Images.homeBackground}>
      <SafeAreaView style={Styles.topHeader}>
        <Image style={Styles.tritamaLogo} source={Images.tritamaLogo}></Image>
        <Text style={Styles.welcomeText}>Welcome</Text>
        {props.children}
      </SafeAreaView>
      <View style={Styles.profileColumn}>
        <RoundedAvatar
          source={props.avatarImageSrc ?? props.avatarImageSrc}
          size={88}
          style={Styles.profileAvatar}
        />
        <Text style={Styles.name}>{props.name}</Text>
        <Text style={Styles.phoneNo}>{props.phoneNo}</Text>
      </View>
    </ImageBackground>
  )
}

HomeHeader.propTypes = {
  avatarImageSrc: PropTypes.string,
  name: PropTypes.string,
  phoneNo: PropTypes.string,
};

export { HomeHeader };

