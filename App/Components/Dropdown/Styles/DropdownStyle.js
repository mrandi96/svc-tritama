import { StyleSheet } from 'react-native';

import { Colors, FontType, FontSize } from '../../../Themes';

const Styles = StyleSheet.create({
    containerStyle: {
        minHeight: 40,
        zIndex: 10
    },
    itemStyle: {
        justifyContent: 'flex-start'
    },
    dropDownStyle: {
        position: 'relative',
        marginTop: -30,
        fontSize: FontSize.bodyStatus
    },
    placeholderStyle: {
        color: Colors.dustyGray,
        fontSize: FontSize.bodyStatus
    },
    selectedLabelStyle: {
        color: Colors.black,
        fontSize: FontSize.bodyStatus
    }
});

export { Styles };
