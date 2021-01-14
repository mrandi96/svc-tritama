/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the Infinite Red Slack channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import CorrectiveActions from '../Redux/CorrectiveRedux'
// import { CorrectiveSelectors } from '../Redux/CorrectiveRedux'

export function* getCorrectiveList(api, action) {
  const { employeeId } = action
  const response = yield call(api.getCorrectiveList, employeeId, {})

  if (response.ok) {
    yield put(CorrectiveActions.correctiveListSuccess(response.data.data))
  } else {
    yield put(CorrectiveActions.correctiveListFailure(response.data))
  }
}

