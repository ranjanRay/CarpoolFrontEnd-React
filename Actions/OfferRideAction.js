import axios from 'axios';


function offerStatus(status) {
    if(status == 0)
        return {
            type: "OFFERED"
        }
    return {
        type: "NOT_OFFERED"
    }
}

function WriteToDb(data) {
    console.log('inside writetodb', data);

    return (dispatch) => {
        axios("http://localhost:3000/offer_ride", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            data: data

        }).then(
            (response) => {
                console.log(response);
                if(response.data.status == 200)
                    dispatch(offerStatus(0));
                else
                dispatch(offerStatus(-1));
            }
        )
    }
}

export { WriteToDb };