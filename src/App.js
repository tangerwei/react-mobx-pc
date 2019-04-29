import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import createHashHistory from 'history/createHashHistory';
import store from './controller';
import Router from './routes';

const historyConfig = createHashHistory();

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Router history={historyConfig} />
      </Provider>
    );
  }
}

export default App;
