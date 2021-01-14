import { call, put } from 'redux-saga/effects'
import MasterAction from '../Redux/MasterRedux'

export function* getRootCause(api) {
    const response = yield call(api.getRootCause, {})

    if (response.ok) {
        yield put(MasterAction.getRootCauseSuccess(response.data.data))
    } else {
        yield put(MasterAction.getRootCauseFailure())
    }
}

export function* getNewRootCause(api) {
    const response = yield call(api.getNewRootCause, {})

    if (response.ok) {
        yield put(MasterAction.getNewRootCauseSuccess(response.data.data))
    } else {
        yield put(MasterAction.getNewRootCauseFailure())
    }
}

export function* getArea(api) {
    const response = yield call(api.getArea, {})

    if (response.ok) {
        yield put(MasterAction.getAreaSuccess(response.data.data))
    } else {
        yield put(MasterAction.getAreaFailure())
    }
}