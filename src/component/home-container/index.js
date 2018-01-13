import React from 'react';
import NavBar from './lib/nav-bar/index';
import ChatBox from '../chat-box';

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar/>
        <h2>Dummy text for home</h2>
        <Chatbox/>
      </div>
    );
  }
}

export default HomeContainer;
