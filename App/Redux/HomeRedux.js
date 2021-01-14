import { createReducer, createActions } from 'reduxsauce'
import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  correctiveRequest: ['employeeId', 'startDate', 'endDate'],
  correctiveSuccess: ['data'],
  correctiveFailure: null,
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingCorrective: false,
  fetchingPreventive: false,
  fetchingChecklist: false,
  correctiveData: [],
  preventiveData: [],
  checklistData: [],
  correctiveError: null,
  preventiveError: null,
  checklistError: null,
})

/* ------------- Selectors ------------- */

export const isFetching = (state) => state.home.fetchingCorrective && state.home.fetchingPreventive && state.home.fetchingChecklist
export const preventives = (state) => state.home.preventiveData

export const getPatrolData = createSelector(
  [preventives],
  (preventiveData) => preventiveData.filter(item => item.type === 'Patrol')
)

export const getElectricalData = createSelector(
  [preventives],
  (preventiveData) => preventiveData.filter(item => item.type === 'Electrical')
)
/* ------------- Reducers ------------- */

// request the data from an api
export const correctiveRequest = (state) =>
  state.merge({ fetchingCorrective: true, correctiveData: [] })

// successful api lookup
export const correctiveSuccess = (state, action) => {
  const { data } = action
  return state.merge({ fetchingCorrective: false, error: null, correctiveData: data })
}

// Something went wrong somewhere.
export const correctiveFailure = state =>
  state.merge({ fetchingCorrective: false, correctiveError: true, correctiveData: [] })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CORRECTIVE_REQUEST]: correctiveRequest,
  [Types.CORRECTIVE_SUCCESS]: correctiveSuccess,
  [Types.CORRECTIVE_FAILURE]: correctiveFailure,
})
