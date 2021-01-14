import { StyleSheet } from 'react-native'
import { Colors, FontType, FontSize } from '../../Themes'

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    padding: 15,
    backgroundColor: Colors.concrete
  },
  indicatorContainer: {
    height: 100,
    paddingTop: 30,
    justifyContent: 'center',
  },
  periodicProcessContainer: {
    height: 180,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginTop: 0,
    marginBottom: 14,
    borderRadius: 6,
    zIndex: 1,
    position: 'relative',
    overflow: 'hidden'
  },
  foCutAreaContainer: {
    height: 100,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginTop: 0,
    marginBottom: 14,
    borderRadius: 6,
    zIndex: 1,
    position: 'relative'
  },
  cardContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginVertical: 14,
    borderRadius: 6
  },
  cardContainerTitle: {
    fontFamily: FontType.medium,
    fontSize: FontSize.bodyStatus,
    color: Colors.woodSmoke,
    marginBottom: 6
  },
  cardContainerSubTitle: {
    marginVertical: 10,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallLabel,
    color: Colors.woodSmoke,
  },
  textInputStyle: {
    fontFamily: FontType.regular,
    fontSize: FontSize.smallLabel,
    color: Colors.woodSmoke,
    borderColor: Colors.concrete,
    borderWidth: 1,
    height: 40,
    width: 107,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6
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
    marginVertical: 22,
    alignItems: 'center',
    justifyContent: 'space-around'
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
  buttonClock: {
    backgroundColor: Colors.flamingo,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6
  },
  buttonIcon: {
    height: 25,
    width: 25,
  },
  timeInputContainer: {
    flexDirection: 'row'
  },
  scrollPage: {
    flex: 1
  }
})
