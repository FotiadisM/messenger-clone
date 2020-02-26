import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  return (
    <div className='Message'>
      {message.parts[0].payload.content}
    </div>
  );
}

export default Message;