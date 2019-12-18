import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from '../../Components/FriendsList/FriendsList';
import './Messenger.css';

import { setFriendsSearch } from '../../Actions/actions/inputActions';

const mapStateToProps = (state) => {
  return {
    input: state.input
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFriendsSearch: (event) => dispatch(setFriendsSearch(event.target.value))
  };
};

class Messenger extends Component {

  render() {
    const { setRoute, user, setFriendsSearch } = this.props;
    const friendsSearch = this.props.input.friendsSearch;
    const filteredFriends = user.friends.filter(user => {
      return user.name.toLocaleLowerCase().includes(friendsSearch.toLocaleLowerCase());
    })

    return (
      <div className='Messenger'>
        <div className='Messenger-nav'>
            <div className='Messenger-nav-logo'></div>
            <h1 className='Messenger-nav-logo-text'>messenger</h1>
        </div>
        <div className='Messenger-section'>
          <div className='Messenger-section-friendsList'>
            <div className='Messenger-section-friendsList-gray'>
              <input
                className='Messenger-section-friendsList-gray-input'
                type='text'
                placeholder='Search for people'
                onChange={setFriendsSearch}/>
            </div>
            <div className='Messenger-section-friendsList-list'>
              <FriendsList users={filteredFriends}/>
            </div>
          </div>
          <div className='Messenger-section-message'>

          </div>
          <div className='Messenger-section-profile'>
            <div className='Messenger-section-profile-picture'></div>
            <div className='Messenger-section-profile-status'>{user.status}</div>
            <div className='Messenger-section-profile-name'>{user.name}</div>
            <div className='Messenger-section-profile-blogs'>My Blogs</div>
            <div className='Messenger-section-profile-settings'>Settings</div>
            <div className='Messenger-section-profile-signOut' onClick={() => setRoute('Homepage')}>Sign Out</div>
            <div className='Messenger-section-profile-delete'>Delete Profile</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);