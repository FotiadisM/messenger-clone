import React from 'react';
import './Friend.css'

const Friend = ({ name }) => {
  return (
    <div className='Friend'>
      <div className='Friend-picture'></div>
      <div className='Friend-name'>{name}</div>
    </div>
  );
}

export default Friend