import { call, put } from 'redux-saga/effects'
import UploadImageAction from '../Redux/UploadImageRedux'

export function* postImage(api, action) {
    const { dataupload } = action
    console.log('dataupload', dataupload.uri)
    const response = yield call(api.uploadImage, dataupload)

    console.log('response', response)
    // if (response.ok) {
    //     yield put(UploadImageAction.postImageSuccess(response.data))
    // } else {
    //     yield put(UploadImageAction.postImageFailure(response))
    // }
}