import { NavigationActions } from 'react-navigation'
import AppNavigation from '../Navigation/AppNavigation'
import {AuthTypes} from './AuthRedux'
import {AppStateTypes} from './AppStateRedux'

const { navigate } = NavigationActions
const { getStateForAction } = AppNavigation.router

const INITIAL_STATE = getStateForAction(
  navigate({ routeName: 'LoadingScreen' }))
const NOT_LOGGED_IN_STATE = getStateForAction(
  navigate({ routeName: 'LoggedOutNavigation' }))
const ADMIN_STATE = getStateForAction(
  navigate({ routeName: 'AdminNavigation' }))
const REGULAR_STATE = getStateForAction(
  navigate({ routeName: 'RegularNavigation' }))

export function reducer (state = INITIAL_STATE, action) {
  let nextState
  switch (action.type) {
    case AppStateTypes.SET_REHYDRATION_COMPLETE:
      return NOT_LOGGED_IN_STATE
    case AuthTypes.LOGOUT:
      return NOT_LOGGED_IN_STATE
    case AuthTypes.LOGIN_SUCCESS_ADMIN:
      return ADMIN_STATE
    case AuthTypes.LOGIN_SUCCESS_REGULAR:
      return REGULAR_STATE
    case AuthTypes.AUTO_LOGIN_ADMIN:
      return ADMIN_STATE
    case AuthTypes.AUTO_LOGIN_REGULAR:
      return REGULAR_STATE
  }
  nextState = getStateForAction(action, state)
  return nextState || state
}
