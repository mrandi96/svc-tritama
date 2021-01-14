import { StyleSheet } from 'react-native';

import { Colors, FontType, FontSize } from '../../../Themes';

const Styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    containerViewCamera: {
        display: 'flex',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        marginRight: 5
    },
    cameraIcon: {
        width: 25,
        height: 20
    },
    buttonPlus: {
        display: 'flex',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 10
    },
    plusIcon: {
        width: 20,
        height: 20
    },
    buttonAddMore: {
        display: 'flex',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 10
    },
    textAddMore: {
        color: Colors.dustyGray,
        textAlign: 'center'
    }
});

export { Styles };
