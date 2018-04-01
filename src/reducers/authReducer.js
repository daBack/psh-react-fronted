export default function reducer(state={
  auth: {
    clientID : null,
    clientSecret: null,
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'ADD_AUTH': {
      return {
        ...state,
        auth: {...state.auth,
          clientID : action.payload.clientID,
          clientSecret: action.payload.clientSecret,
        }
      }
    }
    case 'FETCH_AUTH': {
      return { ...state, fetching: true}
    }
    case 'FETCH_AUTH_REJECTED': {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_AUTH_FULLFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        auth: action.payload,
      }
    }
    default: {
      return { ...state, error: 'default'}
    }
  }
}
