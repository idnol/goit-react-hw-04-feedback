import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

export const FeedbackCounter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = opt => {
    switch (opt) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    return good > 0 ? Math.floor((good * 100) / total) : 0;
  };

  return (
    <div>
      <Section
        title="Please leave feedback"
        children={<FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />}
      />

      <Section
        title="Statistic"
        children={<Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback}
          percent={countPositiveFeedbackPercentage}
        />}
      />

    </div>
  );

}
