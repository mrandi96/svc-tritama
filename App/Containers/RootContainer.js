import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import StartupActions from '../Redux/StartupRedux'
import RootNavigation from '../Navigation/RootNavigation'
import AuthNavigation from '../Navigation/AuthNavigation'
import AppNavigation from '../Navigation/AppNavigation'
import CorrectiveInputFormContainer from '../Containers/CorrectiveInputFormPage/CorrectiveInputFormContainer';
import ExampleApp from './ExampleApp'

import SplashScreen from 'react-native-splash-screen';
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount() {
    SplashScreen.hide();
    this.props.startup()
  }

  render() {
    const { isActive, isLoading } = this.props
    return (
      // <View style={styles.applicationView}>
      //   <StatusBar barStyle='light-content' />
      //   {isLoading ? (
      //     <RootNavigation />
      //   ) : !isActive ? (
      //     <AuthNavigation />
      //   ) : (
      //         <AppNavigation />
      //       )
      //   }
      // </View>
      <CorrectiveInputFormContainer />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isActive: state.startup.active,
    isLoading: state.startup.loading
  }
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
