import { call, put } from 'redux-saga/effects'
import DivisionActions from '../Redux/DivisionRedux'

export function * getDivisions (api, action) {
  const {userToken} = action
  const response = yield call(api.getDivisions, userToken)

  if (response.ok) {
    yield put(DivisionActions.getDivisionsSuccess(response.data))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(DivisionActions.getDivisionsFailure(cause))
  }
}

export function * newDivision (api, action) {
  const {userToken, name} = action
  const response = yield call(api.postDivision,
                              userToken,
                              name)

  if (response.ok) {
    yield put(DivisionActions.newDivisionSuccess())
    yield put({type: 'Navigation/BACK'})
    yield put(DivisionActions.getDivisions(userToken))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(DivisionActions.newDivisionFailure(cause))
  }
}

export function * updateDivision (api, action) {
  const {userToken, id, divisionData} = action
  const response = yield call(api.updateDivision, userToken, id, divisionData)

  if (response.ok) {
    yield put(DivisionActions.updateDivisionSuccess())
    yield put(DivisionActions.getDivisions(userToken))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(DivisionActions.updateDivisionFailure(cause))
  }
}
