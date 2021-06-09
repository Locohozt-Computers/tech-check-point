import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SignInPage from 'pages/Signin';
import SignUpPage from 'pages/Signup';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignInPage} />
        <Route exact path='/auth/signin' component={SignInPage} />
        <Route exact path='/auth/signup' component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
