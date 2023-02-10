import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" name="good" onClick={e => onLeaveFeedback(e)}>
        Good
      </button>

      <button type="button" name="neutral" onClick={e => onLeaveFeedback(e)}>
        Neutral
      </button>

      <button type="button" name="bad" onClick={e => onLeaveFeedback(e)}>
        Bad
      </button>
    </div>
  );
};
