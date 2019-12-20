import React from 'react';
import './TextingPage.css';

const TextingPage = ({ textingUser }) => {
  return (
    <div className='TextingPage'>
      <div className='TextingPage-user'>
        <div className='TextingPage-user-picture'></div>
        <div className='TextingPage-user-name'>{textingUser.name}</div>
      </div>
      <div className='TextingPage-main'>
        <div className='TextingPage-main-messaging'>

        </div>
        <div className='TextingPage-main-sending'>
          <input className='TextingPage-main-sending-input' type='text'/>
          <button className='btn TextingPage-main-sending-btn'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default TextingPage;