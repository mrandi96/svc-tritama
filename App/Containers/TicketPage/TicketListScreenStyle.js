import { StyleSheet } from 'react-native'
import { Colors, FontType, FontSize } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.concrete
  },
  headerContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionHeader: {
    backgroundColor: Colors.mercury,
    height: 35,
    justifyContent: 'center',
    paddingLeft: 24
  },
  sectionHeaderText: {
    fontFamily: FontType.bold,
    fontSize: FontSize.label,
    color: Colors.tundora
  },
  correctiveDataButton: {
    height: 40,
    paddingLeft: 14,
    marginVertical: 12,
    marginHorizontal: 25,
    justifyContent: 'center'
  }
})
