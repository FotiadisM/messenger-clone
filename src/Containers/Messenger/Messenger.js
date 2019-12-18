import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../../Components/UserList/UserList';
import './Messenger.css';

import { setID, setName, setStatus } from '../../Actions/actions/userActions';

const frnames = [
  {
    name: "Fotiadis Michail"
  },
  {
    name: "Tatas Michail"
  },
  {
    name: "Dalianis Ioannis"
  },
  {
    name: "Mister Jonson"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  },
  {
    name: "Skordopsoma"
  }
]

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setID: (id) => dispatch(setID(id)),
    setName: (name) => dispatch(setName(name)),
    setStatus: (status) => dispatch(setStatus(status))
  };
};

class Messenger extends Component {

  render() {
    const { setRoute } = this.props;
    const { name, status } = this.props.user;

    return (
      <div className='Messenger'>
        <div className='Messenger-nav'>
            <div className='Messenger-nav-logo'></div>
            <h1 className='Messenger-nav-logo-text'>messenger</h1>
        </div>
        <div className='Messenger-section'>
          <div className='Messenger-section-friendsList'>
            <div className='Messenger-section-friendsList-gray'>
              <input className='Messenger-section-friendsList-gray-input' type='text' placeholder='Search for people'/>
            </div>
            <div className='Messenger-section-friendsList-list'>
              <UserList users={frnames}/>
            </div>
          </div>
          <div className='Messenger-section-message'>
            {/* MESSAGING HERE */}
          </div>
          <div className='Messenger-section-profile'>
            <div className='Messenger-section-profile-picture'></div>
            <div className='Messenger-section-profile-status'>{status}</div>
            <div className='Messenger-section-profile-name'>{name}</div>
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