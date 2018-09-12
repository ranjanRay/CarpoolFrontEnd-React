import axios from 'axios';


function login(status) {
    if(status == 0)
        return {
            type: "UNSUCCESSFUL"
        }
    return {
        type: "SUCCESSFUL"
    }
}

function AuthenticateWithDb(creds) {
    console.log(creds);

    return (dispatch) => {
        axios({
            method: "POST",
            url: "http://localhost:3000/login",
            headers: {
                "Content-Type": "application/json"
            },
            data:creds
            
        }).then(
            (response)=>{
                console.log(response);
                if(response.data.status == 401)
                    dispatch(login(0))
                else
                    dispatch(login(1));
            }
        )
    }
}


// function login() {
//     return {
//         type: "LOGGED_IN"
//     }
// }


// function IncrementWithDelay() {
//     return (dispatch) => {
//         axios("https://reqres.in/api/users?delay=3",{
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(
//             (response)=>{
//                 console.log(response);
//                 dispatch(Increment());
//             }
//         )
//     }
// }



export {AuthenticateWithDb};