import React from 'react';
import { nanoid } from 'nanoid';

export const Statistics = ({ feedbackTypes, total, positivePercentage }) => {
  return (
    <>
      {Object.entries(feedbackTypes).map(feedbackType => (
        <p key={nanoid()}>
          {feedbackType[0]}: {feedbackType[1]}
        </p>
      ))}
      <p>Total: {total}</p>
      <p>Positive feesdback: {`${positivePercentage}%`}</p>
    </>
  );
};
