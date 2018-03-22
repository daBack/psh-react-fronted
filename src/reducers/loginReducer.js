export default function reducer(state={
  loginInfo: {
    username: "Kalle",
    password: "hej123",
  },
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

  }
  return state
}
