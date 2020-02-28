import React from 'react';
import PropTypes from 'prop-types';

import { Container, TitleText, DateText, Bar } from './styles';

export default function Title({ title, date, isFull }) {
  return (
    <Container>
      <TitleText isFull={isFull}>{title}</TitleText>
      <Bar isFull={isFull} />
      {isFull && <DateText isFull={isFull}>{date}</DateText>}
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  // title: '',
};
