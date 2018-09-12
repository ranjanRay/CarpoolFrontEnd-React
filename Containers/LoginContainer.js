
import {connect} from 'react-redux';
import Login from '../Components/Login';
import { AuthenticateWithDb } from '../Actions/LoginActions';
// import AuthenticateWithDb from '';



var mapStateToProps=(state)=>{
    console.log('inside mapStateToProps',state);
    return {
        login:state.isLoggedIn
    }
}

var mapDispatchToProps = (dispatch) => {
    return{
        onLogin:(creds)=>{
            console.log(creds);
            dispatch(AuthenticateWithDb(creds));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);