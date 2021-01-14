
import { put, select, take } from 'redux-saga/effects'
import StartupActions from '../Redux/StartupRedux'
import AccountActions, { getAccessToken, getRefreshToken, AccountTypes } from '../Redux/AccountRedux'

export function* login(action) {

  const { email, password } = action

  yield put(AccountActions.accountRequest(email, password))

  yield take(AccountTypes.ACCOUNT_SUCCESS)

  const accessToken = yield select(getAccessToken)
  const refreshToken = yield select(getRefreshToken)

  if (accessToken) {
    console.log(accessToken)
    yield put(StartupActions.localSaveRequest(accessToken, refreshToken, email))
  }


}

