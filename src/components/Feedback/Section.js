import React from 'react';
import PropTypes from 'prop-types';
import scss from 'components/Feedback/Feedback.module.scss';

export const Section = ({ title, children }) => {
  return (
    <section className={scss.section}>
      <h2 className={scss.section__title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
