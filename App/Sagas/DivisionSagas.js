import { call, put } from 'redux-saga/effects'
import DivisionActions from '../Redux/DivisionRedux'

export function * getDivisions (api, action) {
  const {divisionToken} = action
  const response = yield call(api.getDivisions, divisionToken)

  if (response.ok) {
    yield put(DivisionActions.getDivisionsSuccess(response.data))
  } else {
    const {cause} = response.data
    yield put(DivisionActions.getDivisionsFailure(cause))
  }
}

export function * newDivision (api, action) {
  const {divisionToken, name} = action
  const response = yield call(api.postDivision,
                              divisionToken,
                              name)

  if (response.ok) {
    yield put(DivisionActions.postDivisionSuccess())
  } else {
    const {cause} = response.data
    yield put(DivisionActions.postDivisionFailure(cause))
  }
}

export function * updateDivision (api, action) {
  const {divisionToken, id, divisionData} = action
  const response = yield call(api.updateDivision, divisionToken, id, divisionData)

  if (response.ok) {
    yield put(DivisionActions.updateDivisionSuccess())
  } else {
    const {cause} = response.data
    yield put(DivisionActions.updateDivisionFailure(cause))
  }
}
