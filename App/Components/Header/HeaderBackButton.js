/**
 * StackHeaderComponent.
 * Show header tab navigation stack
 * how to use: import { StackHeader } from './Components/Header/StackHeader.component';
 *
 * @param {function} onPressBack - Function executed when back button is pressed. (Required)
 * @param {string} title - Prop if is set to true, the right component will be displayed.
 */
import React from 'react';
import { Pressable, Image } from 'react-native';

import { Images } from '../../Themes';

import { Styles } from './Styles/HeaderBackButtonStyle'

const HeaderBackButton = (props) => {
  const onPressBack = () => () => {
    props.pressBack()
  }
  return (
    <Pressable onPress={onPressBack(props)}>
      <Image source={Images.whiteBackArrow} style={Styles.icon} />
    </Pressable>
  )
}
 


export default HeaderBackButton

