import { createReducer, createActions } from 'reduxsauce'
import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'
import { Constants } from '../Constants/Constants'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  correctiveListRequest: ['employeeId'],
  correctiveListSuccess: ['data'],
  correctiveListFailure: null,
  correctiveChangeSelectedStatus: ['status']
})

export const CorrectiveTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  selectedStatus: Constants.STATUS.NEW,
  fetching: false,
  data: [],
  error: null
})

/* ------------- Selectors ------------- */

const datalist = (state) => state.corrective.data
const status = (state) => state.corrective.selectedStatus

export const getFilteredData = createSelector(
  [datalist, status],
  (data, selectedStatus) =>
    data.filter(item => item.status === selectedStatus)
      .map((item) => {
        return {
          ticketNo: item.ttCorrective,
          date: item.date
        }
      })
      .reduce((acc, item) => {
        if (!acc[item.date]) {
          acc[item.date] = {
            title: item.date,
            data: []
          }
        }
        acc[item.date].data.push(item)
        return acc
      }, {})
)


/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, data: [] })

// successful api lookup
export const success = (state, action) => {
  const { data } = action
  return state.merge({ data, fetching: false, error: null })
}

// Something went wrong somewhere.
export const failure = state => {
  const { error } = action
  state.merge({ fetching: false, error, data: {} })
}

export const changeSelectedStatus = (state, action) => {
  const { status } = action
  return state.merge({ selectedStatus: status })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CORRECTIVE_LIST_REQUEST]: request,
  [Types.CORRECTIVE_LIST_SUCCESS]: success,
  [Types.CORRECTIVE_LIST_FAILURE]: failure,
  [Types.CORRECTIVE_CHANGE_SELECTED_STATUS]: changeSelectedStatus
})
