export default function reducer(state={
  loginInfo: {
    username: "Kalle",
    password: "hej123",
  },
  loggedIn: null,
  fetching: false,
  fetched: false,
  error: null,
  infoMessage: null,
}, action) {

  switch (action.type) {
    case 'ADD_INFO': {
      return {
        ...state,
        loginInfo: {...state.loginInfo,
          username: action.payload.username,
          password: action.payload.password,
        }
      }
    }
    case 'LOGGED_IN_VERIFIED': {
      return { ...state, loggedIn: true}
    }
    case 'LOGGED_IN_DENIED': {
      return { ...state, fetching: false, loggedIn: false, infoMessage: "Fel användarnamn eller lösenord"}
    }
    case 'LOGGED_IN_SET': {
      return { ...state, loggedIn: null}
    }
    case 'FETCH_INFO': {
      return { ...state, fetching: true}
    }
    case 'FETCH_INFO_REJECTED': {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_INFO_FULLFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        loginInfo: action.payload,
      }
    }
    default: {
      return { ...state, error: 'default'}
    }
  }
}
