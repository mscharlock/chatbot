import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux';
import createStore from './lib/create-store';

let store = createStore();

class OverallContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDom.render(<OverallContainer/>, document.getElementById('root'));
