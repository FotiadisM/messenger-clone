import React from 'react';
import './SignUp.css';

const SignUp = ({ setRoute }) => {
  return (
    <div className='SignUp'>
      <div className='btn SignUp-back-btn' onClick={() => setRoute('Homepage')}></div>
      <div className='SignUp-back-text'>Already have an account? Sign In</div>
      <div className='SignUp-form'>
        <h2 className='SignUp-form-text'>Sing Up</h2>
        <hr className='SignUp-form-line'></hr>
        <input type='text' className='SignUp-form-input SignUp-form-name' placeholder='Name'/>
        <input type='email' className='SignUp-form-input SignUp-form-email' placeholder='Email'/>
        <input type='password' className='SignUp-form-input SignUp-form-password' placeholder='Password'/>
        <input type='password' className='SignUp-form-input SignUp-form-rpassword' placeholder='Reapeat password'/>
        <button className='btn SignUp-form-btn' onClick={() => setRoute('Messenger')}>Get Started!</button>
      </div>
    </div>
  );
}

export default SignUp;