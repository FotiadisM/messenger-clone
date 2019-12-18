import React from 'react';
import User from '../User/User'
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div className='UserList'>
      {
        users.map((user, i) => {
          return (
            <User key={i} name={user.name}/>
          );
        })
      }
    </div>
  )
}

export default UserList;