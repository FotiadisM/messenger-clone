import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from '../../Components/Homepage/Homepage';
import SignUp from '../../Components/SignUp/SignUp';
import Messenger from '../Messenger/Messenger'
import './App.css';

import { setRoute } from '../../Actions/actions/routeActions';
import { setEmail, setPassword } from '../../Actions/actions/signinActions';
import { loadUser, setUserFriends } from '../../Actions/actions/userActions';

const mapStateToProps = (state) => {
  return {
    route: state.route,
    signin: state.signin,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => dispatch(setRoute(route)),
    setEmail: (email) => dispatch(setEmail(email)),
    setPassword: (password) => dispatch(setPassword(password)),
    loadUser: (user) => dispatch(loadUser(user)),
    setUserFriends: (friends) => dispatch(setUserFriends(friends))
  };
};

class App extends Component {

  onSignIn = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'get'
    })
    .then(response => response.json())
    .then(friends => {
     this.props.loadUser(friends[4]);
     this.props.setUserFriends(friends);
     this.props.setRoute('Messenger');
     this.props.setEmail('')
     this.props.setPassword('')
    })
  }

  render() {
    const { setRoute , setEmail, setPassword} = this.props;
    const route = this.props.route.route;
    const user = this.props.user;

    if(route === 'Homepage') {
      return (
         <div className='App'>
            <Homepage
            route={route}
            setRoute={setRoute}
            onSignIn={this.onSignIn}
            setEmail={setEmail}
            setPassword={setPassword}/>
        </div>
      );
    }
    if(route === 'SignUp') {
      return (
         <div className='App'>
           <SignUp setRoute={setRoute} setEmail={setEmail} setPassword={setPassword}/>
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
        <div>Not Implemented yet!</div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);