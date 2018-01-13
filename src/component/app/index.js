import React from 'react';
import NavBar from '../nav-bar';
import HomeContainer from '../home-container';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <HomeContainer/>
      </div>
    );
  }
}

export default App;
