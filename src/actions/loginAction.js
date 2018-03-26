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



export function fetchUser(){
  return {
    type: 'FETCH_INFO_FULLFILLED',
    payload: {
      username: "hejsan",
      password: "dasan",
    }
  }
}



export function loginUser(user, pass) {
  return function(dispatch) {
    dispatch({type: 'FETCH_INFO'});
    let json;
    let data = {
      mail: user,
      pwd: pass,
    };
    console.log("HFHAHFAHFHAW");
    console.log(data);
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
        const disp = await dispatch({type: 'FETCH_AUTH_FULLFILLED', payload: json })
        console.log(json);
        return true;
      } catch (e) {
        dispatch({type: "FETCH_INFO_REJECTED", payload: e})
        return false;
      }
    }
    request();
  }

}
// componentDidMount(){
//     fetch('http://localhost:5000/api/payments/update', {
//         method: 'GET',
//         credentials: 'same-origin',
//         mode: 'no-cors',
//         headers: new Headers({
//             "ClientID": 'admin',
//             "ClientSecret": 'admin'
//         })
//     })
//     .then(res => {
//         console.log(res.status);
//         console.log(res.ok);
//         console.log(res.statusText);
//         if (!res.ok) {
//             throw Error("Something went wrong")
//         }
//         else if (res.status == 401) {
//             console.log("hej");
//             this.setState({
//                 butt: "Unauthorized"
//             })
//         }
//         return res
//     })
//     .then(res => res.json())
//     .then(res => {
//         this.setState({
//             butt : res
//         })
//         }, () => {
//             this.setState({
//                 requestFailed: true
//             })
//         })
//     }
