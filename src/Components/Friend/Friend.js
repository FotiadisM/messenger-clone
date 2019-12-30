import React from 'react';
import './Friend.css'

const Friend = ({ user, setTextingUser }) => {
  return (
    <div className='Friend' onClick={() => setTextingUser(user)}>
      <div className='Friend-picture'>
        <img className='Friend-picture-img' src={'https://robohash.org/7' + user.id} alt="friend's profile"/>
      </div>
      <div className='Friend-name'>{user.name}</div>
    </div>
  );
}

export default Friend