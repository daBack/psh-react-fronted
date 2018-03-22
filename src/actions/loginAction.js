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
export function loginUser(user, pwd) {
  return function(dispatch) {
    dispatch({type: 'FETCH_INFO'});

    const info = {
      user: user,
      pwd: pwd,
    }
    const request = async () => {
      console.log("hej");
      try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          // credentials: 'same-origin',
          mode: 'no-cors',
          // headers: new Headers({
          //     "ClientID": 'admin',
          //     "ClientSecret": 'admin'
          // }),
          body: user, pwd,
        });
        const json = await response.json();
        // const disp = await dispatch({type: FETCH_INFO_FULLFILLED, paylo})
        console.log(json);
        console.log("hejsan");
      } catch (e) {
        dispatch({type: "FETCH_INFO_REJECTED", payload: e})
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
