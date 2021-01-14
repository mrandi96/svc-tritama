import React, { Component } from 'react'
import { Pressable, Text, Image, View, FlatList } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux'
import moment from 'moment';

import HomeActions from '../../Redux/HomeRedux'

import { keyExtractorFlatList, renderScreen } from '../../Fixtures/Helper'
import { Constants } from '../../Constants/Constants'
import { Images } from '../../Themes'
import { Routes } from '../../Navigation/Route'

import { HomeHeader } from '../../Components/Header/HomeHeader'
import { BellNotification } from '../../Components/Notification/BellNotification'
import { SeparatorList } from '../../Components/SeparatorList/SeparatorList'
import { EmptyList } from '../../Components/Empty/EmptyList'
import { LoadingSpin } from '../../Components/Loading/LoadingSpin'

import styles from './HomeContainerStyles'

class HomeContainer extends Component {
  componentDidMount() {
    this.getData()
    SplashScreen.hide()
  }

  getData = () => {
    const formatedStartDate = moment().format('YYYYDDMM')
    const formatedEndDate = moment().add(1, 'days').format('YYYYDDMM')
    const { employeeId } = this.props
    this.props.fetchCorrectivesData(employeeId, formatedStartDate, formatedEndDate)
  }

  onClickCorrective = () => {
    return this.props.navigation.navigate(Routes.CorrectiveListPage)
  };

  onClickGo = () => () => {
    return this.props.navigation.navigate('Corrective')
  };

  onClickNotif = () => {

  }

  renderHeader = () => {
    const { employeeName } = this.props
    return (
      <HomeHeader
        name={employeeName}
        phoneNo={'080989999'}>
        <BellNotification
          unreadMessagesCount={17}
          onPress={this.onClickNotif} />
      </HomeHeader>
    )
  }

  renderButtonMenu = () => {
    return (
      <View style={styles.buttonContainer}>
        <Pressable onPress={this.onClickCorrective} style={styles.buttonMenu}>
          <Image
            source={Images.correctiveIcon}
            style={styles.imageButton}
          />
          <Text style={styles.textButton}>Corrective</Text>
        </Pressable>
        <Pressable onPress={this.onClickGo('preventive')} style={styles.buttonMenu}>
          <Image
            source={Images.preventiveIcon}
            style={styles.imageButton}
          />
          <Text style={styles.textButton}>Preventive</Text>
        </Pressable>
        <Pressable onPress={this.onClickGo('checklist')} style={styles.buttonMenu}>
          <Image
            source={Images.checklistIcon}
            style={styles.imageButton}
          />
          <Text style={styles.textButton}>Checklist</Text>
        </Pressable>
      </View>
    )
  }

  renderEmpty = () => {
    return (
      <EmptyList text='Sorry, no data found.' />
    )
  }

  renderContent = () => {
    const { preventiveData, correctiveData } = this.props
    const dataItems = []

    if (correctiveData.length > 0) dataItems.push(this.renderCorrective)
    if (preventiveData.length > 0) dataItems.push(this.renderPreventive)

    return (
      <FlatList
        ListHeaderComponent={this.renderContentHeader}
        ListEmptyComponent={this.renderEmpty}
        data={dataItems}
        renderItem={renderScreen}
        keyExtractor={keyExtractorFlatList}
      />
    )
  }

  renderContentHeader = () => {
    const date = moment(new Date()).format('DD MMM YYYY')
    return (
      <View style={styles.contentHeaderContainer}>
        <Text style={styles.contentHeaderText}>{date}</Text>
      </View>
    )
  }

  setFontColor = (status) => {
    if (status === Constants.STATUS.NEW) {
      return styles.newColor
    } else if (status === Constants.STATUS.CLOSE) {
      return styles.closeColor
    } else {
      return styles.openColor
    }
  }

  renderCorrective = () => {
    const { correctiveData } = this.props

    const tickets = []

    correctiveData?.forEach((item, index) => {
      tickets.push(
        <View key={'corrective_' + index} style={styles.listDataContainer}>
          <Text style={styles.ticketNo}>{item.ttCorrective}</Text>
          <Text style={[styles.status, this.setFontColor(item.status)]}>{item.status}</Text>
        </View>
      )
    })
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Corrective</Text>
        {tickets}
      </View>
    )
  }

  renderPreventive = () => {
    const { preventivePatrolData, preventiveElectricalData } = this.props

    const ticketPatrol = []
    const ticketElectrical = []

    preventivePatrolData?.forEach((item, index) => {
      ticketPatrol.push(
        <View key={'patrol' + index} style={styles.listDataContainer}>
          <Text style={styles.ticketNo}>{item.no}</Text>
          <Text style={[styles.status, this.setFontColor(item.status)]}>{item.status}</Text>
        </View>
      )
    })

    preventiveElectricalData?.forEach((item, index) => {
      ticketElectrical.push(
        <View key={'electrical' + index} style={styles.listDataContainer}>
          <Text style={styles.ticketNo}>{item.no}</Text>
          <Text style={[styles.status, this.setFontColor(item.status)]}>{item.status}</Text>
        </View>
      )
    })

    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Protective</Text>
        {ticketPatrol}
        <SeparatorList style={styles.cardSeparator} />
        {ticketElectrical}
      </View>
    )
  }

  render() {

    const { fetching } = this.props
    if (fetching) {
      return <LoadingSpin />;
    }

    const items = [
      this.renderHeader,
      this.renderButtonMenu,
      this.renderContent
    ];
    return (
      <FlatList style={styles.mainContainer}
        data={items}
        renderItem={renderScreen}
        keyExtractor={keyExtractorFlatList}
      />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    employeeId: state.account.data.employeeId,
    employeeName: state.account.data.name,
    fetching: state.home.fetchingCorrective,
    correctiveData: state.home.correctiveData,
    preventiveData: state.home.preventiveData,
    preventivePatrolData: state.home.getPatrolData,
    preventiveElectricalData: state.home.getElectricalData,
    checklistData: state.home.checklistData,
    correctiveError: null,
    preventiveError: null,
    checklistError: null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCorrectivesData: (employeeId, formatedStartDate, formatedEndDate) => dispatch(HomeActions.correctiveRequest(employeeId, formatedStartDate, formatedEndDate)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
