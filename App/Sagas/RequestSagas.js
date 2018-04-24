import { call, put, select } from 'redux-saga/effects'
import RequestActions from '../Redux/RequestRedux'

export function * getRequests (api, action) {
  const {userToken, month, year} = action
  const response = yield call(api.getRequests, userToken, month, year)

  if (response.ok) {
    yield put(RequestActions.getRequestsSuccess(response.data))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(RequestActions.getRequestsFailure(cause))
  }
}

export function * getRequest (api, action) {
  const {userToken, id} = action
  const response = yield call(api.getRequest, userToken, id)

  if (response.ok) {
    yield put(RequestActions.getRequestSuccess(response.data))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(RequestActions.getRequestFailure(cause))
  }
}

export function * newRequest (api, action) {
  const {userToken, name, description, division, location,
    startTime, endTime, participantNumber, participantDescription,
    personInCharge, phoneNumber, speaker} = action

  const response = yield call(api.postRequest,
                              userToken,
                              name,
                              description,
                              division,
                              location,
                              startTime,
                              endTime,
                              participantNumber,
                              participantDescription,
                              personInCharge,
                              phoneNumber,
                              speaker)

  if (response.ok) {
    const {data} = response
    const request = yield select(state => state.request)

    yield put(RequestActions.newRequestSuccess(data))
    yield put(RequestActions.getRequests(userToken,
      request.month,
      request.year))
    yield put({type: 'Navigation/BACK'})
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(RequestActions.newRequestFailure(cause))
  }
}

export function * updateRequest (api, action) {
  const {userToken, id, requestData} = action
  const response = yield call(api.updateRequest, userToken, id, requestData)

  if (response.ok) {
    const {data} = response
    const request = yield select(state => state.request)

    yield put(RequestActions.updateRequestSuccess(data))
    yield put(RequestActions.getRequests(userToken,
      request.month,
      request.year))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(RequestActions.updateRequestFailure(cause))
  }
}
