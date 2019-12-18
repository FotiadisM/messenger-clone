import React from 'react';
import './User.css'

const User = ({ name }) => {
  return (
    <div className='User'>
      <div className='User-picture'></div>
      <div className='User-name'>{name}</div>
    </div>
  );
}

export default User