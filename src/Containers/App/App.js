import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from '../../Components/Homepage/Homepage';
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
    setEmail: (event) => dispatch(setEmail(event.target.value)),
    setPassword: (event) => dispatch(setPassword(event.target.value)),
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
            setRoute={setRoute}
            onSignIn={this.onSignIn}
            setEmail={setEmail}
            setPassword={setPassword}/>
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