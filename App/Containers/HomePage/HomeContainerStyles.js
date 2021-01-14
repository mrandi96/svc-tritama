import { StyleSheet } from 'react-native'
import { Colors, FontSize, FontType} from '../../Themes/'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.concrete
  },
  buttonContainer: {
    marginTop: -40,
    width: '90%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
    borderRadius: 5
  },
  buttonMenu: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageButton: {
    width: 40,
    height: 40,
    marginBottom: 6
  },
  textButton: {
    fontFamily: FontType.regular,
    fontSize: FontSize.bodyStatus,
    fontWeight: '500',
  }, 
  contentHeaderContainer:{
    marginTop: 17,
    marginLeft: 13,
    justifyContent: 'center',
  },
  contentHeaderText: {
    fontFamily: FontType.medium,
    fontSize: FontSize.bodyStatus,
    color: Colors.black
  },
  cardContainer: {
    flex: 1,
    width: '90%',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: Colors.white,
  },
  cardTitle: {
    fontFamily: FontType.bold,
    fontSize: FontSize.bodyStatus,
    color: Colors.black,
    marginVertical: 9,
    justifyContent: 'center'
  },
  listDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  },
  ticketNo: {
    fontFamily: FontType.regular,
    fontSize: FontSize.bodyStatus,
    color: Colors.black
  }, 
  status: {
    fontFamily: FontType.regular,
    fontSize: FontSize.bodyStatus,
  },
  newColor: {
    color: Colors.brightTurquoise
  },
  openColor: {
    color: Colors.tulipTree
  },
  closeColor: {
    color: Colors.thunderbird
  },
  cardSeparator: {
    marginVertical: 10
  }
})
