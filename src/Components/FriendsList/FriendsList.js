import React from 'react';
import Friend from '../Friend/Friend'
import './FriendsList.css';

const FriendsList = ({ users, setTextingUser }) => {
  return (
    <div className='FriendsList'>
      {
        users.map((user, i) => {
          return (
            <Friend key={user.id} user={user} setTextingUser={setTextingUser}/>
          );
        })
      }
    </div>
  )
}

export default FriendsList;