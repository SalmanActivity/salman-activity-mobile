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
    api.post('users/login', {username, password})

  const getMe = (userToken) =>
    api.get('users/me', {}, addAuthorizationHeader(userToken))

  const getUsers = (userToken) =>
    api.get('users', {}, addAuthorizationHeader(userToken))

  const postUser = (userToken, name, username, password, divisions, roles) =>
    api.post('users',
             {name, username, password, divisions, roles},
             addAuthorizationHeader(userToken))

  const updateUser = (userToken, id, userData) =>
    api.put('users', {...userData, id}, addAuthorizationHeader(userToken))

  return {
    login,
    getMe,
    getUsers,
    postUser,
    updateUser
  }
}

// let's return back our create method as the default.
export default {
  create
}
