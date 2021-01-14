
import { call, put } from 'redux-saga/effects'
import AccountActions from '../Redux/AccountRedux'
import { EndPoint } from '../Constants/ApiEndPointConstant'
import { camelCase } from 'lodash/fp';
import mapKeysDeep from 'map-keys-deep/fp';

export function* authenticate(api, action) {
  const { email, password } = action

  const response = yield call(api.auth, email, password)
  if (response.status == '201') {
    const data = mapKeysDeep(camelCase)(response.data.data);
    yield put(AccountActions.accountSuccess(data))
  } else {
    yield put(AccountActions.accountFailure(response.data))
  }
}

export function* refreshToken(api, action) {
  const { email, refreshToken } = action
  const param = {
    grant_type: 'refresh_token',
    username: email,
    refresh_token: refreshToken,
    client_id: EndPoint.SECRET.CLIENT_ID,
    client_secret: EndPoint.SECRET.CLIENT_SECRET
  }
  const response = yield call(api.refreshTokenKeycloak, param)
  if (response.status == '201') {
      const data = mapKeysDeep(camelCase)(response.data.data);
       yield put(AccountActions.accountSuccess(data))
  } else {
      yield put(AccountActions.accountFailure(response.data))
  }
}
