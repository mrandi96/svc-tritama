/**
 *  ButtonRounded.
 *  A react native component that renders a rounded button
 *  that have two option of filled with yellow background color or
 *  transparent based on 'type' props.
 *
 *  How to use: import { ButtonRounded } from './Components/Buttons/ButtonRounded/ButtonRounded.component'
 *
 *  @param {function} onPress - Action executed when button is pressed.
 *  @param {string} type - Color theme for the button, choose between filled and outline. (required)
 *  @param {string} size - Size of the button (large/medium/small).
 *  @param {string} title - Text displayed in the middle of the button. (required)
 *  @param {object} customColor - Custom style object for custom color.
 *  @param {boolean} disabled - Props to disable the button.
 *  @param {style} style - default style
 *  @param {key} key - koncian
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  Pressable,
  Text,
  ViewPropTypes
} from 'react-native'

import { Styles } from './Styles/ButtonStyle'

const Button = (props) => {
  const {
    onPressCb,
    title,
    type,
    fontSize,
    roundType,
    isActive,
    disabled,
    useDisabledStyle,
    style
  } = props

  const color = () => {
    switch (type) {
      case 'primary':
        return Styles.primary
      case 'secondary':
        return Styles.secondary
      default:
        if (isActive) {
          return Styles.outlineActive
        } else if (disabled || useDisabledStyle) {
          return Styles.outlineDisabled
        } else {
          return Styles.outline
        }
    }
  }

  const round = () => {
    switch (roundType) {
      case 'round':
        return Styles.round
      case 'leftRound':
        return Styles.leftRound
      case 'rightRound':
        return Styles.rightRound
    }
  }

  const getFontSize = () => {
    switch (fontSize) {
      case 'large':
        return Styles.fontLarge
      case 'small':
        return Styles.fontSmall
      default:
        return Styles.fontMedium
    }
  }

  const fontColor = () => {
    switch (type) {
      case 'primary':
        return Styles.titlePrimary
      case 'secondary':
        return Styles.titlePrimary
      default:
        if (isActive) {
          return Styles.titleOutlineActive
        }
        else if (disabled || useDisabledStyle) {
          return Styles.titleOutlineDisabled
        } else {
          return Styles.titleOutline
        }
    }
  }

  const onPressFunc = (value) => () => {
    onPressCb(value)
  }

  return (
    <Pressable
      style={[style, color(), round()]}
      onPress={onPressFunc(title)}
      disabled={disabled}
    >
      <Text
        style={[getFontSize(), fontColor()]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  fontSize: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  customColor: ViewPropTypes.style,
  isActive: PropTypes.bool,
  roundType: PropTypes.string
}

export { Button }
