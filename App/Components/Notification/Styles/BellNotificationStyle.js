import { StyleSheet } from 'react-native';

import { Colors, FontType } from '../../../Themes';

const Styles = StyleSheet.create({
  bellNotifContainer: {
    width: 40,
    height: 40,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bellNotif: {
    width: 20,
    height: 24,
  },
  countContainer: {
    position: 'absolute',
    backgroundColor: Colors.torchRed,
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    top: 5,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    fontFamily: FontType.regular,
    color: Colors.white,
    fontSize: 8
  }
});

export { Styles };
