import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_PATH || 'http://localhost:4000',
});

const history = createBrowserHistory();

const Log = client => {
  console.log(client);
  return <div>Client</div>
};

const App = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <Log client={client} />} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
