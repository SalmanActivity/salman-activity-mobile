import { call, put } from 'redux-saga/effects'
import DivisionActions from '../Redux/DivisionRedux'

export function * getDivisions (api, action) {
  const {DivisionToken} = action
  const response = yield call(api.getDivisions, DivisionToken)

  if (response.ok) {
    yield put(DivisionActions.getDivisionsSuccess(response.data))
  } else {
    const {cause} = response.data
    yield put(DivisionActions.getDivisionsFailure(cause))
  }
}

export function * newDivision (api, action) {
  const {DivisionToken, name} = action
  const response = yield call(api.postDivision,
                              DivisionToken,
                              name)

  if (response.ok) {
    yield put(DivisionActions.postDivisionSuccess())
  } else {
    const {cause} = response.data
    yield put(DivisionActions.postDivisionFailure(cause))
  }
}

export function * updateDivision (api, action) {
  const {DivisionToken, id, DivisionData} = action
  const response = yield call(api.updateDivision, DivisionToken, id, DivisionData)

  if (response.ok) {
    yield put(DivisionActions.updateDivisionSuccess())
  } else {
    const {cause} = response.data
    yield put(DivisionActions.updateDivisionFailure(cause))
  }
}
