import React from 'react';

class PullRequestStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: {} };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(status => this.setState({ status }));
  }

  render() {
    const {
      status: { merged, state }
    } = this.state;

    return ( 
      state === undefined 
        ? ""
        : <span className={state === "closed" ? (merged ? "merged" : "closed") : "open"} />
    );
  }
}

export default PullRequestStatus;
