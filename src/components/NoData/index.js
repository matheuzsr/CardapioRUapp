import React from 'react';

import { Container, Message } from './styles';

export default function NoData({ text }) {
  return (
    <Container>
      <Message>{text}</Message>
    </Container>
  );
}
