import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from "redux-persist";
import R from 'ramda'
import { createLogger } from 'redux-logger'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import createSensitiveStorage from "redux-persist-sensitive-storage";

import Reactotron from '../Config/ReactotronConfig'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */


  /* ------------- Analytics Middleware ------------- */

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  // remove common noise
  const loggingBlacklist = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
  if (__DEV__) {
    // the logger master switch
    const USE_LOGGING = Config.reduxLogging
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, loggingBlacklist))
    })
    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = createStore
  if (Config.useReactotron) {
    enhancers.push(Reactotron.createEnhancer())
  }
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  const persistor = persistStore(store);

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)


  return {
    persistor,
    store,
    sagasManager,
    sagaMiddleware
  }
}
