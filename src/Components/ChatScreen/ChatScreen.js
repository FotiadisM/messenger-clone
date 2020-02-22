import React from 'react';
import MessageList from '../MessageList/MessageList';
import './ChatScreen.css';

const ChatScreen = ({ textingUser, addFriendMode, setUserMessage, onSendMessage }) => {

  if(textingUser.id === 0 || addFriendMode === true) {
    return (
      <div className='ChatScreen-emtpy'></div>
    );
  }
  else {

    const enterPressed = (event) => {
      let code = event.keyCode || event.which;
      if(code === 13) { //13 is the enter keycode
          onSendMessage(event)
      } 
    }

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
            <MessageList messages={textingUser.messages}/>
          </div>
          <div className='ChatScreen-main-sending'>
            <input
              id='ChatScreen-main-sending-input'
              className='ChatScreen-main-sending-input'
              type='text' placeholder='Send a message'
              onChange={(event) => setUserMessage(event.target.value)}
              onKeyPress={(event) => enterPressed(event)}/>
            <button className='btn ChatScreen-main-sending-btn' onClick={onSendMessage}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatScreen;