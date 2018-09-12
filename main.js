import ReactDOM from 'react-dom';
import React from 'react';
import Login from './Components/Login';
import OfferRide from './Components/OfferRide';
import ShowRidesContainer from './Containers/ShowRidesContainer';
import LoginContainer from './Containers/LoginContainer';
import store from './Store/index'
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from  'react-redux';
import OfferRideContainer from './Containers/OfferRideContainer';

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                        <div>
                                <Route path='/' exact component={LoginContainer}/>
                                <Route path='/book_rides' component={OfferRideContainer}/>
                                <Route path='/show_rides' component={ShowRidesContainer}/>
                        </div>
                </BrowserRouter>
        </Provider>,
        document.getElementById('myApp')
);