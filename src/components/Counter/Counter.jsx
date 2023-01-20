import React from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Statistics from '../Statistic/Statistics';

class Counter extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
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
      return 100;
    } else {
      return Math.round(this.state.good / (this.countTotalFeedback() / 100));
    }
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.addFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default Counter;
