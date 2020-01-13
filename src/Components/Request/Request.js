import React from 'react';
import './Request.css'

const Request = ({ request, onAcceptRequest, onRejectRequest }) => {
  return (
    <div className='Request'>
      <div className='Request-name'>{request.name}</div>
    </div>
  );
}

export default Request