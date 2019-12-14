import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRoute } from '../../Actions/actions/routeAction';
import Homepage from '../Homepage/Homepage';
import './App.css';

const mapStateToProps = (state) => {
  return {
    route: state.route
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => {
      dispatch(setRoute(route));
    }
  };
};

class App extends Component {

  render() {
    if(this.props.route.route === 'Homepage') {
      return (
        <div className="App">
          <Homepage/>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);