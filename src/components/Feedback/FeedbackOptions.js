import React from 'react';
import scss from 'components/Feedback/Feedback.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={scss.btn}
          key={option}
          type="button"
          name={option}
          onClick={e => onLeaveFeedback(e)}
          style={{ textTransform: 'capitalize' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
