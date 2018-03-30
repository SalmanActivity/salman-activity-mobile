import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getRequests: ['userToken', 'month', 'year'],
  getRequestsSuccess: ['requests'],
  getRequestsFailure: ['error'],

  newRequest: ['userToken', 'name', 'description', 'division', 'location',
    'startTime', 'endTime', 'participantNumber', 'participantDescription',
    'speaker', 'issuedTime'],
  newRequestSuccess: null,
  newRequestFailure: ['error'],

  updateRequest: ['userToken', 'id', 'requestData'],
  updateRequestSuccess: null,
  updateRequestFailure: ['error']
})

export const RequestTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  requests: [],
  fetchingRequests: false,
  fetchingRequestsError: null,

  postingRequest: false,
  postingRequestError: null,

  updatingRequest: false,
  updatingRequestError: null
})

/* ------------- Reducers ------------- */

export const getRequests = (state) =>
state.merge({ fetchingRequests: true, fetchingRequestsError: null })

export const getRequestsSuccess = (state, action) => {
  const { requests } = action
  return state.merge({
    fetchingRequests: false,
    requests,
    fetchingRequestsError: null })
}

export const getRequestsFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetchingRequests: false, fetchingRequestsError: error })
}

export const newRequest = (state) =>
state.merge({ postingRequest: true, postingRequestError: null })

export const newRequestSuccess = (state) => {
  return state.merge({ postingRequest: false, postingRequestError: null })
}

export const newRequestFailure = (state, action) => {
  const { error } = action
  return state.merge({ postingRequest: false, postingRequestError: error })
}

export const updateRequest = (state) =>
state.merge({ updatingRequest: true, updatingRequestError: null })

export const updateRequestSuccess = (state) => {
  return state.merge({ updatingRequest: false, updatingRequestError: null })
}

export const updateRequestFailure = (state, action) => {
  const { error } = action
  return state.merge({ updatingRequest: false, updatingRequestError: error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LOCATIONS]: getRequests,
  [Types.GET_LOCATIONS_SUCCESS]: getRequestsSuccess,
  [Types.GET_LOCATIONS_FAILURE]: getRequestsFailure,

  [Types.NEW_LOCATION]: newRequest,
  [Types.NEW_LOCATION_SUCCESS]: newRequestSuccess,
  [Types.NEW_LOCATION_FAILURE]: newRequestFailure,

  [Types.UPDATE_LOCATION]: updateRequest,
  [Types.UPDATE_LOCATION_SUCCESS]: updateRequestSuccess,
  [Types.UPDATE_LOCATION_FAILURE]: updateRequestFailure
})
