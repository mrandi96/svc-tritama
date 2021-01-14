import { call, put, all, select, take, race } from 'redux-saga/effects'
import StartupActions, { StartupTypes } from '../Redux/StartupRedux'
import { Constants } from '../Constants/Constants'
// import AsyncStorage from '@react-native-community/async-storage'
import createSensitiveStorage from "redux-persist-sensitive-storage";
import AccountActions, { getAccessToken, getRefreshToken, AccountTypes } from '../Redux/AccountRedux'

// exported to make available for tests
export function* startup() {
  yield put(StartupActions.tokenCheckRequest())
  const { checked } = yield race({
    checked: take(StartupTypes.TOKEN_CHECK_SUCCESS),
    fail: take(StartupTypes.TOKEN_CHECK_FAILURE)
  })
  if (checked) {
    const accessToken = yield select(getAccessToken)
    const refreshToken = yield select(getRefreshToken)
    yield put(StartupActions.localSaveRequest(accessToken, refreshToken))
  }
}

export function* checkToken() {
  const [accessToken, refreshToken, email] = yield all([
    call(createSensitiveStorage().getItem, Constants.STORAGE.TOKEN),
    call(createSensitiveStorage().getItem, Constants.STORAGE.REFRESH_TOKEN),
    call(createSensitiveStorage().getItem, Constants.STORAGE.EMAIL)
    // call(AsyncStorage.getItem, Constants.STORAGE.TOKEN),
    // call(AsyncStorage.getItem, Constants.STORAGE.REFRESH_TOKEN),
    // call(AsyncStorage.getItem, Constants.STORAGE.EMAIL)
  ])
  if (accessToken && email) {
    // yield put(AccountActions.accountRefreshToken(email, refreshToken))
    // const { success, error } = yield race({
    //   success: take(AccountTypes.ACCOUNT_SUCCESS),
    //   error: take(AccountTypes.ACCOUNT_FAILURE),
    // })
    // if (success)
    //   yield put(StartupActions.tokenCheckSuccess())
    // if (error)
    yield put(StartupActions.tokenCheckFailure())
    //yield put(StartupActions.tokenCheckSuccess())
  } else {
    yield put(StartupActions.tokenCheckFailure())
  }
}

export function* saveToAsyncStorage(action) {
  const { accessToken, refreshToken, email } = action
  try {
    yield call(createSensitiveStorage().setItem, Constants.STORAGE.TOKEN, `${accessToken}`),
      yield call(createSensitiveStorage().setItem, Constants.STORAGE.REFRESH_TOKEN, `${refreshToken}`),
      yield call(createSensitiveStorage().setItem, Constants.STORAGE.EMAIL, `${email}`)
    // yield call(AsyncStorage.setItem, Constants.STORAGE.TOKEN, `${accessToken}`),
    //   yield call(AsyncStorage.setItem, Constants.STORAGE.REFRESH_TOKEN, `${refreshToken}`),
    //   yield call(AsyncStorage.setItem, Constants.STORAGE.EMAIL, `${email}`)
    yield put(StartupActions.localSaveSuccess())
  }
  catch (error) {
    console.log(error)
    yield put(StartupActions.localSaveFailure())
  }
}
