import React from 'react';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
    <nav>
      <ul>
        <li>Talk to Chatbot</li>
        <li>About Us</li>
      </ul>
    </nav>
    );
  }
}

export default NavBar;
