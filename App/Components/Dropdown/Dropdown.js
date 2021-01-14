/**
 *  ButtonRounded.
 *  A react native component that renders a rounded button
 *  that have two option of filled with yellow background color or
 *  transparent based on 'type' props.
 *
 *  How to use: import { ButtonRounded } from './Components/Buttons/ButtonRounded/ButtonRounded.component'
 *
 * 
 *  @param {Array} items - data of dropdown

 */

import React from 'react'
import PropTypes from 'prop-types'
import DropDownPicker from 'react-native-dropdown-picker';
import { Image, Text } from 'react-native';

import { Images } from '../../Themes'

import { Styles } from './Styles/DropdownStyle'

const Dropdown = (props) => {
    const {
        items,
        onChangeItem
    } = props

    return (
        <DropDownPicker
            items={items}
            containerStyle={Styles.containerStyle}
            itemStyle={Styles.itemStyle}
            customArrowDown={() => <Image source={Images.arrowDownIcon} />}
            customArrowUp={() => <Text></Text>}
            dropDownStyle={Styles.dropDownStyle}
            placeholderStyle={Styles.placeholderStyle}
            selectedLabelStyle={Styles.selectedLabelStyle}
            dropDownMaxHeight={200}
            onChangeItem={item => onChangeItem(item)}
        />
    )
}

Dropdown.propTypes = {
    onChangeItems: PropTypes.func,
    items: PropTypes.array
}

export { Dropdown }
