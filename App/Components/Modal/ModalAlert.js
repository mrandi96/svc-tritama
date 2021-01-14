import { View, Modal, Text, TouchableHighlight } from 'react-native';
import { Images } from '../../Themes';
import { styles } from './Styles/ModalAlertStyle'

const ModalIconType = {
  warning: 'warning',
  success: 'success',
  error: 'error',
  none: 'none'
}

const ModalAlert = (props) => {
  const { modalVisible, onClosed, onPress, headerText, subHeaderText, modalIcon } = props
  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onClosed()
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          {modalIcon === ModalIconType.warning ?
            <Image source={Images.warnSign} style={styles.modalIcon} />
            : null
          }

          <Text style={styles.headerText}>{headerText}</Text>
          {subHeaderText ? null : <Text>{subHeaderText}</Text>}
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              onPress();
            }}
          >
            <Text style={styles.buttonText}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

export { ModalAlert, ModalIconType };