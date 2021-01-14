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
 */

import React from 'react'
import {
  View
} from 'react-native'
import { Styles } from './Styles/ButtonTabStyle'
import { Button } from './Button'

const ButtonTab = (props) => {
  const {
    data,
    containerStyle,
    totalWidth,
    selectedTab,
    onPressCb
  } = props
  const buttons = []

  const onPressFunc = (value) => () => {
    onPressCb(value)
  }
  let buttonWidth = totalWidth / data.length

  data.forEach((value, index) => {
    let text = value.charAt(0).toUpperCase() + value.slice(1)
    let type = ''
    if (index === 0) type = 'leftRound'
    else if (index === data.length - 1) type = 'rightRound'

    buttons.push(
      <Button
        key={'ticketButtonTab_' + (index)}
        style={[Styles.buttonStyle, { width: buttonWidth }]}
        type='outline'
        isActive={selectedTab === value}
        useDisabledStyle={selectedTab !== value}
        roundType={type}
        onPressCb={onPressFunc(value)}
        title={text}
      />)
  })



  return (
    <View style={containerStyle}>
      {buttons}
    </View>
  )
}

export { ButtonTab }
