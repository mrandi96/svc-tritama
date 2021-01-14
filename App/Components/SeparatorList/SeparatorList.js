/**
 * SeparatorList.
 * A react native s component that show a line or border at bottom of each ListItem
 * 
 * How to use: import { SeparatorList } from './Components/SeparatorList/SeparatorList.component'
 * 
 * @param {style} style - Styles for customize separator list.
 */

import React from 'react';
import { View, ViewPropTypes } from 'react-native';

import { Styles } from './Styles/SeparatorListStyle';

const SeparatorList = ({ style = null }) => {
  return (
    <View style={[Styles.line, style]} />
  );
};

SeparatorList.propTypes = {
  style: ViewPropTypes.style
};

export { SeparatorList };