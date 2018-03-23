const users = require('../Fixtures/users.json')
const divisions = require('../Fixtures/divisions.json')
const locations = require('../Fixtures/locations.json')

export default {
  login: (username, password) => {
    if (username === 'admin' && password === 'admin') {
      return {
        ok: true,
        data: {
          status: 'success',
          success: true,
          token: 'abcd'
        }
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'Wrong username/password'
        }
      }
    }
  },

  getMe: (userToken) => {
    if (userToken === 'abcd') {
      return {
        ok: true,
        data: {
          id: 'iniadmin',
          name: 'Admin',
          username: 'admin',
          division: 'divisionsatu',
          admin: true,
          enabled: true
        }
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  getUsers: (userToken) => {
    if (userToken === 'abcd') {
      return {
        ok: true,
        data: users
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  postUser: (userToken, name, username, password, division, admin) => {
    if (userToken === 'abcd') {
      users.forEach(user => {
        if (user.username === username) {
          return {
            ok: false,
            data: {
              msg: 'cannot perform action',
              cause: 'username exists'
            }
          }
        }
      })

      return {
        ok: true,
        data: {}
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  updateUser: (userToken, id, userData) => {
    if (userToken === 'abcd') {
      users.forEach(user => {
        if (user.id === id) {
          return {
            ok: true,
            data: {}
          }
        }
      })

      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'user not found'
        }
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  getDivision: (divisionToken) => {
    if (divisionToken === 'abcd') {
      return {
        ok: true,
        data: divisions
        }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
      }
    }
  },

  getLocations: (userToken) => {
    if (userToken === 'abcd') {
      return {
        ok: true,
        data: locations
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  postDivision: (divisionToken, name) => {
    if (divisionToken === 'abcd') {
      divisions.forEach(user => {
        if (division.name === name) {
          return {
            ok: false,
            data: {
              msg: 'cannot perform action',
              cause: 'location exists'
            }
          }
        }
      })

      return {
        ok: true,
        data: {}
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  postLocation: (userToken, name) => {
    if (userToken === 'abcd') {
      locations.forEach(location => {
        if (location.name === name) {
          return {
            ok: false,
            data: {
              msg: 'cannot perform action',
              cause: 'location exists'
            }
          }
        }
      })

      return {
        ok: true,
        data: {}
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  updateDivision: (divisionToken, id, divisionData) => {
    if (divisionToken === 'abcd') {
      divisions.forEach(division => {
        if (division.id === id) {
          return {
            ok: true,
            data: {}
          }
        }
      })

      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'location not found'
        }
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  },

  updateLocation: (userToken, id, locationData) => {
    if (userToken === 'abcd') {
      locations.forEach(location => {
        if (location.id === id) {
          return {
            ok: true,
            data: {}
          }
        }
      })

      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'location not found'
        }
      }
    } else {
      return {
        ok: false,
        data: {
          msg: 'cannot perform action',
          cause: 'unauthorized access'
        }
      }
    }
  }
}
