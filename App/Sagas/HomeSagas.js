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
import HomeActions from '../Redux/HomeRedux'
// import { CorrectiveSelectors } from '../Redux/CorrectiveRedux'

export function* getCorrectiveToday(api, action) {
  // get current data from Store
  // const currentData = yield select(CorrectiveSelectors.getData)
  // make the call to the api
  const { employeeId, startDate, endDate } = action

  const response = yield call(api.getCorrectiveList, 1, { startDate: '', endDate: '' })
  // const response = yield call(api.getCorrectiveList, employeeId, { startDate: startDate, endDate: endDate })
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    console.log('response', response)
    yield put(HomeActions.correctiveSuccess(response.data.data))
  } else {
    yield put(HomeActions.correctiveFailure())
  }
}

