import React, { Component, Fragment } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { StackActions } from '@react-navigation/native';
import CorrectiveActions from '../../Redux/CorrectiveRedux'
import CorrectiveDetailActions from '../../Redux/CorrectiveDetailRedux'
import { Constants } from '../../Constants/Constants'

import { LoadingSpin } from '../../Components/Loading/LoadingSpin'
import { SeparatorList } from '../../Components/SeparatorList/SeparatorList'

import styles from './CorrectiveDetailStyle'
import { ModalAlert } from '../../Components/Modal/ModalAlert';
import { Routes } from '../../Navigation/Route'

class CorrectiveDetailContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { route } = this.props
    const { ticketNo } = route.params
    this.props.fetchCorrectivesDetailData(ticketNo)
  }

  refreshDataCorrective = () => {
    const { fetchDataCorrectiveList, employeeId } = this.props
    fetchDataCorrectiveList(employeeId)
  }

  onPressProceed = () => () => {
    const { selectedStatus } = this.props
    if (selectedStatus === Constants.STATUS.NEW) {
      this.onNewPressProceed()
    } else if (selectedStatus === Constants.STATUS.OPEN) {
      this.onOpenPressProceed()
    } else if (selectedStatus === Constants.STATUS.CLOSE) {
      this.onClosePressProceed()
    }
  }

  onNewPressProceed = async () => {
    const { route, navigation } = this.props
    const { ticketNo } = route.params
    this.props.patchCorrectivesDetailData(ticketNo)

    const { errorPost } = this.props
    if (!errorPost) {
      this.refreshDataCorrective()
      this.props.changeStatusTab('open')
      navigation.dispatch(StackActions.popToTop());
    }
  }

  onOpenPressProceed = () => {
    const { route, navigation } = this.props
    const { ticketNo } = route.params
    return navigation.navigate(Routes.CorrectiveInputFormPage, { ticketNo: ticketNo })
  }

  onClosePressProceed = () => {
    const { route, navigation } = this.props
    const { ticketNo } = route.params
    return navigation.navigate(Routes.CorrectiveInputFormPage, { ticketNo: ticketNo })
  }

  setColor = () => {
    const { selectedStatus } = this.props
    if (selectedStatus === Constants.STATUS.NEW) {
      return styles.newColor
    } else if (selectedStatus === Constants.STATUS.CLOSE) {
      return styles.closeColor
    } else {
      return styles.openColor
    }
  }

  renderHeader = () => {
    const { data } = this.props
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerText}>{data.ttCorrective}</Text>
        <View style={[styles.headerContainerStatus, this.setColor(data.status)]}>
          <Text style={styles.headerContainerStatusText}>{data.status}</Text>
        </View>
      </View>
    )
  }

  renderSeparator() {
    return (
      <SeparatorList />
    )
  }

  renderData = (description, value) => {
    return (
      <Fragment>
        <Text style={styles.descriptionText}>
          {description}
        </Text>
        <Text style={styles.dataText}>
          {value ?? '-'}
        </Text>
      </Fragment>
    )
  }

  renderContent = () => {
    const { data } = this.props
    return (
      <View style={styles.contentContainer} >
        {this.renderData('Date', data.date)}
        {this.renderData('Week No.', data.weekNumber)}
        {this.renderData('Month', data.month)}
        {this.renderData('TTHW ( Trouble Ticket From Customer )', data.tthw)}
        {this.renderData('TT Tritama', data.ttCorrective)}
        {this.renderData('Sub Segment/Link', data.subSegment)}
        {this.renderData('Sub Cause', data.subCause)}
        {this.renderData('Segment ID', data.segmentId)}
        {this.renderData('Segment /Ring', data.segment)}
        {this.renderData('Impact/No. Impact', data.impact)}
        {this.renderData('Impact Site Down', data.impactSiteDown)}
        {this.renderData('Impact Congest', data.impactCongest)}
        {this.renderData('Dispatch Time', data.dispatchTime)}
        {this.renderData('Log Down', data.logDown)}
        {this.renderData('Customer', data.clientName)}
        {/* {this.renderData('Responsible', data.dataText)} */}
      </View>
    )
  }

  renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Pressable style={styles.buttonProceed} onPress={this.onPressProceed()}>
          <Text style={styles.buttonText}>LANJUTKAN</Text>
        </Pressable>
      </View>
    )
  }

  // renderModal = () => {
  //   return (
  //   <ModalAlert 
  //   />
  //   )
  // }

  render() {
    const { fetching, loading, fetchingCorrective } = this.props
    if (fetching || loading || fetchingCorrective) {
      return <LoadingSpin />;
    }

    return (
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.container}>
        <View style={styles.dataContainer}>
          {this.renderHeader()}
          {this.renderSeparator()}
          {this.renderContent()}
        </View>
        {this.renderFooter()}
      </ScrollView>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.correctiveDetail.fetching,
    fetchingCorrective: state.corrective.fetching,
    loading: state.correctiveDetail.load,
    error: state.correctiveDetail.error,
    data: state.correctiveDetail.data,
    selectedStatus: state.corrective.selectedStatus,
    employeeId: state.account.data.employeeId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataCorrectiveList: (employeeId) => dispatch(CorrectiveActions.correctiveListRequest(employeeId)),
    fetchCorrectivesDetailData: (ttCorrective) => dispatch(CorrectiveDetailActions.correctiveDetailRequest(ttCorrective)),
    patchCorrectivesDetailData: (ttCorrective) => dispatch(CorrectiveDetailActions.correctiveOpenPatchRequest(ttCorrective)),
    changeStatusTab: (status) => dispatch(CorrectiveActions.correctiveChangeSelectedStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrectiveDetailContainer)
