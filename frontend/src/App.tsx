import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SignInPage from 'pages/Signin';
import SignUpPage from 'pages/Signup';
import axios from 'axios';
import ForgotPassword from 'components/Auth/ForgotPassword';

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignInPage} />
        <Route exact path='/auth/signin' component={SignInPage} />
        <Route exact path='/auth/signup' component={SignUpPage} />
        <Route exact path='/auth/resetpassword' component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
