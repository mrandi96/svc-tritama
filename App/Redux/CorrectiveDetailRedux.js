import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  correctiveDetailRequest: ['ttCorrective'],
  correctiveDetailSuccess: ['data'],
  correctiveDetailFailure: ['data'],
  correctiveOpenPatchRequest: ['ttCorrective'],
  correctiveOpenPatchSuccess: null,
  correctiveOpenPatchFailure: ['data']
})

export const CorrectiveDetailTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  data: [],
  error: false,
  errorPost: false,
  errorMessage: '',
  load: false
})

/* ------------- Selectors ------------- */


/* ------------- Reducers ------------- */

// request the data from an api

export const request = (state) =>
  state.merge({ fetching: true, data: {} })

export const success = (state, action) => {
  const { data } = action
  return state.merge({ data, fetching: false, error: false })
}

export const failure = (state, action) => {
  const { error } = action
  return state.merge({ fetching: false, error: true, data: {}, errorMessage: error })
}

export const patchRequest = (state) =>
  state.merge({ load: true })

export const patchSuccess = (state, action) => {
  const { data } = action
  return state.merge({ load: false, errorPost: false, errorMessage: '' })
}

export const patchFailure = (state, action) => {
  const { error } = action
  return state.merge({ loading: false, errorPost: true, errorMessage: error })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CORRECTIVE_DETAIL_REQUEST]: request,
  [Types.CORRECTIVE_DETAIL_SUCCESS]: success,
  [Types.CORRECTIVE_DETAIL_FAILURE]: failure,
  [Types.CORRECTIVE_OPEN_PATCH_REQUEST]: patchRequest,
  [Types.CORRECTIVE_OPEN_PATCH_SUCCESS]: patchSuccess,
  [Types.CORRECTIVE_OPEN_PATCH_FAILURE]: patchFailure
})
