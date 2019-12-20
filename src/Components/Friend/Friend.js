import React from 'react';
import './Friend.css'

const Friend = ({ user, setTextingUser }) => {
  return (
    <div className='Friend' onClick={() => setTextingUser(user)}>
      <div className='Friend-picture'></div>
      <div className='Friend-name'>{user.name}</div>
    </div>
  );
}

export default Friend