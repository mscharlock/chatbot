import React from 'react';
import NavBar from './lib/nav-bar/index';

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home">
        <NavBar/>
        <h2>Dummy text for home</h2>
      </div>
    );
  }
}

export default HomeContainer;
