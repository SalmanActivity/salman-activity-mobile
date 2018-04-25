const users = require('../Fixtures/users.json')
const divisions = require('../Fixtures/divisions.json')
const locations = require('../Fixtures/locations.json')
const reports = require('../Fixtures/reports.json')

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
          error: {
            msg: 'cannot perform action',
            cause: 'Wrong username/password'
          }
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
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
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
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
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
              error: {
                msg: 'cannot perform action',
                cause: 'username exists'
              }
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
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
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
          error: {
            msg: 'cannot perform action',
            cause: 'user not found'
          }
        }
      }
    } else {
      return {
        ok: false,
        data: {
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
        }
      }
    }
  },

  getDivisions: (userToken) => {
    if (userToken === 'abcd') {
      return {
        ok: true,
        data: divisions
      }
    } else {
      return {
        ok: false,
        data: {
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
        }
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
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
        }
      }
    }
  },

  postDivision: (userToken, name) => {
    if (userToken === 'abcd') {
      divisions.forEach(division => {
        if (division.name === name) {
          return {
            ok: false,
            data: {
              error: {
                msg: 'cannot perform action',
                cause: 'location exists'
              }
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
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
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
              error: {
                msg: 'cannot perform action',
                cause: 'location exists'
              }
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
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
        }
      }
    }
  },

  updateDivision: (userToken, id, divisionData) => {
    if (userToken === 'abcd') {
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
          error: {
            msg: 'cannot perform action',
            cause: 'location not found'
          }
        }
      }
    } else {
      return {
        ok: false,
        data: {
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
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
          error: {
            msg: 'cannot perform action',
            cause: 'location not found'
          }
        }
      }
    } else {
      return {
        ok: false,
        data: {
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
        }
      }
    }
  },

  getReports: (userToken) => {
    if (userToken === 'abcd') {
      return {
        ok: true,
        data: reports
      }
    } else {
      return {
        ok: false,
        data: {
          error: {
            msg: 'cannot perform action',
            cause: 'unauthorized access'
          }
        }
      }
    }
  }
}
