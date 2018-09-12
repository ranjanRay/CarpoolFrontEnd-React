
import { connect } from 'react-redux';
import Login from '../Components/Login';
import { AuthenticateWithDb } from '../Actions/LoginActions';
import OfferRide from '../Components/OfferRide';
import { WriteToDb } from '../Actions/OfferRideAction';


var mapStateToProps = (state) => {
    console.log('inside mapStateToProps', state);
    return {
        isOffered: state.isOffered
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        onOffer: (data) => {
            console.log('onOffer',data);
            dispatch(WriteToDb(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferRide);