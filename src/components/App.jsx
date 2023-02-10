import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Section';

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
    // console.log(this.countPositiveFeedbackPercentage());

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
        {/* <Feedback state={state}>
        </Feedback> */}

        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
