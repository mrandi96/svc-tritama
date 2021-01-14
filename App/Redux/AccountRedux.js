import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  accountRequest: ['email', 'password'],
  accountRefreshToken: ['email', 'refreshToken'],
  accountSuccess: ['data'],
  accountFailure: ['data'],
})

export const AccountTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const initialDataState = {
  employeeId: null,
  name: null,
  email: null,
  accessToken: null,
  expiresIn: null,
  refreshExpiresIn: null,
  refreshToken: null,
  tokenType: null,
  notBeforePolicy: null,
  sessionState: null,
  scope: null
}
export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  errorMessage: '',
  data: initialDataState 
})
/* ------------- Selectors ------------- */

export const getRefreshToken = (state) => state.account.data.refreshToken
export const getAccessToken = (state) => state.account.data.accessToken

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ loading: true })

// successful api lookup
export const success = (state, action) => {
  const { data } = action
  return state.merge({
    loading: false,
    error: false,
    data: {...data}
  })
}

// Something went wrong somewhere.
export const failure = (state, action) => {
  const {error, error_description} = action

  return state.merge({ loading: false, error: true, data: initialDataState, errorMessage: error_description })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ACCOUNT_REQUEST]: request,
  [Types.ACCOUNT_REFRESH_TOKEN]: request,
  [Types.ACCOUNT_SUCCESS]: success,
  [Types.ACCOUNT_FAILURE]: failure,
})
