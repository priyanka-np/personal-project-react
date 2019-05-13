import React from 'react';
import Login from './Login';
import Profile from './Profile';

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      username: "",
      profile: {},
      error: '',
      forkEvents: [],
      pullRequestEvents: []
    };
  }

  getEventsByType = (events, eventType) => {
    // Filter out the events that has event type same as the parameter
    return events.filter(singleEvent => singleEvent.type === eventType);
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin = () => {
    if(this.state.username) {
      fetch(`https://api.github.com/users/${this.state.username}`)
        .then(res => res.json())
        .then(data => {
          this.setState({ profile: data, loggedIn: true })
        })
        .catch(err => this.setState({ error: err.message }));
    } else {
      this.setState({
        error: 'please enter the username'
      });
    }
  }

  handleLogOut = () => {
    this.setState({ loggedIn: false, profile: {} });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.state.loggedIn) {
      if (this.state.loggedIn) {
        fetch(`https://api.github.com/users/${this.state.username}/events`)
          .then(res => res.json())
          .then(data => {
            const forkEvents = this.getEventsByType(data, 'ForkEvent');
            const pullRequestEvents = this.getEventsByType(data, 'PullRequestEvent');
            this.setState({ forkEvents, pullRequestEvents })
          })
          .catch(err => this.setState({ error: err.message }));
      }
    }
  }

  render() {
    const { name, forkEvents, pullRequestEvents } = this.state;

    return (
      <main className="App">
        {this.state.loggedIn ? (
          <Profile
            {...this.state.profile}
            handleLogOut={this.handleLogOut}
            forkEvents={this.state.forkEvents}
            pullRequestEvents={this.state.pullRequestEvents}
          />
        ) : (
          <Login
            handleInputChange={this.handleInputChange}
            handleLogin={this.handleLogin}
            username={this.state.username}
            error={this.state.error}
          />
        )}
      </main>
    );
  }
}

export default App;
