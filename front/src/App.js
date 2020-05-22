import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import About from './pages/About';
import AccountSettings from './pages/AccountSettings';
import Board from './pages/Board';
import CreateBoard from './pages/CreateBoard';
import ErrorReport from './pages/ErrorReport';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Terms from './pages/Terms';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/about' component={About}/>
                <Route path='/account-settings' component={AccountSettings}/>
                <Route path='/board' component={Board}/>
                <Route path='/create-board' component={CreateBoard}/>
                <Route path='/error-report' component={ErrorReport}/>
                <Route path='/forgot-password' component={ForgotPassword}/>
                <Route path='/home' component={Home}/>
                <Route path='/sing-up' component={SignUp}/>
                <Route path='/terms' component={Terms}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
