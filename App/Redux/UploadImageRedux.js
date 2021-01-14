import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    postImageRequest: ['dataupload'],
    postImageSuccess: '',
    postImageFailure: '',
})

export const UploadImageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    loadingUpload: false,
    error: false,
    errorMessage: '',
    data: []
})


// request the data from an api
export const request = (state) => {
    return state.merge({ loadingUpload: true, data: [] })
}

export const success = (state, action) => {
    const { data } = action
    return state.merge({ loadingUpload: false, data, error: false })
}

export const failure = (state, action) => {
    const { error } = action
    return state.merge({ loadingUpload: false, error: true, data: [], errorMessage: error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.POST_IMAGE_REQUEST]: request,
    [Types.POST_IMAGE_SUCCESS]: success,
    [Types.POST_IMAGE_FAILURE]: failure
})
