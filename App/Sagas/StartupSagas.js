import { select } from 'redux-saga/effects'
import { AuthSelectors } from '../Redux/AuthRedux'

// exported to make available for tests
export const isLoggedIn = AuthSelectors.isLoggedIn
export const getToken = AuthSelectors.getToken

// process STARTUP actions
export function * startup (action) {
  const loggedIn = yield select(isLoggedIn)

  if (loggedIn) {
    // terus ngapain gitu kalo udah kelogin
  }
}
