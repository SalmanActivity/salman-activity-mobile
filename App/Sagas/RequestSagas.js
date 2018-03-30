import { call, put } from 'redux-saga/effects'
import RequestActions from '../Redux/RequestRedux'

export function * getRequests (api, action) {
  const {userToken, month, year} = action
  const response = yield call(api.getRequests, userToken, month, year)

  if (response.ok) {
    yield put(RequestActions.getRequestsSuccess(response.data))
  } else {
    const { error } = response.data
    const { cause } = error
    yield put(RequestActions.getRequestsFailure(cause))
  }
}

export function * newRequest (api, action) {
  const {userToken, name, description, division, location,
    startTime, endTime, participantNumber, participantDescription,
    speaker, issuedTime} = action

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
                              speaker,
                              issuedTime)

  if (response.ok) {
    yield put(RequestActions.postRequestSuccess())
  } else {
    const { error } = response.data
    const { cause } = error
    yield put(RequestActions.postRequestFailure(cause))
  }
}

export function * updateRequest (api, action) {
  const {userToken, id, requestData} = action
  const response = yield call(api.updateRequest, userToken, id, requestData)

  if (response.ok) {
    yield put(RequestActions.updateRequestSuccess())
  } else {
    const { error } = response.data
    const { cause } = error
    yield put(RequestActions.updateRequestFailure(cause))
  }
}
