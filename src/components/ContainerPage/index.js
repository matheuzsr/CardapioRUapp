import React from 'react';

import { Container } from './styles';

export default function ContainerPage({ children, pad }) {
  return <Container pad={pad}>{children}</Container>;
}
