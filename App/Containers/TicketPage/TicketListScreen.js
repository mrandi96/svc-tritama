import React from 'react'
import { Text, View, SectionList } from 'react-native'

import { keyExtractorSectionList } from '../../Fixtures/Helper'

import { Constants } from '../../Constants/Constants'
import { Routes } from '../../Navigation/Route'

import { LoadingSpin } from '../../Components/Loading/LoadingSpin'
import { Button } from '../../Components/Button/Button'
import { ButtonTab } from '../../Components/Button/ButtonTab'
import { EmptyList } from '../../Components/Empty/EmptyList'

import styles from './TicketListScreenStyle'


class TicketListScreen extends React.Component {

  componentDidMount() {
    this.load()
  }

  load = () => {
    const { fetchData, employeeId } = this.props
    fetchData(employeeId)
  }

  onPressTicket = (ticketNo) => {
    const { navigation: { navigate } } = this.props
    return navigate(Routes.CorrectiveDetailPage, { ticketNo: ticketNo })
  }

  renderTicket = ({ item }) => {
    return (
      <Button
        style={styles.correctiveDataButton}
        roundType='round'
        onPressCb={this.onPressTicket}
        title={item.ticketNo}
      />
    );
  };

  renderHeader = () => {
    const status = [
      `${Constants.STATUS.NEW}`,
      `${Constants.STATUS.OPEN}`,
      `${Constants.STATUS.CLOSE}`,
    ]
    return (
      <ButtonTab
        data={status}
        containerStyle={styles.headerContainer}
        totalWidth={330}
        selectedTab={this.props.selectedStatus}
        onPressCb={this.onPressFilter}
      />
    )
  };

  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    )
  }

  renderEmpty = () => {
    return (
      <EmptyList text='Sorry, no data found.' />
    )
  }

  onPressFilter = (status) => {
    this.props.changeStatusTab(status)
  }

  render() {
    const { fetching } = this.props
    if (fetching) {
      return <LoadingSpin />;
    }

    const DATA = Object.values(this.props.dataSectionList)
    return (
      <SectionList
        ListHeaderComponent={this.renderHeader}
        ListEmptyComponent={this.renderEmpty}
        refreshing={fetching}
        onRefresh={this.load}
        sections={DATA}
        keyExtractor={keyExtractorSectionList}
        renderItem={this.renderTicket}
        renderSectionHeader={this.renderSectionHeader}
      />
    )
  }
}

export default TicketListScreen;


