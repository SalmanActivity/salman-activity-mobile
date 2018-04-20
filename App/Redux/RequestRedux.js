import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getRequests: ['userToken', 'month', 'year'],
  getRequestsSuccess: ['requests'],
  getRequestsFailure: ['error'],

  getRequest: ['userToken', 'id'],
  getRequestSuccess: ['request'],
  getRequestFailure: ['error'],

  newRequest: ['userToken', 'name', 'description', 'division', 'location',
    'startTime', 'endTime', 'participantNumber', 'participantDescription',
    'personInCharge', 'phoneNumber', 'speaker'],
  newRequestSuccess: ['request'],
  newRequestFailure: ['error'],

  updateRequest: ['userToken', 'id', 'requestData'],
  updateRequestSuccess: ['request'],
  updateRequestFailure: ['error'],

  changeRequestMonth: ['month'],
  changeRequestYear: ['year']
})

export const RequestTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  requests: [],
  fetchingRequests: false,
  fetchingRequestsError: null,

  request: null,
  fetchingRequest: false,
  fetchingRequestError: null,

  postingRequest: false,
  postingRequestError: null,

  updatingRequest: false,
  updatingRequestError: null,

  month: null,
  year: null
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

export const getRequest = (state) =>
state.merge({ fetchingRequest: true, fetchingRequestError: null })

export const getRequestSuccess = (state, action) => {
  const { request } = action
  return state.merge({
    fetchingRequest: false,
    request,
    fetchingRequestError: null })
}

export const getRequestFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetchingRequest: false, fetchingRequestError: error })
}

export const newRequest = (state, action) =>
state.merge({ postingRequest: true, postingRequestError: null })

export const newRequestSuccess = (state, action) => {
  const {request} = action

  return state.merge({ postingRequest: false,
    postingRequestError: null,
    request })
}

export const newRequestFailure = (state, action) => {
  const { error } = action
  return state.merge({ postingRequest: false, postingRequestError: error })
}

export const updateRequest = (state) =>
state.merge({ updatingRequest: true, updatingRequestError: null })

export const updateRequestSuccess = (state, action) => {
  const {request} = action
  return state.merge({ updatingRequest: false,
    updatingRequestError: null,
    request})
}

export const updateRequestFailure = (state, action) => {
  const { error } = action
  return state.merge({ updatingRequest: false, updatingRequestError: error })
}

export const changeRequestMonth = (state, action) => {
  const { month } = action
  return state.merge({ month })
}

export const changeRequestYear = (state, action) => {
  const { year } = action
  return state.merge({ year })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REQUESTS]: getRequests,
  [Types.GET_REQUESTS_SUCCESS]: getRequestsSuccess,
  [Types.GET_REQUESTS_FAILURE]: getRequestsFailure,

  [Types.GET_REQUEST]: getRequest,
  [Types.GET_REQUEST_SUCCESS]: getRequestSuccess,
  [Types.GET_REQUEST_FAILURE]: getRequestFailure,

  [Types.NEW_REQUEST]: newRequest,
  [Types.NEW_REQUEST_SUCCESS]: newRequestSuccess,
  [Types.NEW_REQUEST_FAILURE]: newRequestFailure,

  [Types.UPDATE_REQUEST]: updateRequest,
  [Types.UPDATE_REQUEST_SUCCESS]: updateRequestSuccess,
  [Types.UPDATE_REQUEST_FAILURE]: updateRequestFailure,

  [Types.CHANGE_REQUEST_MONTH]: changeRequestMonth,
  [Types.CHANGE_REQUEST_YEAR]: changeRequestYear
})
