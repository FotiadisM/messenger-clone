import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from '../../Components/InputForm/InputForm'
import './Homepage.css';

import { setEmail } from '../../Actions/actions/SearchFieldEmail'
import { setPassword } from '../../Actions/actions/SearchFieldPassword'

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (event) => dispatch(setEmail(event.target.value)),
    changePassword: (event) => dispatch(setPassword(event.target.value))
  }
}

class Homepage extends Component {
  render() {
    return (
      <div className='Homepage'>
        <div className='Homepage-nav'>
          <div className='Homepage-nav-logo'>
            <div className="Homepage-nav-logo-div"></div>
            <div className='Homepage-nav-logo-text'>messenger</div>
          </div>
            <div className='Homepage-nav-text'>Don't have an account?</div>
            <button className='btn Homepage-nav-btn'>Sign Up</button>
        </div>
        <div className='Homepage-section'>
          <div className='Homepage-section-text'>
            <div className='Homepage-section-text-text'>Stay Connected,<br/>Whenever,<br/>Wherever.</div>
            <button className="btn Homepage-section-text-btn">Learn More</button>
          </div>
          <div className='Homepage-section-signin'>
            <div className='Homepage-section-signin-form'>
              <InputForm placeholder='email'></InputForm>
              <InputForm placeholder='password'></InputForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);