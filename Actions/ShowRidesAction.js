import axios from 'axios';


function showAllRide(response) {
        return {
            type: "RENDER",
            payload: response
        }
}

function getAllRidesFromDb() {
    console.log('inside getAllRidesFromDb');

    return (dispatch) => {
        axios("http://localhost:3000/show_ride", {
            method: "GET",

            headers: {
                "Content-Type": "application/json"
            }

        }).then(
            (response) => {
                console.log(response);
                dispatch(showAllRide(response));
            }
        )
    }
}

function bookRide(rideData) {
    console.log('attempting booking a ride.',rideData);
    return(dispatch) => {
        axios("http://localhost:3000/book_ride", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            data:rideData

        }).then(
            (response) => {
                console.log(response);
                dispatch(getAllRidesFromDb());
            }
        )
    }
}


export { getAllRidesFromDb , bookRide};