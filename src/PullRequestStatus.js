import React from 'react';
import { connect } from 'react-redux';
import { getStatus } from './store/actions';

class PullRequestStatus extends React.Component {
  componentDidMount() {
    this.props.getStatus(this.props.url);
  }
  render() {
    if (this.props.status === undefined) {
      return "";
    }

    const {
      status: { merged, state }
    } = this.props;

    return (
      <span
        className={state === "closed" ? (merged ? "merged" : "closed") : "open"}
      />
    );
  }
}

const mapStateToProps = state => ({
  status: state.status
});

const mapDispatchToProps = {
  getStatus
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PullRequestStatus);
