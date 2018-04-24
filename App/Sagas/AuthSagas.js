import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'

export function * login (api, action) {
  const { username, password } = action
  // make the call to the api
  let response = yield call(api.login, username, password)

  if (response.ok) {
    const { token } = response.data

    response = yield call(api.getMe, token)

    if (response.ok) {
      if (response.data.admin) yield put(AuthActions.loginSuccessAdmin(token))
      else yield put(AuthActions.loginSuccessReguler(token))
    } else {
      const cause = response.data
        ? (response.data.error
          ? (response.data.error.cause : response.problem)
          : response.problem)
        : response.problem

      yield put(AuthActions.loginFailure(cause))
    }
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(AuthActions.loginFailure(cause))
  }
}
