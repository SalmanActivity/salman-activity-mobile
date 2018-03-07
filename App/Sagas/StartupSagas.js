import { put, select } from 'redux-saga/effects'
import AuthActions, { AuthSelectors } from '../Redux/AuthRedux'

// exported to make available for tests
export const isLoggedIn = AuthSelectors.isLoggedIn
export const getToken = AuthSelectors.getToken

// process STARTUP actions
export function * startup (action) {
  const loggedIn = yield select(isLoggedIn)

  if (loggedIn) {
    const token = yield select(getToken)

    // terus ngapain gitu kalo udah kelogin
  }
}
