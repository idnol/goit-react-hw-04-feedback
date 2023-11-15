import React, { Component } from "react";
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

export class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = opt => {
    this.setState((state, props) => ({
      [opt]: state[opt] + props.step,
    }));

  }
  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return good > 0 ? Math.floor((good * 100) / total) : 0;
  };


  render() {
    return (
      <div>
        <Section
          title="Please leave feedback"
          children={<FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />}
        />

        <Section
          title="Statistic"
          children={<Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={this.countTotalFeedback}
            percent={this.countPositiveFeedbackPercentage}
          />}
        />

      </div>
    );
  }
}
