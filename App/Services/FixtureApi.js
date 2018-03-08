export default {
// Functions return fixtures
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
          status: 'failed',
          success: false,
          cause: 'wrong username or password'
        }
      }
    }
  }
}
