import React from 'react';
import icon from '../../Assets/left-arrow-white.png';
import './SignUp.css';

const SignUp = ({ setRoute, onSignUp, setName, setEmail, setPassword, setRPassword }) => {
  return (
    <div className='SignUp'>
      <div className='btn SignUp-back-btn' onClick={() => setRoute('Homepage')}>
        <img src={icon} className='SignUp-back-btn-icon' alt='go back icon'/>
      </div>
      <div className='SignUp-back-text'>Already have an account? Sign In</div>
      <div className='SignUp-form'>
        <h2 className='SignUp-form-text'>Sing Up</h2>
        <hr className='SignUp-form-line'></hr>
        <input type='text' className='SignUp-form-input SignUp-form-name' placeholder='Name'
          onChange={(event) => setName(event.target.value)}/>
        <input type='email' className='SignUp-form-input SignUp-form-email' placeholder='Email'
          onChange={(event) => setEmail(event.target.value)}/>
        <input type='password' className='SignUp-form-input SignUp-form-password' placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}/>
        <input type='password' className='SignUp-form-input SignUp-form-rpassword' placeholder='Reapeat password'
          onChange={(event) => setRPassword(event.target.value)}/>
        <button className='btn SignUp-form-btn' onClick={onSignUp}>Get Started!</button>
      </div>
    </div>
  );
}

export default SignUp;