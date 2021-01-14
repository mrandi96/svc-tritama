import { StyleSheet } from 'react-native';

import { Colors, FontType, FontSize } from '../../../Themes';

const Styles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.flamingo
  },
  secondary: {
    backgroundColor: Colors.buttercup
  },
  outline: {
    backgroundColor: Colors.white,
    borderWidth: 0.5,
  },
  outlineDisabled: {
    backgroundColor: Colors.alabaster,
    borderWidth: 0.5,
    borderColor: Colors.dustyGray
  },
  outlineActive: {
    backgroundColor: Colors.pictonBlue
  },
  fontLarge: {
    fontSize: FontSize.title
  },
  fontMedium: {
    fontSize: FontSize.bodyStatus
  },
  fontSmall: {
    fontSize: FontSize.label
  },
  titlePrimary: {
    color: Colors.WHITE,
    fontFamily: FontType.bold
  },
  titleOutline: {
    color: Colors.black,
    fontFamily: FontType.light
  },
  titleOutlineActive: {
    color: Colors.white,
    fontFamily: FontType.bold
  },
  titleOutlineDisabled: {
    color: Colors.silver,
    fontFamily: FontType.medium
  },
  round: {
    borderRadius: 6
  },
  leftRound: {
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6
  },
  rightRound: {
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6
  }
});

export { Styles };
