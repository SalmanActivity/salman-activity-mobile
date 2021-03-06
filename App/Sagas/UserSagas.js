import { call, put } from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'

export function * getMe (api, action) {
  const {userToken} = action
  const response = yield call(api.getMe, userToken)

  if (response.ok) {
    yield put(UserActions.getMeSuccess(response.data))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(UserActions.getMeFailure(cause))
  }
}

export function * getUsers (api, action) {
  const {userToken} = action
  const response = yield call(api.getUsers, userToken)

  if (response.ok) {
    yield put(UserActions.getUsersSuccess(response.data))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(UserActions.getUsersFailure(cause))
  }
}

export function * newUser (api, action) {
  const {userToken, name, username, email, password, division, admin} = action
  const response = yield call(api.postUser,
                              userToken,
                              name,
                              username,
                              email,
                              password,
                              division,
                              admin)

  if (response.ok) {
    yield put(UserActions.newUserSuccess())
    yield put({type: 'Navigation/BACK'})
    yield put(UserActions.getUsers(userToken))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(UserActions.newUserFailure(cause))
  }
}

export function * updateUser (api, action) {
  const {userToken, id, userData} = action
  const response = yield call(api.updateUser, userToken, id, userData)

  if (response.ok) {
    yield put(UserActions.updateUserSuccess())
    yield put(UserActions.getUsers(userToken))
  } else {
    const cause = response.data
      ? (response.data.error
        ? (response.data.error.cause : response.problem)
        : response.problem)
      : response.problem

    yield put(UserActions.updateUserFailure(cause))
  }
}
