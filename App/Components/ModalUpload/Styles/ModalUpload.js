import { StyleSheet } from 'react-native';

import { Colors, FontType, FontSize } from '../../../Themes';
export const Styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#00000099",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBody: {
    backgroundColor: Colors.white,
    width: 300,
    borderRadius: 10,
    height: 350,
    padding: 10
  },
  modalContentBody:
  {
    display: 'flex',
    height: '95%',
    justifyContent: 'space-around'
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
  containterButtonClose: {
    width: '100%',
    height: 20,
    display: 'flex',
    alignItems: 'flex-end'
  },
  textButtonClose: {
    fontSize: FontSize.headline,
    color: Colors.dustyGray
  },
  containerPicture: {
    display: 'flex',
    alignItems: 'center'
  },
  boxCamera: {
    height: 126,
    width: 126,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  textInputMultiLineStyle: {
    fontFamily: FontType.regular,
    fontSize: FontSize.smallLabel,
    color: Colors.woodSmoke,
    borderColor: Colors.concrete,
    borderWidth: 1,
    borderRadius: 6
  },
  footerContainer: {
    justifyContent: 'flex-end',
    display: 'flex'
  },
  buttonProceed: {
    backgroundColor: Colors.flamingo,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  buttonText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.largeTitle,
    color: Colors.white,
  },
  cameraIcon: {
    width: '100%',
    height: '100%'
  }
})
