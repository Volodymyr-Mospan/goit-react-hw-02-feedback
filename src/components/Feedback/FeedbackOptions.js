import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={e => onLeaveFeedback(e)}
          style={{ textTransform: 'capitalize' }}
        >
          {option}
        </button>
      ))}
    </>
  );
};
