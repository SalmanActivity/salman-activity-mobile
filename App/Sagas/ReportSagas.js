import { call, put } from 'redux-saga/effects'
import ReportActions from '../Redux/ReportRedux'

export function * getReports (api, action) {
  const {userToken} = action
  const response = yield call(api.getReports, userToken)

  if (response.ok) {
    yield put(ReportActions.getReportsSuccess(response.data))
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = 'Connection Error'
    }

    yield put(ReportActions.getReportsFailure(cause))
  }
}

export function * getReport (api, action) {
  const {userToken, requestId} = action
  const response = yield call(api.getReport, userToken, requestId)

  if (response.ok) {
    yield put(ReportActions.getReportSuccess(response.data))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(ReportActions.getReportFailure(cause))
  }
}

export function * newReport (api, action) {
  const {userToken, request_id, content, photo} = action
  const response = yield call(api.postReport,
                              userToken,
                              request_id,
                              content,
                              photo)

  if (response.ok) {
    yield put(ReportActions.postReportSuccess())
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = 'Connection Error'
    }

    yield put(ReportActions.postReportFailure(cause))
  }
}

export function * updateReport (api, action) {
  const {userToken, request_id, content, photo} = action
  const response = yield call(api.updateReport,
                              userToken,
                              request_id,
                              content,
                              photo)

  if (response.ok) {
    yield put(ReportActions.updateReportSuccess())
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = 'Connection Error'
    }

    yield put(ReportActions.updateReportFailure(cause))
  }
}
