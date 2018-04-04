import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'

export function * login (api, action) {
  const { username, password } = action
  // make the call to the api
  const response = yield call(api.login, username, password)

  if (response.ok) {
    const { token } = response.data

    yield put(AuthActions.loginSuccess(token))
  } else {
    let cause

    if (response.data) {
      cause = response.data.error.cause
    } else {
      cause = 'Connection Error'
    }

    yield put(AuthActions.loginFailure(cause))
  }
}
