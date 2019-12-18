import React from 'react';
import Friend from '../Friend/Friend'
import './FriendsList.css';

const FriendsList = ({ users }) => {
  return (
    <div className='FriendsList'>
      {
        users.map((user, i) => {
          return (
            <Friend key={user.id} name={user.name}/>
          );
        })
      }
    </div>
  )
}

export default FriendsList;