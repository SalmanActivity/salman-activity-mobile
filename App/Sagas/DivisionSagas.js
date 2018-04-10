import { call, put } from 'redux-saga/effects'
import DivisionActions from '../Redux/DivisionRedux'

export function * getDivisions (api, action) {
  const {userToken} = action
  const response = yield call(api.getDivisions, userToken)

  if (response.ok) {
    yield put(DivisionActions.getDivisionsSuccess(response.data))
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = 'Connection Error'
    }

    yield put(DivisionActions.getDivisionsFailure(cause))
  }
}

export function * newDivision (api, action) {
  const {userToken, name} = action
  const response = yield call(api.postDivision,
                              userToken,
                              name)

  if (response.ok) {
    yield put(DivisionActions.postDivisionSuccess())
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = 'Connection Error'
    }

    yield put(DivisionActions.postDivisionFailure(cause))
  }
}

export function * updateDivision (api, action) {
  const {userToken, id, divisionData} = action
  const response = yield call(api.updateDivision, userToken, id, divisionData)

  if (response.ok) {
    yield put(DivisionActions.updateDivisionSuccess())
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = 'Connection Error'
    }

    yield put(DivisionActions.updateDivisionFailure(cause))
  }
}
