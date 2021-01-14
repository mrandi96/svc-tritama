import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  tokenCheckRequest: null,
  tokenCheckSuccess: null,
  tokenCheckFailure: null,
  localSaveRequest: ['accessToken', 'refreshToken', 'email'],
  localSaveSuccess: null,
  localSaveFailure: null,
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  active: false,
  loading: false,
  tokenValid: false,
  error: false,
  errorMessage: '',
})

/* ------------- Selectors ------------- */

export const isValid = (state) => state.startup.tokenValid
/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
  return state.merge({ loading: true, active: true })
}

export const success = (state) => {
  return state.merge({ error: false, tokenValid: true })
}
export const failure = state =>
  state.merge({ loading: false, error: true, tokenValid: false })

export const saveSuccess = (state) => {
  return state.merge({ loading: false, active: true })
}
export const saveFailure = state =>
  state.merge({
    loading: false,
    active: false,
    tokenValid: false,
  })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOKEN_CHECK_REQUEST]: request,
  [Types.TOKEN_CHECK_SUCCESS]: success,
  [Types.TOKEN_CHECK_FAILURE]: failure,
  [Types.LOCAL_SAVE_SUCCESS]: saveSuccess,
  [Types.LOCAL_SAVE_FAILURE]: saveFailure,
})
