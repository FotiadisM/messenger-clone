import React from 'react';
import './ChatScreen.css';

const ChatScreen = ({ textingUser }) => {

  if(textingUser.id === 0) {
    return (
      <div className='ChatScreen-emtpy'></div>
    );
  }
  else {
    return (
      <div className='ChatScreen'>
        <div className='ChatScreen-user'>
          <div className='ChatScreen-user-picture'>
            <img className='ChatScreen-user-picture-img' src={'https://robohash.org/7' + textingUser.id} alt="Texting user's profile"/>
          </div>
          <div className='ChatScreen-user-name'>{textingUser.name}</div>
        </div>
        <div className='ChatScreen-main'>
          <div className='ChatScreen-main-messaging'>
  
          </div>
          <div className='ChatScreen-main-sending'>
            <input className='ChatScreen-main-sending-input' type='text' placeholder='Send a message'/>
            <button className='btn ChatScreen-main-sending-btn'>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatScreen;