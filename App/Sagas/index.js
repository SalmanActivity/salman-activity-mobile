import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import { UserTypes } from '../Redux/UserRedux'
import { LocationTypes } from '../Redux/LocationRedux'
import { DivisionTypes } from '../Redux/DivisionRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './AuthSagas'
import { getMe, getUsers, newUser, updateUser } from './UserSagas'
import { getLocations, newLocation, updateLocation } from './LocationSagas'
import { getDivisions, newDivision, updateDivision } from './DivisionSagas'
import { getRequests, newRequest, updateRequest } from './RequestSagas'

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

    takeLatest(DivisionTypes.GET_DIVISIONS, getDivisions, api),
    takeEvery(DivisionTypes.NEW_DIVISION, newDivision, api),
    takeEvery(DivisionTypes.UPDATE_DIVISION, updateDivision, api),

    takeLatest(LocationTypes.GET_LOCATIONS, getLocations, api),
    takeEvery(LocationTypes.NEW_LOCATION, newLocation, api),
    takeEvery(LocationTypes.UPDATE_LOCATION, updateLocation, api),

    takeLatest(LocationTypes.GET_REQUESTS, getRequests, api),
    takeEvery(LocationTypes.NEW_REQUEST, newRequest, api),
    takeEvery(LocationTypes.UPDATE_REQUEST, updateRequest, api)
  ])
}
