import React from 'react';
import { nanoid } from 'nanoid';
import scss from 'components/Feedback/Feedback.module.scss';

export const Statistics = ({ feedbackTypes, total, positivePercentage }) => {
  return (
    <div className={scss.section__statistics}>
      {Object.entries(feedbackTypes).map(feedbackType => (
        <p key={nanoid()}>
          {feedbackType[0]}: {feedbackType[1]}
        </p>
      ))}
      <p>Total: {total}</p>
      <p
        style={{
          color: getColor(positivePercentage / 100),
          textShadow: '0px 0px 3px black',
        }}
      >
        Positive feesdback: {`${positivePercentage}%`}
      </p>
    </div>
  );
};

function getColor(value) {
  const hue = ((0 + value) * 120).toString(10);
  return `hsl(${hue},100%,50%)`;
}
