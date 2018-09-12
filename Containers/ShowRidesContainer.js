
import { connect } from 'react-redux';
import ShowRides from '../Components/ShowRides';
import {getAllRidesFromDb, bookRide} from '../Actions/ShowRidesAction';



var mapStateToProps = (state) => {
    console.log('inside mapStateToProps', state);
    return {
        a:"You are in showRidesContainer.js",
        rides: state.rides
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        onShowRides: () => {
            console.log('You are in the showRidesContainer.js');
            dispatch(getAllRidesFromDb());
        },
        onBookRide: (rideData)=> {
            console.log('offerId for book request: ',rideData.offerId);
            dispatch(bookRide(rideData));
            // dispatch(getAllRidesFromDb());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowRides);