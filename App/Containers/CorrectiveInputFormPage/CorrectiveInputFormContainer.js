import React, { Component } from 'react';
import { View, Text, Pressable, ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import StepIndicator from 'react-native-step-indicator';
import Svg, { Circle } from 'react-native-svg';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { connect } from 'react-redux'
import { Images } from '../../Themes'
import { LoadingSpin } from '../../Components/Loading/LoadingSpin'
import MasterRedux from '../../Redux/MasterRedux'
import UploadImageRedux from '../../Redux/UploadImageRedux'

import Page from '../../Components/Page/Page';
import styles from './CorrectiveInputFormStyle'
import { Dropdown, Formupload, ModalUpload, OpenCamera } from '../../Components';

class CorrectiveInputFormContainer extends Component {
  constructor(props) {
    super(props)
    this.pagerRef = React.createRef()
    this.state = {
      currentPage: 0,
      isDateTimePickerVisible: false,
      datePickerMode: 'time',
      selectedInput: '',
      timeArrival: '',
      timeArrivalDescription: '',
      timeSplicing: '',
      timeSplicingDescription: '',
      selectedFoCutArea: '',
      detailAddressCp: '',
      selectedNewRootCause: '',
      selectedRootCause: '',
      subRootCauseDescription: '',
      restoreDescription: '',
      remarkDescription: '',
      selectedStatusRectication: '',
      statusJumperDescription: '',
      statusJoinCoreDescription: '',
      depthDescription: '',
      rslDescription: '',
      ttRestoreSelectedDate: '',
      ttRestoreSelectedTime: '',
      ttRestoreTime: '',
      ttRestoreDescription: '',
      periodicPictures: [],
      cutLocationPictures: [],
      modalVisible: false,
      cameraVisible: false,
      setPhoto: '',
      dataPhoto: ''
    };

    this.rootCauseList = []
    this.newRootCauseList = []
    this.foCutArea = []

    this.indicatorStyle = {
      stepIndicatorSize: 18,
      currentStepIndicatorSize: 18,
      separatorStrokeWidth: 5,
      currentStepStrokeWidth: 0.5,
      stepStrokeWidth: 0.5,
      currentStepStrokeWidth: .5,
      stepStrokeCurrentColor: '#24B6F1',
      stepStrokeFinishedColor: '#24B6F1',
      stepStrokeUnFinishedColor: '#979797',
      separatorFinishedColor: '#56B4EC',
      separatorUnFinishedColor: '#979797',
      stepIndicatorFinishedColor: '#ffffff',
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 12,
      currentStepIndicatorLabelFontSize: 12,
      stepIndicatorLabelCurrentColor: '#979797',
      stepIndicatorLabelFinishedColor: '#979797',
      stepIndicatorLabelUnFinishedColor: '#979797',
      labelColor: '#050607',
      labelSize: 12,
      currentStepLabelColor: '#050607',
    };
  }

  componentDidMount() {
    const { getRootCauseList, getNewRootCauseList, getFoCutArea } = this.props
    // this.rootCauseList = getRootCauseList()
    // this.newRootCauseList = getNewRootCauseList()
    // this.foCutArea = getFoCutArea()
  }

  onChangeText = type => (value) => {
    this.setState({
      [type]: value
    })
  }

  itemsDataRootCause = () => {
    const { listDataRootCause } = this.props
    let data = [];
    if (listDataRootCause.length > 0) {
      listDataRootCause.forEach(e => (data.push({ label: e.name, value: e.id })))
    }
    return data;
  }

  itemsDataNewRootCause = () => {
    const { listDataNewRootCause } = this.props
    let data = [];
    if (listDataNewRootCause.length > 0) {
      listDataNewRootCause.forEach(e => (data.push({ label: e.name, value: e.id })))
    }
    return data;
  }

  itemsDataArea = () => {
    const { listDataArea } = this.props
    let data = [];
    if (listDataArea.length > 0) {
      listDataArea.forEach(e => (data.push({ label: e.name, value: e.id })))
    }
    return data;
  }


  onChangeItem = type => (item) => {
    this.setState({
      [type]: item.label
    })
  }

  changePageState = (nextPage) => {
    this.setState({ currentPage: nextPage })
  }

  handlePageChange = (nextPage) => {
    this.changePageState(nextPage)
    this.pagerRef.current.setPage(nextPage)
  }

  showTimePicker = (key) => () => {
    this.setState({ isDateTimePickerVisible: true, selectedInput: key, datePickerMode: 'time' })
  }

  showDatePicker = (key) => () => {
    this.setState({ isDateTimePickerVisible: true, selectedInput: key, datePickerMode: 'date' })
  }

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
  }

  handleSelectedDate = (key) => (date) => {
    const hour = moment(date).format('DD/MM/yyyy').toString()
    this.setState({ [key]: hour })
    this.hideDateTimePicker()
  }


  handleSelectedTime = (key) => (date) => {
    const hour = moment(date).format('HH:mm').toString()
    this.setState({ [key]: hour })
    this.hideDateTimePicker()
  }

  onPressPage = (validatePage) => () => {
    if (validatePage()) {
      const { currentPage } = this.state
      const nextPage = currentPage + 1
      this.changePageState(nextPage)
      this.pagerRef.current.setPage(nextPage)
    } else {

    }
  }

  validatePageOne = () => {
    return true
  }

  validatePageTwo = () => {
    return true
  }

  validatePageThree = () => {
    return true
  }

  renderStepIndicator = (params) => {
    const color = params.stepStatus === 'unfinished' ? '#737373' : '#24B6F1'

    return (
      <Svg height='12' width='12'>
        <Circle
          cx='6'
          cy='6'
          r='6'
          fill={color}
        />
      </Svg>
    )
  }

  renderFoCutAreaSection = () => {
    return (
      <View style={styles.foCutAreaContainer}>
        <Text style={styles.cardContainerTitle}>Fo Cut Area</Text>
        <Dropdown
          items={this.itemsDataArea()}
          onChangeItem={(item) => this.setState({ selectedFoCutArea: item.value })}
        />
      </View>

    )
  }

  renderDetailAddressCp = () => {
    const { detailAddressCp } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Detail Adrress Cp</Text>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={detailAddressCp}
          onChangeText={this.onChangeText('detailAddressCp')}
        />
      </View>
    )
  }

  itemsRootCause = () => {
    return (
      <>
        <View style={styles.periodicProcessContainer}>
          <Text style={styles.cardContainerTitle}>New Root Cause</Text>
          <Dropdown
            items={this.itemsDataNewRootCause()}
            onChangeItem={(item) => this.setState({ selectedRootCause: item.value })}
          />
          <Text style={styles.cardContainerTitle}>RootCause</Text>
          <Dropdown
            items={this.itemsDataRootCause()}
            onChangeItem={(item) => this.setState({ selectedRootCause: item.value })}
          />
        </View >
      </>
    )
  }

  renderSubRootCauseDescription = () => {
    const { subRootCauseDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Sub Root Cause</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={subRootCauseDescription}
          onChangeText={this.onChangeText('subRootCauseDescription')}
        />
      </View>
    )
  }

  renderRestoreDescription = () => {
    const { restoreDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Restore Description</Text>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={restoreDescription}
          onChangeText={this.onChangeText('restoreDescription')}
        />
      </View>
    )
  }

  renderRemarkDescription = () => {
    const { remarkDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>{'Remark (Crossing / Change Core)'}</Text>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={remarkDescription}
          onChangeText={this.onChangeText('remarkDescription')}
        />
        <Text style={styles.cardContainerTitle}>Status Rectication</Text>
        {/* <Dropdown
          ref='StatusRectication'
          icon='chevron-down'
          iconColor='#E1E1E1'
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{ height: 40, marginBottom: 15 }}
          data={[
            { label: 'Item 1', value: 'item1' },
            { label: 'Item 2', value: 'item2' },
          ]}
          onChangeText={this.onChangeItem('selectedStatusRectication')}
        /> */}
      </View>
    )
  }

  renderStatusJumperDescription = () => {
    const { statusJumperDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Status Panjang Jumper</Text>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={statusJumperDescription}
          onChangeText={this.onChangeText('statusJumperDescription')}
        />
      </View>
    )
  }

  renderStatusJoinCoreDescription = () => {
    const { statusJoinCoreDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Status Join Core</Text>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={statusJoinCoreDescription}
          onChangeText={this.onChangeText('statusJoinCoreDescription')}
        />
      </View>
    )
  }

  renderDepthDescription = () => {
    const { depthDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Depth</Text>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={depthDescription}
          onChangeText={this.onChangeText('depthDescription')}
        />
      </View>
    )
  }

  rendeRslDescription = () => {
    const { rslDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>RSL After {'&'} Before</Text>
        <Text style={styles.cardContainerSubTitle}>Description</Text>
        <TextInput
          placeholder='Write your description here …'
          multiline={true}
          numberOfLines={4}
          style={styles.textInputMultiLineStyle}
          placeholderTextColor='#737373'
          underlineColorAndroid='transparent'
          defaultValue={rslDescription}
          onChangeText={this.onChangeText('rslDescription')}
        />
      </View>
    )
  }

  rendeTTRestoreSection = () => {
    const { ttRestoreSelectedTime, ttRestoreSelectedDate, ttRestoreDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>TT Restore</Text>
        <View>
          <Text style={styles.cardContainerSubTitle}>Input Time</Text>
          <View style={styles.timeInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
              editable={false}
              contextMenuHidden={true}
              selectTextOnFocus={false}
              defaultValue={ttRestoreSelectedDate}
            />
            <Pressable style={styles.buttonClock} onPress={this.showDatePicker('ttRestoreSelectedDate')}>
              <Image source={Images.clockIcon} style={styles.buttonIcon} />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={styles.cardContainerSubTitle}>Input Time</Text>
          <View style={styles.timeInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
              editable={false}
              contextMenuHidden={true}
              selectTextOnFocus={false}
              defaultValue={ttRestoreSelectedTime}
            />
            <Pressable style={styles.buttonClock} onPress={this.showTimePicker('ttRestoreSelectedTime')}>
              <Image source={Images.clockIcon} style={styles.buttonIcon} />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={styles.cardContainerSubTitle}>Description</Text>
          <TextInput
            placeholder='Write your description here …'
            multiline={true}
            numberOfLines={7}
            style={styles.textInputMultiLineStyle}
            placeholderTextColor='#737373'
            underlineColorAndroid='transparent'
            defaultValue={ttRestoreDescription}
            onChangeText={this.onChangeText('ttRestoreDescription')}
          />
        </View>
      </View>

    )
  }

  renderCutLocationProcessSection = () => {
    return (
      <View style={styles.periodicProcessContainer}>
        <Text style={styles.cardContainerTitle}>Periodic Process</Text>
        <View>
          <Text style={styles.cardContainerSubTitle}>Upload Image</Text>
        </View>
      </View>
    )
  }

  renderPeriodicProcessSection = () => {
    return (
      <View style={styles.periodicProcessContainer}>
        <Text style={styles.cardContainerTitle}>Periodic Process</Text>
        <View>
          <Text style={styles.cardContainerSubTitle}>Upload Image</Text>
          <Formupload onPress={() => this.setState({ cameraVisible: true })} />
        </View>
      </View>
    )
  }

  renderTeamArrivedSection = () => {
    const { timeArrival, timeArrivalDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Time Arrived</Text>
        <View>
          <Text style={styles.cardContainerSubTitle}>Input Time</Text>
          <View style={styles.timeInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
              editable={false}
              contextMenuHidden={true}
              selectTextOnFocus={false}
              defaultValue={timeArrival}
            />
            <Pressable style={styles.buttonClock} onPress={this.showTimePicker('timeArrival')}>
              <Image source={Images.clockIcon} style={styles.buttonIcon} />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={styles.cardContainerSubTitle}>Description</Text>
          <TextInput
            placeholder='Write your description here …'
            multiline={true}
            numberOfLines={3}
            style={styles.textInputMultiLineStyle}
            placeholderTextColor='#737373'
            underlineColorAndroid='transparent'
            defaultValue={timeArrivalDescription}
            onChangeText={this.onChangeText('timeArrivalDescription')}
          />
        </View>
      </View>
    )
  }

  renderSplicingSection = () => {
    const { timeSplicing, timeSplicinglDescription } = this.state
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>Splicing</Text>
        <View>
          <Text style={styles.cardContainerSubTitle}>Input Time</Text>
          <View style={styles.timeInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
              editable={false}
              contextMenuHidden={true}
              selectTextOnFocus={false}
              defaultValue={timeSplicing}
            />
            <Pressable style={styles.buttonClock} onPress={this.showTimePicker('timeSplicing')}>
              <Image source={Images.clockIcon} style={styles.buttonIcon} />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={styles.cardContainerSubTitle}>Description</Text>
          <TextInput
            placeholder='Write your description here …'
            multiline={true}
            numberOfLines={3}
            style={styles.textInputMultiLineStyle}
            placeholderTextColor='#737373'
            underlineColorAndroid='transparent'
            defaultValue={timeSplicinglDescription}
            onChangeText={this.onChangeText('timeSplicinglDescription')}
          />
        </View>
      </View>

    )
  }

  renderFooter = (onPress) => {
    return (
      <View style={styles.footerContainer}>
        <Pressable style={styles.buttonProceed} onPress={onPress}>
          <Text style={styles.buttonText}>LANJUTKAN</Text>
        </Pressable>
      </View>
    )
  }

  handleUploadFhoto = () => {
    console.log('function upload')
    const { postImage } = this.props
    const dataPhoto = this.state.dataPhoto
    return postImage(dataPhoto)
  }

  renderModal = () => {
    return <ModalUpload
      onUploadFhoto={this.handleUploadFhoto}
      photo={this.state.setPhoto}
      modalVisible={this.state.modalVisible}
      onPressVisibleModal={() => this.setState({ modalVisible: !this.state.modalVisible })} />
  }

  renderDateTimePicker = () => {
    const { isDateTimePickerVisible, selectedInput, datePickerMode } = this.state
    return (
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode={datePickerMode}
        is24Hour={true}
        display={datePickerMode === 'time' ? 'spinner' : 'default'}
        onConfirm={datePickerMode === 'time' ? this.handleSelectedTime(selectedInput) : this.handleSelectedDate(selectedInput)}
        onCancel={this.hideDateTimePicker}
      />
    )
  }

  getPhoto = (data) => {
    this.setState({ cameraVisible: false, setPhoto: data.uri, dataPhoto: data, modalVisible: true })
  }

  closeCamera = () => {
    this.setState({ cameraVisible: false })
  }

  renderOpenCamera = () => {
    return <OpenCamera getPhoto={(data) => this.getPhoto(data)} closeCam={() => this.closeCamera()} />
  }

  render() {
    const { currentPage } = this.state
    const { fetchingRootCause } = this.props
    if (fetchingRootCause) {
      return <LoadingSpin />;
    }

    if (this.state.cameraVisible) {
      return <View style={{ flex: 1 }}>{this.renderOpenCamera()}</View>
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.indicatorContainer}>
          <StepIndicator
            stepCount={3}
            customStyles={this.indicatorStyle}
            currentPosition={currentPage}
            renderStepIndicator={this.renderStepIndicator}
            onPress={() => { }}
            labels={['Prosess 1', 'Prosess 2', 'Prosess 3']}
          />
        </View>
        <ViewPager style={{ flex: 1 }} initialPage={0} ref={this.pagerRef}>
          <Page key='1'>
            <ScrollView
              contentContainerStyle={styles.mainContainer}
              keyboardShouldPersistTaps='handled'
              showsVerticalScrollIndicator={false}>
              <KeyboardAvoidingView enabled >
                {this.renderPeriodicProcessSection()}
                {this.renderTeamArrivedSection()}
                {this.renderSplicingSection()}
                {this.renderFooter(this.onPressPage(this.validatePageOne))}
                {this.renderModal()}
              </KeyboardAvoidingView>
            </ScrollView>
          </Page>
          <Page key='2'>
            <ScrollView
              contentContainerStyle={styles.mainContainer}
              keyboardShouldPersistTaps='handled'
              showsVerticalScrollIndicator={false}>
              {this.renderCutLocationProcessSection()}
              {this.renderFooter(this.onPressPage(this.validatePageTwo))}
            </ScrollView>
          </Page>
          <Page key='3'>
            <ScrollView
              contentContainerStyle={styles.mainContainer}
              keyboardShouldPersistTaps='handled'
              showsVerticalScrollIndicator={false}>
              <KeyboardAvoidingView enabled >
                {this.renderFoCutAreaSection()}
                {this.renderDetailAddressCp()}
                {this.itemsRootCause()}
                {this.renderSubRootCauseDescription()}
                {this.renderRestoreDescription()}
                {this.renderRemarkDescription()}
                {this.renderStatusJumperDescription()}
                {this.renderStatusJoinCoreDescription()}
                {this.renderDepthDescription()}
                {this.rendeRslDescription()}
                {this.rendeTTRestoreSection()}
                {this.renderFooter(this.onPressPage(this.validatePageThree()))}
              </KeyboardAvoidingView>
            </ScrollView>
          </Page>
        </ViewPager>
        {this.renderDateTimePicker()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: () => state.selectedCorrectiveForm.currentPage,
    fetchingRootCause: state.masterData.fetchingRootCause,
    listDataRootCause: state.masterData.dataRootCause,
    listDataNewRootCause: state.masterData.dataNewRootCause,
    listDataArea: state.masterData.dataArea
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //changePageState: pageNumber => dispatch(CorrectiveInputFormActions.changePage(pageNumber))
    getRootCauseList: () => dispatch(MasterRedux.getRootCauseRequest()),
    getNewRootCauseList: () => dispatch(MasterRedux.getNewRootCauseRequest()),
    getFoCutArea: () => dispatch(MasterRedux.getAreaRequest()),
    postImage: (dataUpload) => dispatch(UploadImageRedux.postImageRequest(dataUpload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrectiveInputFormContainer)