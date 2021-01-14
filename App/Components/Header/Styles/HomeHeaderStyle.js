import { Colors, FontSize, FontType } from '../../../Themes';

const Styles = {
  homeHeaderContainer: {
    height: 300,
    paddingVertical: 10
  },
  tritamaLogo: {
    width: 40,
    height: 40,
    left: 15,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontFamily: FontType.regular,
    fontSize: FontSize.largeTitle,
    fontWeight: '500',
    color: Colors.white
  },
  profileColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileAvatar: {
    marginTop: 10,
    marginBottom: 13,
    borderColor: Colors.white,
    borderWidth: 2
  },
  name: {
    fontFamily: FontType.regular,
    fontSize: FontSize.largeTitle,
    fontWeight: '500',
    color: Colors.white,
    marginBottom: 5
  },
  phoneNo: {
    fontFamily: FontType.regular,
    fontSize: FontSize.bodyStatus,
    fontWeight: '400',
    color: Colors.white
  },
};

export { Styles };

