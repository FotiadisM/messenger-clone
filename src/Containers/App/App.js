import React from 'react';
import { connect } from 'react-redux';
import { setRoute } from '../../Actions/actions/routeAction';
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

function App() {
    return (
        <div className="App">
            Initial State
        </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);