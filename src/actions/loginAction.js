import { addAuth } from './authAction'
const apiAddress = 'http://localhost:5000';


export function addUser(name, pass) {
  return {
    type: 'ADD_INFO',
    payload: {
      username: name,
      password: pass,
    }
  }
}



export function zeroLoggedIn(){
  return function(dispatch) {
    dispatch({type: 'LOGGED_IN_SET'})
  }
}



export function loginUser(user, pass) {
  return function(dispatch) {
    dispatch({type: 'FETCH_INFO'});
    let json;
    let data = {
      Email: user,
      Pwd: pass,
    };
    const request = async () => {
      try {
        const response = await fetch( apiAddress + '/api/users/login', {
          body: JSON.stringify(data),
          mode: 'cors',
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          method: 'POST',
        });

        const json = await response.json();
        await dispatch({type: 'FETCH_AUTH_FULLFILLED', payload: json })
        if (json.code === 200) {
          console.log("jag är inne");
          await dispatch(addAuth(json.data.ClientID, json.data.ClientSecret))
          await dispatch({type:'LOGGED_IN_VERIFIED'})
        }
        else {
          console.log("Code from respons was not 200, Fix redirect to start with message.");
          await dispatch({ type:'LOGGED_IN_DENIED'})
        }
      } catch (e) {
        await dispatch({type: "FETCH_INFO_REJECTED", payload: e})
        await dispatch({type:"LOGGED_IN_DENIED"})
      }
    }
    request();
  }

}
