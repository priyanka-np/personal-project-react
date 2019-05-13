import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import { login, logout, setUsername, handleError, getEvents } from './store/actions';

import './App.css';

class App extends React.Component {

  handleInputChange = (e) => {
    this.props.setUsername(e);
  }

  getEventsByType = (events, eventType) => {
    // Filter out the events that has event type same as the parameter
    return events.filter(singleEvent => singleEvent.type === eventType);
  };

  handleLogin = () => {
    this.props.login(this.props.username)
    if(this.props.username) {
      this.props.getEvents(this.props.username)
    }
  }

  handleLogOut = () => {
    this.props.logout();
  }

  render() {
    const { username, loggedIn, profile, error, events } = this.props;
    const forkEvents = this.getEventsByType(events, 'ForkEvent');
    const pullRequestEvents = this.getEventsByType(events, 'PullRequestEvent');

    return (
      <main className="App">
        {loggedIn ? (
          <Profile
            {...profile}
            handleLogOut={this.handleLogOut}
            forkEvents={forkEvents}
            pullRequestEvents={pullRequestEvents}
          />
        ) : (
          <Login
            handleInputChange={this.handleInputChange}
            handleLogin={this.handleLogin}
            username={username}
            error={error}
          />
        )}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  username: state.username,
  profile: state.profile,
  error: state.error,
  events: state.events
});

const mapDispatchToProps = {
  setUsername,
  login,
  handleError,
  logout,
  getEvents
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
