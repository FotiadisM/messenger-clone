import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from '../../Components/Homepage/Homepage';
import SignUp from '../../Components/SignUp/SignUp';
import Messenger from '../Messenger/Messenger'
import './App.css';

import { setRoute } from '../../Actions/actions/routeActions';
import { setSignInEmail, setSignInPassword } from '../../Actions/actions/signInActions';
import { setSignUpName, setSignUpEmail, setSignUpPassword, setSignUpRPassword } from '../../Actions/actions/signUpActions';
import { loadUser, setUserFriends } from '../../Actions/actions/userActions';

const mapStateToProps = (state) => {
  return {
    route: state.route,
    signIn: state.signIn,
    signUp: state.signUp,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => dispatch(setRoute(route)),
    setSignInEmail: (email) => dispatch(setSignInEmail(email)),
    setSignInPassword: (password) => dispatch(setSignInPassword(password)),
    setSignUpName: (name) => dispatch(setSignUpName(name)),
    setSignUpEmail: (email) => dispatch(setSignUpEmail(email)),
    setSignUpPassword: (password) => dispatch(setSignUpPassword(password)),
    setSignUpRPassword: (password) => dispatch(setSignUpRPassword(password)),
    loadUser: (user) => dispatch(loadUser(user)),
    setUserFriends: (friends) => dispatch(setUserFriends(friends))
  };
};

const validateSignUp = ({ name, email, password, rpassword }) => {
  return true;
}

class App extends Component {

  onSignIn = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'get'
    })
    .then(response => response.json())
    .then(friends => {
      this.props.loadUser({
        id: 1,
        name: "Fotiadis Michalis",
        email: "myEmail@themail.com"
      });
      this.props.setUserFriends(friends);
      this.props.setRoute('Messenger');
      this.props.setSignInEmail('')
      this.props.setSignInPassword('')
    })
  }

  onSignUp = () => {
    const { name, email, password } = this.props.signUp;

    if(validateSignUp(this.props.signUp)) {
      fetch('http://localhost:3001/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.props.setRoute('Messenger');
      })
      .catch(err => console.log(err))
    }
  }

  render() {
    const {
      setRoute , setSignInEmail, setSignInPassword, 
      setSignUpName, setSignUpEmail, setSignUpPassword, setSignUpRPassword
    } = this.props;
    const route = this.props.route.route;
    const user = this.props.user;

    if(route === 'Homepage') {
      return (
         <div className='App'>
            <Homepage
              setRoute={setRoute}
              onSignIn={this.onSignIn}
              setEmail={setSignInEmail}
              setPassword={setSignInPassword}/>
        </div>
      );
    }
    if(route === 'SignUp') {
      return (
         <div className='App'>
           <SignUp
            setRoute={setRoute}
            onSignUp={this.onSignUp}
            setName={setSignUpName}
            setEmail={setSignUpEmail}
            setPassword={setSignUpPassword}
            setRPassword={setSignUpRPassword}/>
        </div>
      );
    }
    if(route === 'Messenger') {
      return (
         <div className='App'>
           <Messenger setRoute={setRoute} user={user}/>
        </div>
      );
    }
    else {
      return(
        <div style={{fontSize: '10rem'}}>Not Implemented yet!</div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);