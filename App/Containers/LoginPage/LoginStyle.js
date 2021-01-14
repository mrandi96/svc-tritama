import { StyleSheet } from 'react-native';

import { FontType, FontSize, Colors } from '../../Themes';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  inner: {
    padding: 24,
  },
  textLogin: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: FontSize.title,
    color: Colors.white,
    fontFamily: FontType.regular
  },
  buttonLogin: {
    marginTop: 30,
    backgroundColor: Colors.flamingo,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.largeTitle,
    color: Colors.white,
  },

  registerHere: {
    color: Colors.black,
    fontFamily: FontType.regular
  },
  dontHaveAccount: {
    marginRight: 5,
    fontFamily: FontType.regular
  },
  rowAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24
  },
  forgetPass: {
    textAlign: 'right',
    fontFamily: FontType.regular,
    color: Colors.black
  },
  logo: {
    width: '33%',
    height: '28%',
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  title: {
    color: Colors.dustyGray,
    fontWeight: '600',
    fontFamily: FontType.regular
  },
  fontStd: {
    fontFamily: FontType.medium,
    fontSize: FontSize.smallLabel
  },
  margin: {
    paddingTop: 14,
    paddingBottom: 18
  },
  maskPasswordContainer: {
    width: 24,
    height: 24
  },
  maskPassword: {
    width: 16,
    height: 16
  }
});

export { Styles };
