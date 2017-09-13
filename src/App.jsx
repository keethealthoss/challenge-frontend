import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import logo from './logo.svg';
import './App.css';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080',
});

const client = new ApolloClient({
  networkInterface,
  connectToDevTools: true,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
