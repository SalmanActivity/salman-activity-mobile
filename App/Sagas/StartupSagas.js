import { select, put } from 'redux-saga/effects'
import AuthActions, { AuthSelectors } from '../Redux/AuthRedux'
import AppStateActions from '../Redux/AppStateRedux'

// exported to make available for tests
export const isLoggedIn = AuthSelectors.isLoggedIn
export const getToken = AuthSelectors.getToken

// process STARTUP actions
export function * startup (action) {
  yield put(AppStateActions.setRehydrationComplete())
  yield put(AuthActions.startup())

  const loggedIn = yield select(isLoggedIn)

  if (loggedIn) {
    yield put(AuthActions.autoLogin())
  }
}
