import { call, put } from 'redux-saga/effects'
import LocationActions from '../Redux/LocationRedux'

export function * getLocations (api, action) {
  const {userToken} = action
  const response = yield call(api.getLocations, userToken)

  if (response.ok) {
    yield put(LocationActions.getLocationsSuccess(response.data))
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = response.problem
    }

    yield put(LocationActions.getLocationsFailure(cause))
  }
}

export function * newLocation (api, action) {
  const {userToken, name} = action
  const response = yield call(api.postLocation,
                              userToken,
                              name)

  if (response.ok) {
    yield put(LocationActions.postLocationSuccess())
    yield put({type: 'Navigation/BACK'})
    yield put(LocationActions.getLocations(userToken))
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = response.problem
    }

    yield put(LocationActions.postLocationFailure(cause))
  }
}

export function * updateLocation (api, action) {
  const {userToken, id, locationData} = action
  const response = yield call(api.updateLocation, userToken, id, locationData)

  if (response.ok) {
    yield put(LocationActions.updateLocationSuccess())
    yield put(LocationActions.getLocations(userToken))
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = response.problem
    }

    yield put(LocationActions.updateLocationFailure(cause))
  }
}
