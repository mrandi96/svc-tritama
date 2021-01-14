/**
 *  ButtonRounded.
 *  A react native component that renders a rounded button
 *  that have two option of filled with yellow background color or
 *  transparent based on 'type' props.
 *
 *  How to use: import { ButtonRounded } from './Components/Buttons/ButtonRounded/ButtonRounded.component'
 *
 * 
 *  @param {string} containerStyles - Style of Container
 *  @param {string} imageStyles - Style of Image
 *  @param {string} textStyles - Style of Text
 *  @param {string} text - Text value

 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View
} from 'react-native'

import FastImage from 'react-native-fast-image';

import { Images } from '../../Themes'

import { Styles } from './Styles/EmptyListStyle'

const EmptyList = (props) => {
  const {
    containerStyles,
    imageStyles,
    textStyles,
    text
  } = props

  return (
    <View style={containerStyles ? containerStyles : Styles.container}>
      <FastImage style={imageStyles ? imageStyles : Styles.image} source={Images.note} />
      <Text style={textStyles ? textStyles : Styles.text}>{text}</Text>
    </View>
  )
}

EmptyList.propTypes = {
  containerStyles: PropTypes.string,
  imageStyles: PropTypes.string,
  textStyles: PropTypes.string,
  text: PropTypes.string
}

export { EmptyList }
