import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from '../../Components/FriendsList/FriendsList';
import ChatScreen from '../../Components/ChatScreen/ChatScreen';
import UserProfile from '../../Components/UserProfile/UserProfile';
import './Messenger.css';

import { setUser, setConnectedUser, loadMessages, clearMessages } from '../../Actions/actions/textingActions';
import { setUserFriends, setUserRequests } from '../../Actions/actions/userActions';
import { setFriendsSearch, setInputUsers, setUserProfile, setUserMessage } from '../../Actions/actions/inputActions';

import Chatkit from '@pusher/chatkit-client';

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
    loadMessages: (messages) => dispatch(loadMessages(messages)),
    clearMessages: () => dispatch(clearMessages()),
    setConnectedUser: (user) => dispatch(setConnectedUser(user)),
    setUserFriends: (friends) => dispatch(setUserFriends(friends)),
    setUserRequests: (requests) => dispatch(setUserRequests(requests)),
    setUserMessage: (message) => dispatch(setUserMessage(message))
  };
};

class Messenger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requestsMode: false,
      addFriendMode: false,
      curRoomId: ''
    }
  }

  onUserClick = (user) => {
    if(this.state.addFriendMode) {
      this.props.setUserProfile(user);
    }
    else {
      if(Object.entries(this.props.texting.user).length !== 0) {
        if(this.state.curRoomId !== user.roomId) {
          this.setState({curRoomId: user.roomId})
          this.props.clearMessages();
          this.props.setTextingUser(user)
          this.props.texting.user.subscribeToRoomMultipart({
            roomId: user.roomId,
            messageLimit: 10,
            hooks: {
              onMessage: message => {
                this.props.loadMessages(message);
              }
            }
          })
          .catch(err => console.log(err))
        }
      }
    }
  }

  onSendMessage = () => {
    if(this.props.input.message !== '') {
      this.props.texting.user.sendSimpleMessage({
        roomId: this.props.texting.roomId,
        text: this.props.input.message,
      })
      document.getElementById('ChatScreen-main-sending-input').value = '';
      this.props.setUserMessage('');
    }
  }

  onFriendRequest = (user) => {
    fetch(process.env.REACT_APP_SERVER_URL + '/sendRequest', {
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

  onAcceptRequest = (user) => {
    fetch(process.env.REACT_APP_SERVER_URL + '/acceptRequest', {
      method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.props.user._id,
          name: this.props.user.name,
          user: {
            id: user._id,
            name: user.name
          }
        })
    })
    .then(response => response.json())
    .then(({ friends, requests }) => {
      this.props.setUserFriends(friends);
      this.props.setInputUsers(friends);
      this.props.setUserRequests(requests);
    })
  }

  toggleAddFriendMode = () => {
    if(!this.state.addFriendMode) {
      fetch(process.env.REACT_APP_SERVER_URL + '/users', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.props.user.email
        })
      })
      .then(response => response.json())
      .then(users => {
        if(users.length !== 0) {
          this.setState({addFriendMode: true});
          this.props.setInputUsers(users)
          this.props.setUserProfile(users[0]);
        }
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

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: '',
      userId: this.props.user._id,
      tokenProvider: new Chatkit.TokenProvider({
        url: process.env.REACT_APP_SERVER_URL + '/authenticate',
      }),
    })
    chatManager.connect()
    .then(user => {
      this.props.setConnectedUser(user);
    })
    .catch(err => {
      console.error("error:", err);
    })
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
            <ChatScreen textingUser={textingUser} addFriendMode={this.state.addFriendMode} setUserMessage={this.props.setUserMessage} onSendMessage={this.onSendMessage}/>
          </div>
          <div className='Messenger-section-profile'>
            <UserProfile 
              setRoute={setRoute}
              user={userProfile}
              addFriendMode={this.state.addFriendMode}
              requestsMode={this.state.requestsMode}
              requests={user.requests}
              onFriendRequest={this.onFriendRequest}
              onAcceptRequest={this.onAcceptRequest}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);