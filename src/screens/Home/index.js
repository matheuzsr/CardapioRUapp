import React from 'react';

import ContainerPage from '~/components/ContainerPage';
import Header from '~/components/Header';

import { Container } from './styles';

export default function Home() {
  return (
    <ContainerPage>
      <Container></Container>
    </ContainerPage>
  );
}

Home.navigationOptions = props => ({
  header: <Header {...props} type="page" isSearch />,
});
