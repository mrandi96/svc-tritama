import React from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class OpenCamera extends React.Component {
    constructor(props) {
        super(props)
        this.onCLose = this.props
    }
    render() {
        const { onCLose } = this.props
        return (
            <View style={styles.container}>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={this.handleCloseCamera.bind(this)} style={styles.exit}>
                        <Text style={{ fontSize: 12 }}> X </Text>
                    </TouchableOpacity>
                </View>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture = async () => {
        const { getPhoto } = this.props

        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            getPhoto(data)
        }
    };

    handleCloseCamera = async () => {
        const { closeCam } = this.props
        closeCam()
    }
}

export default OpenCamera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    exit: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5,
        alignSelf: 'center',
        margin: 10,
    },
});