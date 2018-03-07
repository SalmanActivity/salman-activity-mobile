export default {
  // Functions return fixtures
  login: (username, password) => {
    return {
      ok: true,
      data: {
        status: 'success',
        success: true,
        token: 'abcd'
      }
    }
  }
}
