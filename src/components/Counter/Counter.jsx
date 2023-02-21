import React from 'react';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistic';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => {
      switch (event.target.textContent) {
        case 'Good':
          return {
            good: prevState.good + 1,
          };
        case 'Neutral':
          return {
            neutral: prevState.neutral + 1,
          };
        case 'Bad':
          return {
            bad: prevState.bad + 1,
          };
        default:
          return;
      }
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return '0%';
    } else {
      const value = Math.round(
        this.state.good / (this.countTotalFeedback() / 100)
      );
      return `${value}%`;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.addFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default Counter;
