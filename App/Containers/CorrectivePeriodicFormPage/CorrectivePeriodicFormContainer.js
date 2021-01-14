import React, { Component, Fragment } from 'react'
import { View, Text, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import styles from './CorrectivePeriodicFormStyles'

class CorrectivePeriodicFormContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  renderHeader = () =>
    <View style={styles.headerContainer}>

    </View>

  renderPeriodicProcessSection = () => {
    return (
      <View style={styles.periodicProcessContainer}>
        <Text style={styles.cardContainerTitle}>Time Arrived</Text>
      </View>
    )
  }

  renderTeamArrivedSection = () =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardContainerTitle}>Time Arrived</Text>
      <View>
        <Text style={styles.cardContainerSubTitle}>Input Time</Text>
        <TextInput
          placeholder="Enter Name here"
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
      </View>
      <View>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder="Write your description here …"
          multiline={true}
          numberOfLines={4}
          style={styles.textInputStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
        />
      </View>
    </View>

  renderSplicingSection = () =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardContainerTitle}>Time Arrived</Text>
      <View>
        <Text style={styles.cardContainerSubTitle}>Input Time</Text>
        <TextInput
          placeholder="Enter Name here"
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
      </View>
      <View>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder="Write your description here …"
          multiline={true}
          numberOfLines={4}
          style={styles.textInputStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
        />
      </View>
    </View>

  renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Pressable style={styles.buttonProceed} onPress={this.onPressProceed}>
          <Text style={styles.buttonText}>LANJUTKAN</Text>
        </Pressable>
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView enabled >
          {this.renderHeader()}
          {this.renderPeriodicProcessSection()}
          {this.renderTeamArrivedSection()}
          {this.renderSplicingSection()}
          {this.renderFooter()}
        </KeyboardAvoidingView>
      </ScrollView>
    )

  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrectivePeriodicFormContainer)
