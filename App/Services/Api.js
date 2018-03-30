// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import config from '../Config/AppConfig'

const addAuthorizationHeader = (userToken) => ({
  headers: {Authorization: `JWT ${userToken}`}
})

const create = (baseURL = config.baseURL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const login = (username, password) =>
    api.post('auth/login', {username, password})

  const getMe = (userToken) =>
    api.get('users/me', {}, addAuthorizationHeader(userToken))

  const getUsers = (userToken) =>
    api.get('users', {}, addAuthorizationHeader(userToken))

  const postUser = (userToken, name, username, password, division, admin) =>
    api.post('users',
             {name, username, password, division, admin},
             addAuthorizationHeader(userToken))

  const updateUser = (userToken, id, userData) =>
    api.put(`users/${id}`, {...userData, id}, addAuthorizationHeader(userToken))

  const getDivisions = (userToken) =>
    api.get('divisions', {}, addAuthorizationHeader(userToken))

  const postDivision = (userToken, name) =>
    api.post('divisions',
             {name},
             addAuthorizationHeader(userToken))

  const updateDivision = (userToken, id, divisionData) =>
    api.put(`divisions/${id}`, {...divisionData, id},
      addAuthorizationHeader(userToken))

  const getLocations = (userToken) =>
    api.get('locations', {}, addAuthorizationHeader(userToken))

  const postLocation = (userToken, name) =>
    api.post('locations',
             {name},
             addAuthorizationHeader(userToken))

  const updateLocation = (userToken, id, locationData) =>
    api.put(`locations/${id}`, {...locationData, id},
      addAuthorizationHeader(userToken))

  return {
    login,
    getMe,
    getUsers,
    postUser,
    updateUser,
    getDivisions,
    postDivision,
    updateDivision,
    getLocations,
    postLocation,
    updateLocation
  }
}

// let's return back our create method as the default.
export default {
  create
}
