import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from '../../Components/FriendsList/FriendsList';
import ChatScreen from '../../Components/ChatScreen/ChatScreen';
import UserProfile from '../../Components/UserProfile/UserProfile';
import './Messenger.css';

import { setUser } from '../../Actions/actions/textingActions';
import { setUserFriends } from '../../Actions/actions/userActions';
import { setFriendsSearch, setInputUsers , setUserProfile} from '../../Actions/actions/inputActions';

import logo from '../../Assets/messenger.png'
import addFriendIcon from '../../Assets/add-friend.png';

const mapStateToProps = (state) => {
  return {
    input: state.input,
    texting: state.texting,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFriendsSearch: (event) => dispatch(setFriendsSearch(event.target.value)),
    setUserProfile: (user) => dispatch(setUserProfile(user)),
    setInputUsers: (users) => dispatch(setInputUsers(users)),
    setTextingUser: (user) => dispatch(setUser(user)),
    setUserFriends: (friends) => dispatch(setUserFriends(friends))
  };
};

class Messenger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requestsMode: false,
      addFriendMode: false
    }
  }

  onUserClick = (user) => {
    if(this.state.addFriendMode) {
      this.props.setUserProfile(user);
    }
    else {
      this.props.setTextingUser(user);
    }
  }

  onFriendRequest = (user) => {
    fetch('http://localhost:3001/sendRequest', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: user.email,
          user: {
            id: this.props.user._id,
            name: this.props.user.name
          }
        })
    })
  }

  toggleAddFriendMode = () => {
    if(!this.state.addFriendMode) {
      fetch('http://localhost:3001/users', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.props.user.email
        })
      })
      .then(response => response.json())
      .then(users => {
        this.setState({addFriendMode: true});
        this.props.setInputUsers(users)
        this.props.setUserProfile(users[0]);
      })
    }
    else {
      this.setState({addFriendMode: false});
      this.props.setInputUsers(this.props.user.friends);
      this.props.setUserProfile(this.props.user);
    }
  }

  toggleRequestMode = () => {
    if(this.state.requestsMode) {
      this.setState({requestsMode: false});
    }
    else {
      this.setState({requestsMode: true});
    }
  }

  render() {
    const { setRoute, user, setFriendsSearch } = this.props;
    const { friendsSearch, userProfile, users } = this.props.input;
    const textingUser = this.props.texting;

    const filteredFriends = users.filter(user => {
      return user.name.toLocaleLowerCase().includes(friendsSearch.toLocaleLowerCase());
    })

    return (
      <div className='Messenger'>
        <div className='Messenger-nav'>
          <div className='Messenger-nav-logo'>
            <img src={logo} className='Messenger-nav-logo-div' alt='Logo'/>
            <h1 className='Messenger-nav-logo-text'>messenger</h1>
          </div>
          <button className='btn Messenger-nav-requests' onClick={this.toggleRequestMode}><span className='Messenger-nav-requests-span'>{user.requests.length}</span>Requests</button>
          <button className='Messenger-nav-add' onClick={this.toggleAddFriendMode}>
            <img className='Messenger-nav-add-img' src={addFriendIcon} alt='Add friend'/>Add a friend
          </button>
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
              <FriendsList users={filteredFriends} onUserClick={this.onUserClick}/>
            </div>
          </div>
          <div className='Messenger-section-message'>
            <ChatScreen textingUser={textingUser} addFriendMode={this.state.addFriendMode}/>
          </div>
          <div className='Messenger-section-profile'>
            <UserProfile setRoute={setRoute} user={userProfile} addFriendMode={this.state.addFriendMode} requestsMode={this.state.requestsMode} requests={user.requests} onFriendRequest={this.onFriendRequest}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);