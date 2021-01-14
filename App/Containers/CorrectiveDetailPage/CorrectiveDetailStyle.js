import { StyleSheet } from 'react-native'
import { Colors, FontType, FontSize } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.concrete,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  dataContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10
  },
  headerContainer: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  headerContainerText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.title,
    color: Colors.black,
  },
  headerContainerStatus: {
    width: 80,
    height: 30,
    backgroundColor: Colors.brightTurquoise,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  headerContainerStatusText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.bodyStatus,
    color: Colors.white,
    textTransform: 'capitalize'
  },
  contentContainer: {
    marginTop: 8,
    marginBottom: 25
  },
  contentItemContainer: {
    marginVertical: 5,
  },
  descriptionText: {
    marginTop: 5,
    fontFamily: FontType.medium,
    fontSize: FontSize.bodyStatus,
    color: Colors.woodSmoke,
    marginBottom: 8
  },
  dataText: {
    fontFamily: FontType.light,
    fontSize: FontSize.bodyStatus,
    color: Colors.woodSmoke,
  },
  footerContainer: {
    marginVertical: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonProceed: {
    backgroundColor: Colors.flamingo,
    height: 50,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.largeTitle,
    color: Colors.white,
  },
  newColor: {
    backgroundColor: Colors.brightTurquoise
  },
  openColor: {
    backgroundColor: Colors.tulipTree
  },
  closeColor: {
    backgroundColor: Colors.thunderbird
  }
})
