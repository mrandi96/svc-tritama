/**
 * RoundedAvatar.
 * A react native s component that renders a rounded image or avatar
 * 
 * How to use: import { RoundedAvatar } from './Components/RoundedAvatar/RoundedAvatar.component'
 * 
 * @param {source} string - The image source (either a remote URL or a local file resource).
 * @param {radius} number - Size of the avatar. (Required) 
 * @param {style} object - Styles for customize rounded avatar component.
 */

import React from 'react';
import { Image } from 'react-native';

import { Images } from '../../Themes';

import { Styles } from './Styles/RoundedAvatarStyle';

const RoundedAvatar = ({ source, size, style = null }) => {

  if (!source) {
    return (
      <Image source={source ? source : Images.avatarDefault} style={[Styles(size).noPicture, style]} />
    );
  } else {
    return (
      <Image
        source={source}
        style={[Styles(size).profilePicture, style]}
      />
    );
  }
};

export { RoundedAvatar };
