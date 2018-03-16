import { call, put } from 'redux-saga/effects'
import LocationActions from '../Redux/LocationRedux'

export function * getLocations (api, action) {
  const {locationToken} = action
  const response = yield call(api.getLocations, locationToken)

  if (response.ok) {
    yield put(LocationActions.getLocationsSuccess(response.data))
  } else {
    const {cause} = response.data
    yield put(LocationActions.getLocationsFailure(cause))
  }
}

export function * newLocation (api, action) {
  const {locationToken, name} = action
  const response = yield call(api.postLocation,
                              locationToken,
                              name)

  if (response.ok) {
    yield put(LocationActions.postLocationSuccess())
  } else {
    const {cause} = response.data
    yield put(LocationActions.postLocationFailure(cause))
  }
}

export function * updateLocation (api, action) {
  const {locationToken, id, locationData} = action
  const response = yield call(api.updateLocation, locationToken, id, locationData)

  if (response.ok) {
    yield put(LocationActions.updateLocationSuccess())
  } else {
    const {cause} = response.data
    yield put(LocationActions.updateLocationFailure(cause))
  }
}
