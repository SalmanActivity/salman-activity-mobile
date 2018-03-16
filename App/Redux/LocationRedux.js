import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getMe: ['locationToken'],
  getMeSuccess: ['location'],
  getMeFailure: ['error'],

  getLocations: ['locationToken'],
  getLocationsSuccess: ['locations'],
  getLocationsFailure: ['error'],

  newLocation: ['locationToken', 'name'],
  newLocationSuccess: null,
  newLocationFailure: ['error'],

  updateLocation: ['locationToken', 'id', 'locationData'],
  updateLocationSuccess: null,
  updateLocationFailure: ['error']
})

export const LocationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    me: null,
    fetchingMe: false,
    fetchingMeError: null,
  
    locations: [],
    fetchingLocations: false,
    fetchingLocationsError: null,
  
    postingLocation: false,
    postingLocationError: null,
  
    updatingLocation: false,
    updatingLocationError: null
  })

/* ------------- Reducers ------------- */

export const getMe = (state) =>
state.merge({ fetchingMe: true, fetchingMeError: null })

export const getMeSuccess = (state, action) => {
const { location } = action
return state.merge({ fetchingMe: false, me: location, fetchingMeError: null })
}

export const getMeFailure = (state, action) => {
const { error } = action
return state.merge({ fetchingMe: false, fetchingMeError: error })
}

export const getLocations = (state) =>
state.merge({ fetchingLocations: true, fetchingLocationsError: null })

export const getLocationsSuccess = (state, action) => {
const { locations } = action
return state.merge({ fetchingLocations: false, locations, fetchingLocationsError: null })
}

export const getLocationsFailure = (state, action) => {
const { error } = action
return state.merge({ fetchingLocations: false, fetchingLocationsError: error })
}

export const newLocation = (state) =>
state.merge({ postingLocation: true, postingLocationError: null })

export const newLocationSuccess = (state) => {
return state.merge({ postingLocation: false, postingLocationError: null })
}

export const newLocationFailure = (state, action) => {
const { error } = action
return state.merge({ postingLocation: false, postingLocationError: error })
}

export const updateLocation = (state) =>
state.merge({ updatingLocation: true, updatingLocationError: null })

export const updateLocationSuccess = (state) => {
return state.merge({ updatingLocation: false, updatingLocationError: null })
}

export const updateLocationFailure = (state, action) => {
const { error } = action
return state.merge({ updatingLocation: false, updatingLocationError: error })
}
  
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_ME]: getMe,
    [Types.GET_ME_SUCCESS]: getMeSuccess,
    [Types.GET_ME_FAILURE]: getMeFailure,
  
    [Types.GET_LOCATIONS]: getLocations,
    [Types.GET_LOCATIONS_SUCCESS]: getLocationsSuccess,
    [Types.GET_LOCATIONS_FAILURE]: getLocationsFailure,
  
    [Types.NEW_LOCATION]: newLocation,
    [Types.NEW_LOCATION_SUCCESS]: newLocationSuccess,
    [Types.NEW_LOCATION_FAILURE]: newLocationFailure,
  
    [Types.UPDATE_LOCATION]: updateLocation,
    [Types.UPDATE_LOCATION_SUCCESS]: updateLocationSuccess,
    [Types.UPDATE_LOCATION_FAILURE]: updateLocationFailure
  })
  