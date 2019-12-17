import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homepage from '../../Components/Homepage/Homepage';
import Messenger from '../Messenger/Messenger'
import './App.css';

import { setRoute } from '../../Actions/actions/routeActions';
import { setEmail, setPassword } from '../../Actions/actions/signinActions';

const mapStateToProps = (state) => {
  return {
    route: state.route,
    signin: state.signin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => dispatch(setRoute(route)),
    setEmail: (text) => dispatch(setEmail(text)),
    setPassword: (text) => dispatch(setPassword(text))
  };
};

class App extends Component {

  render() {
    if(this.props.route.route === 'Homepage') {
      return (
         <div className='App'>
            <Homepage setRoute={this.props.setRoute}/>
        </div>
      );
    }
    if(this.props.route.route === 'Messenger') {
      return (
         <div className='App'>
           <Messenger setRoute={this.props.setRoute}/>
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