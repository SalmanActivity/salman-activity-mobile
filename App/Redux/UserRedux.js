import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getMe: ['userToken'],
  getMeSuccess: ['user'],
  getMeFailure: ['error'],

  getUsers: ['userToken'],
  getUsersSuccess: ['users'],
  getUsersFailure: ['error'],

  newUser: ['userToken', 'name', 'username', 'password', 'division', 'admin'],
  newUserSuccess: null,
  newUserFailure: ['error'],

  updateUser: ['userToken', 'id', 'userData'],
  updateUserSuccess: null,
  updateUserFailure: ['error']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  me: null,
  fetchingMe: false,
  fetchingMeError: null,

  users: [],
  fetchingUsers: false,
  fetchingUsersError: null,

  postingUser: false,
  postingUserError: null,

  updatingUser: false,
  updatingUserError: null
})

/* ------------- Reducers ------------- */

export const getMe = (state) =>
  state.merge({ fetchingMe: true, fetchingMeError: null })

export const getMeSuccess = (state, action) => {
  const { user } = action
  return state.merge({ fetchingMe: false, me: user, fetchingMeError: null })
}

export const getMeFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetchingMe: false, fetchingMeError: error })
}

export const getUsers = (state) =>
  state.merge({ fetchingUsers: true, fetchingUsersError: null })

export const getUsersSuccess = (state, action) => {
  const { users } = action
  return state.merge({ fetchingUsers: false, users, fetchingUsersError: null })
}

export const getUsersFailure = (state, action) => {
  const { error } = action
  return state.merge({ fetchingUsers: false, fetchingUsersError: error })
}

export const newUser = (state) =>
  state.merge({ postingUser: true, postingUserError: null })

export const newUserSuccess = (state) => {
  return state.merge({ postingUser: false, postingUserError: null })
}

export const newUserFailure = (state, action) => {
  const { error } = action
  return state.merge({ postingUser: false, postingUserError: error })
}

export const updateUser = (state) =>
  state.merge({ updatingUser: true, updatingUserError: null })

export const updateUserSuccess = (state) => {
  return state.merge({ updatingUser: false, updatingUserError: null })
}

export const updateUserFailure = (state, action) => {
  const { error } = action
  return state.merge({ updatingUser: false, updatingUserError: error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ME]: getMe,
  [Types.GET_ME_SUCCESS]: getMeSuccess,
  [Types.GET_ME_FAILURE]: getMeFailure,

  [Types.GET_USERS]: getUsers,
  [Types.GET_USERS_SUCCESS]: getUsersSuccess,
  [Types.GET_USERS_FAILURE]: getUsersFailure,

  [Types.NEW_USER]: newUser,
  [Types.NEW_USER_SUCCESS]: newUserSuccess,
  [Types.NEW_USER_FAILURE]: newUserFailure,

  [Types.UPDATE_USER]: updateUser,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure
})
