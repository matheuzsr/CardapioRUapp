import React from 'react';
import PropTypes from 'prop-types';

import { Container, TitleText, Bar } from './styles';

export default function Title({ title }) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <Bar />
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  // title: '',
};
