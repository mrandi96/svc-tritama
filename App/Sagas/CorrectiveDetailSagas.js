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
import CorrectiveDetailActions from '../Redux/CorrectiveDetailRedux'
// import { CorrectiveSelectors } from '../Redux/CorrectiveRedux'

export function* getCorrectiveDetail(api, action) {
  const { ttCorrective } = action
  const response = yield call(api.getCorrectiveDetail, ttCorrective)
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(CorrectiveDetailActions.correctiveDetailSuccess(response.data.data))
  } else {
    yield put(CorrectiveDetailActions.correctiveDetailFailure(response.data))
  }
}

export function* patchCorrectiveOpen(api, action) {
  const { ttCorrective } = action
  const response = yield call(api.patchCorrectiveOpen, ttCorrective)
  // success?
  console.log(response)
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(CorrectiveDetailActions.correctiveOpenPatchSuccess())
  } else {
    yield put(CorrectiveDetailActions.correctiveOpenPatchFailure(response.data))
  }
}