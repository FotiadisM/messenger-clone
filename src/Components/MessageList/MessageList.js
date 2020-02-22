import React from 'react';
// import Message from '../Message/Message';
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
              // <Message key={message.id} message={message}/>
            <h1 key={message.id}>{message.parts[0].payload.content}</h1>
            )
          })
        }
      </div>
    );
  }
}

export default MessageList;