import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['username', 'password'],
  loginSuccess: ['token'],
  loginFailure: ['error'],

  logout: null,
  autoLogin: null
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: null,
  loggingIn: false,
  loginError: null
})

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  isLoggedIn: state => !!state.auth.token,
  getToken: state => state.auth.token
}

/* ------------- Reducers ------------- */

// login
export const login = (state) =>
  state.merge({ loggingIn: true, error: null })

// successful login
export const loginSuccess = (state, action) => {
  const { token } = action
  return state.merge({ loggingIn: false, token, error: null })
}

// failed to login
export const loginFailure = (state, action) => {
  const { error } = action
  return state.merge({ loggingIn: false, error })
}

// logout
export const logout = (state) =>
  state.merge({ token: null })

// auto login
export const autoLogin = state => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.LOGOUT]: logout,
  [Types.AUTO_LOGIN]: autoLogin
})
