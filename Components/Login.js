import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component{
    render(){
        console.log(this.props.login);
        if(this.props.login) {
            return(
                <div>
                    <h1>Welcome to CarPoolz!</h1>
                    {this.props.history.push(`/book_rides`)}
                </div>
            )
        } else {
            return(
                <React.Fragment>
                <div align ="center">
                    <h1>Login page</h1>
                    <form>
                        <label for="username"><b>User Name </b></label>
                        <input ref="refUsername" type="text" name="username" placeholder="Enter user name"/>
                        <br/>
                        <label for="password"><b>  Password  </b></label>
                        <input ref="refPassword" type="password" name="password" placeholder="Enter password"></input>
                        <br/>
                        <button type="button" className = "button4 btn-primary" onClick={()=>{this.props.onLogin({
                            username:this.refs.refUsername.value,
                            password:this.refs.refPassword.value
                        })}}>Submit</button>
                    </form>
                </div>
                </React.Fragment>
    
            )
        }
    }
}

export default Login;