export function addAuth(id, secret) {
  return {
    type: 'ADD_AUTH',
    payload: {
      clientID: id,
      clientSecret: secret,
    }
  }
}

export function fetchAuth(){
  return {
    type: 'FETCH_INFO_FULLFILLED',
    payload: {
      username: "hejsan",
      password: "dasan",
    }
  }
}
