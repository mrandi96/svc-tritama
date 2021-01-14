import { StyleSheet } from 'react-native';

import { Colors, FontType, FontSize } from '../../../Themes';

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 25
  },
  text: {
    fontFamily: FontType.medium,
    fontSize: FontSize.bodyStatus,
    color: Colors.tundora
  }
})

export { Styles };
