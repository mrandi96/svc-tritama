import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import ReduxPersist from '../Config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  startup: require('./StartupRedux').reducer,
  home: require('./HomeRedux').reducer,
  correctiveDetail: require('./CorrectiveDetailRedux').reducer,
  corrective: require('./CorrectiveRedux').reducer,
  masterData: require('./MasterRedux').reducer,
  account: require('./AccountRedux').reducer,
  uploadImage: require('./UploadImageRedux').reducer
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  //if (ReduxPersist.active) {
  const persistConfig = ReduxPersist.storeConfig
  finalReducers = persistReducer(persistConfig, reducers)
  // }

  let { store, sagasManager, sagaMiddleware, persistor } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return { store, persistor }
}
