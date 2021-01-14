import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react'
import { I18nextProvider } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage'

import RootContainer from './RootContainer'
import '../Config'
import DebugConfig from '../Config/DebugConfig'
import createStore from '../Redux'
import I18n from '../I18next/I18n';

enableScreens()

const { store, persistor } = createStore();

class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={I18n}>
        <Provider store={store}>
          <PersistGate
            loading={null}
            persistor={persistor}>
            <NavigationContainer>
              <RootContainer />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </I18nextProvider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
