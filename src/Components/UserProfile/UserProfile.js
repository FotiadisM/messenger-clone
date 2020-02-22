import React from 'react';
import RequestsList from '../RequestsList/RequestsList';
import './UserProfile.css';

const UserProfile = ({ setRoute, user, addFriendMode, requestsMode, requests, onFriendRequest, onAcceptRequest }) => {

  if(requestsMode) {
    return (
      <div className='UserProfile'>
        <RequestsList requests={requests} onAcceptRequest={onAcceptRequest}/>
      </div>
    );
  }

  else if(addFriendMode) {
    return (
      <div className='UserProfile'>
        <div className='Messenger-section-profile-picture'>
          <img className='Messenger-section-profile-picture-img' src={'https://robohash.org/7' + user._id} alt='Profile'/>
        </div>
        <div className='Messenger-section-profile-name'>{user.name}</div>
        <button className='btn UserProfile-friendBtn' onClick={() => onFriendRequest(user)}>Send friend Request</button>
      </div>
    );
  }
  else {
    return (
      <div className='UserProfile'>
        <div className='Messenger-section-profile-picture'>
          <img className='Messenger-section-profile-picture-img' src={'https://robohash.org/7' + user._id} alt='Profile'/>
        </div>
        <div className='Messenger-section-profile-status'>{user.status}</div>
        <div className='Messenger-section-profile-name'>{user.name}</div>
        <div className='Messenger-section-profile-blogs'>My Blogs</div>
        <div className='Messenger-section-profile-settings'>Settings</div>
        <div className='Messenger-section-profile-signOut' onClick={() => setRoute('Homepage')}>Sign Out</div>
        <div className='Messenger-section-profile-delete'>Delete Profile</div>
      </div>
    );
  }
}

export default UserProfile;