import React from 'react';
import InputForm from '../InputForm/InputForm';
import './Homepage.css';

const Homepage = ({ setRoute, onSignIn, setEmail, setPassword,  }) => {

  return (
    <div className='Homepage'>
      <div className='Homepage-nav'>
        <div className='Homepage-nav-logo'>
          <div className='Homepage-nav-logo-div'></div>
          <h1 className='Homepage-nav-logo-text'>messenger</h1>
        </div>
          <div className='Homepage-nav-text'>Don't have an account?</div>
          <button className='btn Homepage-nav-btn' onClick={() => setRoute('SignUp')}>Sign Up</button>
      </div>
      <div className='Homepage-section'>
        <div className='Homepage-section-text'>
          <h2 className='Homepage-section-text-text'>Stay Connected,<br/>Whenever,<br/>Wherever.</h2>
          <button className="btn Homepage-section-text-btn" onClick={() => setRoute('LearnMore')}>Learn More</button>
        </div>
        <div className='Homepage-section-signin'>
          <div className='Homepage-section-signin-form'>
            <InputForm mFunction={setEmail} type='email' placeholder='Email'></InputForm>
            <InputForm mFunction={setPassword} type='password' placeholder='Password'></InputForm>
            <hr className='Homepage-section-signin-form-line'/>
            <button className='btn Homepage-section-signin-form-btn' onClick={onSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;