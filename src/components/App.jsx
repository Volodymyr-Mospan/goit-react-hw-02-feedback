import React, { Component } from 'react';
import {
  FeedbackOptions,
  Statistics,
  Section,
  Notification,
} from 'components/Feedback';
// import Statistics from './Feedback/Statistics';
// import Section from './Feedback/Section';
// import Notification from './Feedback/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const { state } = this;
    const feedbackType = e.target.name;

    this.setState(() => ({
      [feedbackType]: state[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const feedbackPercentage = (100 / this.countTotalFeedback()) * good;
    return Math.round(feedbackPercentage) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div
        style={{
          height: '100vh',
          padding: '60px',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          textAlign: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
