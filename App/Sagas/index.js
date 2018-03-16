import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import { UserTypes } from '../Redux/UserRedux'
import { LocationTypes } from '../Redux/LocationRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './AuthSagas'
import { getMe, getUsers, newUser, updateUser } from './UserSagas'
import { getLocations, newLocation, updateLocation } from './LocationSagas'

/* ------------- API ------------- */

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(AuthTypes.LOGIN, login, api),

    takeLatest(UserTypes.GET_ME, getMe, api),
    takeLatest(UserTypes.GET_USERS, getUsers, api),
    takeEvery(UserTypes.NEW_USER, newUser, api),
    takeEvery(UserTypes.UPDATE_USER, updateUser, api),

    takeLatest(LocationTypes.GET_LOCATIONS, getLocations, api),
    takeEvery(LocationTypes.NEW_LOCATION, newLocation, api),
    takeEvery(LocationTypes.UPDATE_LOCATION, updateLocation, api)
  ])
}
