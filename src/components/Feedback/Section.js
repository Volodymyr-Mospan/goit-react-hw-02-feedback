import React from 'react';
import scss from 'components/Feedback/Feedback.module.scss';

export const Section = ({ title, children }) => {
  return (
    <section className={scss.section}>
      <h2 className={scss.section__title}>{title}</h2>
      {children}
    </section>
  );
};
