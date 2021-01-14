import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import { Images } from '../../Themes';
import { Styles } from './Styles/ModalUpload'
import Modal from 'react-native-modal'

const ModalUpload = (props) => {
    const { onUploadFhoto, photo, modalVisible, onClosed, onPress, onPressVisibleModal } = props
    return (
        <Modal
            presentationStyle="overFullScreen"
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onClosed()
            }}
            style={Styles.modalContainer}
        >
            <View style={Styles.modalBody}>
                <View style={Styles.containterButtonClose}>
                    <TouchableOpacity onPress={onPressVisibleModal}>
                        <Text style={Styles.textButtonClose}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.modalContentBody}>
                    <View style={Styles.containerPicture}>
                        <View style={Styles.boxCamera}>
                            <Image source={{ uri: photo }} style={Styles.cameraIcon} />
                        </View>
                    </View>
                    <View>
                        <Text>Description</Text>
                        <TextInput
                            placeholder='Write your description here …'
                            multiline={true}
                            numberOfLines={4}
                            style={Styles.textInputMultiLineStyle}
                            placeholderTextColor='#737373'
                            underlineColorAndroid='transparent'
                            onChangeText={() => alert('ok')}
                        />
                    </View>
                    <View style={Styles.footerContainer}>
                        <Pressable style={Styles.buttonProceed} onPress={() => onUploadFhoto()}>
                            <Text style={Styles.buttonText}>UPLOAD</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export { ModalUpload };