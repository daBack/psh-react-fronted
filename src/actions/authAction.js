export function addAuth(id, secret) {
  return {
    type: 'ADD_AUTH',
    payload: {
      clientID: id,
      clientSecret: secret,
    }
  }
}
