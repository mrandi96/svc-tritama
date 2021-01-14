import { StyleSheet } from 'react-native'
import { Colors, FontType, FontSize } from '../../Themes/'


export default StyleSheet.create({
  header: {
    backgroundColor: Colors.concrete
  },
  container: {
    height: 48
  },
  headerContainer: {
    flex: 1,
  },
  titleContainer: {
    resizeMode: 'stretch',
  },
  titleContent: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: '#fff'
  },
  fontActivity: {
    marginLeft: 20,
    fontFamily: FontType.medium,
    fontSize: FontSize.title,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Colors.white,
  }
})
