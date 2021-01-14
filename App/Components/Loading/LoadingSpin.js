/**
 * BoostLoading.
 * Loading screen with boost icon and spinning circle gif as indicator.
 *
 * How to use: import { BoostLoading } from './Components/BoostLoading/BoostLoading.component.js'
 */

import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Images } from '../../Themes/';

import { Styles } from './Styles/LoadingSpinStyle';

const LoadingSpin = (props) => (
  <View style={props?.container ? props?.container : Styles.container}>
    <View style={Styles.viewIconTritama}>
      <FastImage
        source={Images.tritamaLogo}
        style={Styles.iconTritamaSize}
      />
    </View>
    <FastImage
      source={Images.loadingBall}
      style={Styles.iconSize}
    />
  </View>
);

export { LoadingSpin };
