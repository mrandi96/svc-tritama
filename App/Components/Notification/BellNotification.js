/**
 * StackHeaderComponent.
 * Show header tab navigation stack
 * how to use: import { StackHeader } from './Components/Header/StackHeader.component';
 *
 * @param {function} onPressBack - Function executed when back button is pressed. (Required)
 * @param {string} title - Prop if is set to true, the right component will be displayed.
 */
import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

import { Images } from '../../Themes';

import { Styles } from './Styles/BellNotificationStyle'

const BellNotification = (props) => {
  const { unreadMessagesCount, onPress } = props
  return (
    <Pressable style={Styles.bellNotifContainer} onPress={onPress}>
      <Image style={Styles.bellNotif} source={Images.bellNotif}></Image>
      {unreadMessagesCount > 0 &&
        <View style={Styles.countContainer}>
          <Text style={Styles.count}>
            {unreadMessagesCount}
          </Text>
        </View>
      }
    </Pressable>
  )
}

BellNotification.propTypes = {
  unreadMessagesCount: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export { BellNotification };

