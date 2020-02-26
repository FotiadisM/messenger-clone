import React from 'react';
import Message from '../Message/Message';
import './MessageList.css'

const MessageList = ({ messages }) => {

  if(messages.length === 0) {
    return (
      <div>

      </div>
    );
  }
  else {
    return (
      <div className='MessageList'>
        {
          messages.map((message) => {
            return (
              <div className='MessageList'>
                <Message key={message.id} message={message}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default MessageList;