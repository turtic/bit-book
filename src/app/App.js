import React, { Component } from 'react';
import './App.css';
import FeedPage from './FeedPage/FeedPage';
import NavHeader from './partials/NavHeader'
import ProfilePage from './ProfilePage/ProfilePage'
import PeoplePage from './PeoplePage/PeoplePage'
import Footer from './partials/Footer'
import { Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './PostDetails/PostDetails';
import LoginPage from './LoginPage/LoginPage';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: sessionStorage.getItem('sessionId'),
    }
  }

  onLogin = () => {
    this.setState({loggedIn: sessionStorage.getItem('sessionId')});
  }
  
  onLogout = () => {
    sessionStorage.clear();
    this.setState({loggedIn: sessionStorage.getItem('sessionId')});
  }

  render() {
    return (
      <React.Fragment>
        <NavHeader onLogout={this.onLogout}/>
          {!this.state.loggedIn ?
          <Switch>
            <Route exact path='/login' render={() => <LoginPage onLogin={this.onLogin}/>} />
            <Redirect from='/' to='/login' />
          </Switch> : 
          <Switch>
            <Route path='/feed' component={FeedPage} />
            <Route exact path='/people' component={PeoplePage} />
            <Redirect from={`/people/${sessionStorage.getItem('userId')}`} to='/profile' />
            <Route path='/people/:id' component={ProfilePage} />
            <Route path='/:type/:id' component={PostDetails} />
            <Route exact path='/profile' component={ProfilePage} />
            <Redirect from='/' to='/feed' />
          </Switch> }
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;

