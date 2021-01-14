import { StyleSheet } from 'react-native';

import { Colors } from '../../../Themes';

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconSize: {
    width: 130,
    height: 130,
    resizeMode: 'cover'
  },
  viewIconTritama: {
    position: 'absolute'
  },
  iconTritamaSize: {
    width: 50,
    height: 50
  }
});

export { Styles };
