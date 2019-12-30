import React from 'react';
import Friend from '../Friend/Friend'
import './FriendsList.css';

const FriendsList = ({ users, setTextingUser }) => {

  if(users.length === 0) {
    return (
      <div className='FriendsList-empty'>
        <span className='FriendsList-empty-text'>Add a Friend to start chating</span>
      </div>
    );
  }
  else {
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
    );
  }
}

export default FriendsList;