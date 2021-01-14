import { Platform, Dimensions, NativeModules } from 'react-native';
import { get } from 'lodash';

import { Constants } from '../Constants/Constants';

const { width, height } = Dimensions.get('window');

const isAndroid = () => Platform.OS === Constants.PLATFORM.ANDROID;

const isIOS = () => Platform.OS === Constants.PLATFORM.IOS;

const isNative = () =>
  Platform.OS === Constants.PLATFORM.ANDROID || Platform.OS === Constants.PLATFORM.IOS;

const isIpad = () => {
  return isIOS() && get(NativeModules, 'DeviceProfile.device', 'iPhone') === 'iPad';
};

const isIphoneX = () => {
  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }
  return (isIOS() && ratio >= 2.0);
};

const iPhoneMarginTopSafeArea = () => (isIphoneX() ? 44 : 20);

const osVersion = () => {
  return parseInt(Platform.Version, 10);
};

const iOSBefore10 = () => {
  return (osVersion() <= 10);
};

const iOSAfter10 = () => {
  return (osVersion() >= 11 && isIOS());
};

const isViewPort320 = () => {
  if (width === 320) {
    return true;
  }
  return false;
};

export {
  isAndroid,
  isIOS,
  isNative,
  isIphoneX,
  iPhoneMarginTopSafeArea,
  iOSBefore10,
  iOSAfter10,
  isViewPort320,
  isIpad,
  height,
  width
};
