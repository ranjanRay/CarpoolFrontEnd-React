var reducer = (state={
    isLoggedIn: false,
    isOffered: false,
    rides:[]
}, action)=> {
    let currentLoginState = state.isLoggedIn;
    let currentOfferState = state.isOffered;
    switch(action.type) {
        case "SUCCESSFUL":
            console.log('The user is logged in.');
            currentLoginState = true;
            return Object.assign({},state,{isLoggedIn: currentLoginState});
        case "UNSUCCESSFUL":
            console.log("Authentication failed.. retry");
            currentLoginState = false;
            return Object.assign({}, state, {isLoggedIn: currentLoginState});
        case "NOT_OFFERED":
            console.log('write to Db failed... returned NOT_OFFERED');
            currentOfferState = false;
            return Object.assign({}, state, {isOffered: currentOfferState});
        case "OFFERED":
            currentOfferState = true;
            console.log('write to Db SUCCESS... returned OFFERED');
            return Object.assign({}, state, {isOffered: currentOfferState});
        case "RENDER":
            console.log("inside reducer",action.payload);
            return Object.assign({}, state,{rides:action.payload.data});
        default:
            return state;
    }
}

export default reducer;