import { select, put, call } from 'redux-saga/effects'
import AuthActions, { AuthSelectors } from '../Redux/AuthRedux'
import AppStateActions from '../Redux/AppStateRedux'

// exported to make available for tests
export const isLoggedIn = AuthSelectors.isLoggedIn
export const getToken = AuthSelectors.getToken

// process STARTUP actions
export function * startup (api, action) {
  yield put(AppStateActions.setRehydrationComplete())
  yield put(AuthActions.startupAuth())

  const loggedIn = yield select(isLoggedIn)

  if (loggedIn) {
    const token = yield select(AuthSelectors.getToken)
    const response = yield call(api.getRequests, token)

    if (response.ok) {
      if (response.data.admin) {
        yield put(AuthActions.autoLoginAdmin())
      } else {
        yield put(AuthActions.autoLoginRegular())
      }
    }
  }
}
