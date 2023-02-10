import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackStatus = e => {
    const { state } = this;
    const feedbackStatus = e.target.name;

    this.setState(() => ({
      [feedbackStatus]: state[feedbackStatus] + 1,
    }));
  };

  countTotalFeedback() {
    const { state } = this;

    return state.good + state.neutral + state.bad;
  }

  countPositiveFeedbackPercentage() {
    const { state } = this;

    return Math.round((100 / this.countTotalFeedback()) * state.good) || 0;
  }

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
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>
          Positive feesdback: {`${this.countPositiveFeedbackPercentage()}%`}
        </p>
      </>
    );
  }
}