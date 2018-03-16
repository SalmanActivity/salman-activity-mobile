const users = require('../Fixtures/users.json')

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
  }
}
