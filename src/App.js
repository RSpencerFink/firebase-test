import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Login, Register } from 'pages';
import Header from 'components/includes/header';
import ContextProvider from 'provider/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;
