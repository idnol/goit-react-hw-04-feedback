import React from 'react';
import { Notification } from '../Notification/Notification';
import { List } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, percent}) => {
  if (total(good, neutral, bad) === 0) {
    return <Notification message="There is no feedback" />
  }
  return <List>
      <li>Good:<span>{good}</span></li>
      <li>Neutral:<span>{neutral}</span></li>
      <li>Bad:<span>{bad}</span></li>
      <li>Total:<span>{total(good, neutral, bad)}</span></li>
      <li>Positive Feedback:<span>{percent(good, total(good, neutral, bad))}%</span></li>
    </List>
};
