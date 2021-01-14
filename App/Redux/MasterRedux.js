import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    getRootCauseRequest: '',
    getRootCauseSuccess: ['data'],
    getRootCauseFailure: ['data'],
    getNewRootCauseRequest: '',
    getNewRootCauseSuccess: ['data'],
    getNewRootCauseFailure: ['data'],
    getAreaRequest: '',
    getAreaSuccess: ['data'],
    getAreaFailure: ['data'],
})

export const MasterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetchingRootCause: false,
    fetchingNewRootCause: false,
    dataRootCause: [],
    dataNewRootCause: [],
    dataArea: [],
    error: false
})

/* ------------- Selectors ------------- */


/* ------------- Reducers ------------- */

// request the data from an api

// root cause
export const requestRootCause = (state) =>
    state.merge({ fetchingRootCause: true, dataRootCause: [] })

export const successRootCause = (state, action) => {
    const { data } = action
    return state.merge({ dataRootCause: data, fetchingRootCause: false, error: false })
}

export const failureRootCause = (state, action) => {
    const { error } = action
    return state.merge({ fetchingRootCause: false, error: true, dataRootCause: [], errorMessage: error })
}

// new root cause
export const requestNewRootCause = (state) =>
    state.merge({ fetchingNewRootCause: true, dataNewRootCause: [] })

export const successNewRootCause = (state, action) => {
    const { data } = action
    return state.merge({ dataNewRootCause: data, fetchingNewRootCause: false, error: false })
}

export const failureNewRootCause = (state, action) => {
    const { error } = action
    return state.merge({ fetchingNewRootCause: false, error: true, dataNewRootCause: [], errorMessage: error })
}

// area
export const requestArea = (state) =>
    state.merge({ fetchingArea: true, dataArea: [] })

export const successArea = (state, action) => {
    const { data } = action
    return state.merge({ dataArea: data, fetchingArea: false, error: false })
}

export const failureArea = (state, action) => {
    const { error } = action
    return state.merge({ fetchingArea: false, error: true, dataArea: [], errorMessage: error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_ROOT_CAUSE_REQUEST]: requestRootCause,
    [Types.GET_ROOT_CAUSE_SUCCESS]: successRootCause,
    [Types.GET_ROOT_CAUSE_FAILURE]: failureRootCause,
    [Types.GET_NEW_ROOT_CAUSE_REQUEST]: requestNewRootCause,
    [Types.GET_NEW_ROOT_CAUSE_SUCCESS]: successNewRootCause,
    [Types.GET_NEW_ROOT_CAUSE_FAILURE]: failureNewRootCause,
    [Types.GET_AREA_REQUEST]: requestArea,
    [Types.GET_AREA_SUCCESS]: successArea,
    [Types.GET_AREA_FAILURE]: failureArea
})
