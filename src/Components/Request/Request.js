import React from 'react';
import './Request.css'

const Request = ({ request, onAcceptRequest, onRejectRequest }) => {
  return (
    <div className='Request'>
      <div className='Request-name'>{request.name}</div>
      <div className='Request-options'>
        <div className='Request-square Request-options-accept' onClick={() => onAcceptRequest(request)}></div>
        <div className='Request-square Request-options-reject'></div>
      </div>
    </div>
  );
}

export default Request