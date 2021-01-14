import { StyleSheet } from 'react-native';

import { Colors, FontType, FontSize } from '../../../Themes';
export default StyleSheet.create({
  modalContainer: {
    backgroundColor: "#00000099",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    backgroundColor: Colors.white,
    width: 300,
    borderRadius: 10,
    height: 300,
    justifyContent: 'center',
    padding: 20
  },
  modalIcon: {
    width: 45,
    height: 45
  },
  button: {
    backgroundColor: Colors.flamingo,
    height: 50,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.largeTitle,
    color: Colors.black,
  },
  subHeaderText: {
    fontFamily: FontType.regular,
    fontSize: FontSize.body,
    color: Colors.black,
  },
  buttonText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.largeTitle,
    color: Colors.white,
  },
})
