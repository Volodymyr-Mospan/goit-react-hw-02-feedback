import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <b>Please leave feedback</b>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>

        <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bab}</p>
      </>
    );
  }
}
