import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from '../../Components/FriendsList/FriendsList';
import ChatScreen from '../../Components/ChatScreen/ChatScreen';
import './Messenger.css';

import { setFriendsSearch } from '../../Actions/actions/inputActions';
import { setUser } from '../../Actions/actions/textingActions';

import logo from '../../Assets/messenger.png'

const mapStateToProps = (state) => {
  return {
    input: state.input,
    texting: state.texting
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFriendsSearch: (event) => dispatch(setFriendsSearch(event.target.value)),
    setTextingUser: (user) => dispatch(setUser(user))
  };
};

class Messenger extends Component {

  render() {
    const { setRoute, user, setFriendsSearch, setTextingUser } = this.props;
    const friendsSearch = this.props.input.friendsSearch;
    const textingUser = this.props.texting;

    const filteredFriends = user.friends.filter(user => {
      return user.name.toLocaleLowerCase().includes(friendsSearch.toLocaleLowerCase());
    })

    return (
      <div className='Messenger'>
        <div className='Messenger-nav'>
          <div className='Messenger-nav-logo'>
            <img src={logo} className='Messenger-nav-logo-div' alt='Logo'/>
            <h1 className='Messenger-nav-logo-text'>messenger</h1>
          </div>
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
              <FriendsList users={filteredFriends} setTextingUser={setTextingUser}/>
            </div>
          </div>
          <div className='Messenger-section-message'>
            <ChatScreen textingUser={textingUser}/>
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