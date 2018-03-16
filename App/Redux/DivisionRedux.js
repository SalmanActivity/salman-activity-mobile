import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({  

  getDivisions: ['divisionToken'],
  getDivisionsSuccess: ['divisions'],
  getDivisionsFailure: ['error'],

  newDivision: ['divisionToken', 'name'],
  newDivisionSuccess: null,
  newDivisionFailure: ['error'],

  updateDivision: ['divisionToken', 'id', 'divisionData'],
  updateDivisionSuccess: null,
  updateDivisionFailure: ['error']
})

export const DivisionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  
    divisions: [],
    fetchingDivisions: false,
    fetchingDivisionsError: null,
  
    postingDivision: false,
    postingDivisionError: null,
  
    updatingDivision: false,
    updatingDivisionError: null
  })

/* ------------- Reducers ------------- */

export const getDivisions = (state) =>
state.merge({ fetchingDivisions: true, fetchingDivisionsError: null })

export const getDivisionsSuccess = (state, action) => {
const { divisions } = action
return state.merge({ fetchingDivisions: false, divisions, fetchingDivisionsError: null })
}

export const getDivisionsFailure = (state, action) => {
const { error } = action
return state.merge({ fetchingDivisions: false, fetchingDivisionsError: error })
}

export const newDivision = (state) =>
state.merge({ postingDivision: true, postingDivisionError: null })

export const newDivisionSuccess = (state) => {
return state.merge({ postingDivision: false, postingDivisionError: null })
}

export const newDivisionFailure = (state, action) => {
const { error } = action
return state.merge({ postingDivision: false, postingDivisionError: error })
}

export const updateDivision = (state) =>
state.merge({ updatingDivision: true, updatingDivisionError: null })

export const updateDivisionSuccess = (state) => {
return state.merge({ updatingDivision: false, updatingDivisionError: null })
}

export const updateDivisionFailure = (state, action) => {
const { error } = action
return state.merge({ updatingDivision: false, updatingDivisionError: error })
}
  
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  
    [Types.GET_DIVISION]: getDivisions,
    [Types.GET_DIVISION_SUCCESS]: getDivisionsSuccess,
    [Types.GET_DIVISION_FAILURE]: getDivisionsFailure,
  
    [Types.NEW_DIVISION]: newDivision,
    [Types.NEW_DIVISION_SUCCESS]: newDivisionSuccess,
    [Types.NEW_DIVISION_FAILURE]: newDivisionFailure,
  
    [Types.UPDATE_DIVISION]: updateDivision,
    [Types.UPDATE_DIVISION_SUCCESS]: updateDivisionSuccess,
    [Types.UPDATE_DIVISION_FAILURE]: updateDivisionFailure
  })
  