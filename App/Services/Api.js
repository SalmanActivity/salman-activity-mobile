// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import config from '../Config/AppConfig'
import ObjectFilter from '../Transforms/ObjectFilter'

const addAuthorizationHeader = (userToken) => ({
  headers: {Authorization: `JWT ${userToken}`}
})

const create = (baseURL = config.baseURL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 5000
  })

  const login = (username, password) =>
    api.post('auth/login', {username, password})

  const getMe = (userToken) =>
    api.get('users/me', {}, addAuthorizationHeader(userToken))

  const getUsers = (userToken) =>
    api.get('users', {}, addAuthorizationHeader(userToken))

  const postUser = (userToken, name, username, email,
    password, division, admin) => {
    let data = {name, username, email, password, division, admin}

    data = ObjectFilter(data, (key, value) => value != null)

    return api.post('users',
                    data,
                    addAuthorizationHeader(userToken))
  }

  const updateUser = (userToken, id, userData) => {
    const {id: _, ...data} = userData
    return api.put(`users/${id}`, data, addAuthorizationHeader(userToken))
  }

  const getDivisions = (userToken) =>
    api.get('divisions', {}, addAuthorizationHeader(userToken))

  const postDivision = (userToken, name) =>
    api.post('divisions',
             {name},
             addAuthorizationHeader(userToken))

  const updateDivision = (userToken, id, divisionData) => {
    const {id: _, ...data} = divisionData
    return api.put(`divisions/${id}`, data, addAuthorizationHeader(userToken))
  }

  const getLocations = (userToken) =>
    api.get('locations', {}, addAuthorizationHeader(userToken))

  const postLocation = (userToken, name) =>
    api.post('locations',
             {name},
             addAuthorizationHeader(userToken))

  const updateLocation = (userToken, id, locationData) => {
    const {id: _, ...data} = locationData
    return api.put(`locations/${id}`, data, addAuthorizationHeader(userToken))
  }

  const getRequests = (userToken, month, year) =>
    api.get('requests', {month, year},
      addAuthorizationHeader(userToken))

  const getRequest = (userToken, id) =>
    api.get(`requests/${id}`, {},
      addAuthorizationHeader(userToken))

  const postRequest = (userToken, name, description, division, location,
    startTime, endTime, participantNumber, participantDescription,
    personInCharge, phoneNumber, speaker) => {
    let data = {
      name,
      description,
      division,
      location,
      startTime,
      endTime,
      participantNumber,
      participantDescription,
      speaker,
      personInCharge,
      phoneNumber}

    data = ObjectFilter(data, (key, value) => value != null)

    return api.post('requests',
             data,
             addAuthorizationHeader(userToken))
  }

  const updateRequest = (userToken, id, requestData) => {
    const {id: _, ...data} = requestData
    return api.put(`requests/${id}`, data, addAuthorizationHeader(userToken))
  }

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
    updateLocation,
    getRequests,
    getRequest,
    postRequest,
    updateRequest
  }
}

// let's return back our create method as the default.
export default {
  create
}
