import React from 'react';
import Request from '../Request/Request'
import './RequestsList.css';

const RequestsList = ({ requests, onAcceptRequest, onRejectRequest }) => {

  if(requests.length === 0) {
    return (
      <div className='RequestsList-empty'>
        
      </div>
    );
  }
  else {
    return (
      <div className='RequestsList'>
        {
          requests.map((request, i) => {
            return (
              <Request key={request._id} request={request} onAcceptRequest={onAcceptRequest} onRejectRequest={onRejectRequest}/>
            );
          })
        }
      </div>
    );
  }
}

export default RequestsList;