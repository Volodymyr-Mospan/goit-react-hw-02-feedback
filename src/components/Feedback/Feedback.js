import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 30,
  };

  addFeedbackStatus = e => {
    const targetName = e.target.name;
    console.log(this.state[targetName]);
    //   this.setState(() => {
    //       this.state[targetName];
    //   })
  };

  render() {
    return (
      <>
        <b>Please leave feedback</b>

        <div>
          <button
            type="button"
            name="good"
            onClick={e => this.addFeedbackStatus(e)}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            onClick={e => this.addFeedbackStatus(e)}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            onClick={e => this.addFeedbackStatus(e)}
          >
            Bad
          </button>
        </div>

        <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bab}</p>
      </>
    );
  }
}
