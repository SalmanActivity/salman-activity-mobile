import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({

  getReports: ['userToken'],
  getReportsSuccess: ['reports'],
  getReportsFailure: ['error'],

  getReport: ['userToken', 'requestId'],
  getReportSuccess: ['report'],
  getReportFailure: ['error'],

  newReport: ['userToken', 'request_id', 'content', 'photo'],
  newReportSuccess: null,
  newReportFailure: ['error'],

  updateReport: ['userToken', 'request_id', 'content', 'photo'],
  updateReportSuccess: null,
  updateReportFailure: ['error']
})

export const ReportTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  reports: [],
  fetchingReports: false,
  fetchingReportsError: null,

  report: null,
  fetchingReport: false,
  fetchingReportError: null,

  postingReport: false,
  postingReportError: null,

  updatingReport: false,
  updatingReportError: null
})

/* ------------- Reducers ------------- */

export const getReports = (state) =>
state.merge({ fetchingReports: true, fetchingReportsError: null })

export const getReportsSuccess = (state, action) => {
  const { reports } = action
  return state.merge({ fetchingReports: false,
    reports,
    fetchingReportsError: null })
}

export const getReportsFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetchingReports: false,
    fetchingReportsError: error })
}

export const getReport = (state) =>
state.merge({ fetchingReport: true, fetchingReportError: null })

export const getReportSuccess = (state, action) => {
  const { report } = action
  return state.merge({ fetchingReport: false,
    report,
    fetchingReportError: null })
}

export const getReportFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetchingReport: false,
    fetchingReportError: error })
}

export const newReport = (state) =>
state.merge({ postingReport: true, postingReportError: null })

export const newReportSuccess = (state) => {
  return state.merge({ postingReport: false, postingReportError: null })
}

export const newReportFailure = (state, action) => {
  const { error } = action
  return state.merge({ postingReport: false, postingReportError: error })
}

export const updateReport = (state) =>
state.merge({ updatingReport: true, updatingReportError: null })

export const updateReportSuccess = (state) => {
  return state.merge({ updatingReport: false, updatingReportError: null })
}

export const updateReportFailure = (state, action) => {
  const { error } = action
  return state.merge({ updatingReport: false, updatingReportError: error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REPORTS]: getReports,
  [Types.GET_REPORTS_SUCCESS]: getReportsSuccess,
  [Types.GET_REPORTS_FAILURE]: getReportsFailure,

  [Types.GET_REPORT]: getReport,
  [Types.GET_REPORT_SUCCESS]: getReportSuccess,
  [Types.GET_REPORT_FAILURE]: getReportFailure,

  [Types.NEW_REPORT]: newReport,
  [Types.NEW_REPORT_SUCCESS]: newReportSuccess,
  [Types.NEW_REPORT_FAILURE]: newReportFailure,

  [Types.UPDATE_REPORT]: updateReport,
  [Types.UPDATE_REPORT_SUCCESS]: updateReportSuccess,
  [Types.UPDATE_REPORT_FAILURE]: updateReportFailure
})
