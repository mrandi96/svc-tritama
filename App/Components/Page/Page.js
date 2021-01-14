import React from 'react';
import { View } from 'react-native';
import { Styles } from './Styles/PageStyles'

const Page = (props) => {
  return (
    <View
      style={ props.styles ? props.styles : Styles.container }
    >
      {props.children}
    </View>
  );
};

export default Page;
