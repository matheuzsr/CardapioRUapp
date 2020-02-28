import React, { useEffect, useState } from 'react';

import { api } from '~/services';

import ContainerPage from '~/components/ContainerPage';
import Header from '~/components/Header';
import Title from '~/components/Title';
import Button from '~/components/Button';

import { Container, Restaurants } from './styles';

export default function Home() {
  const [restaurantsList, setRestaurantsList] = useState([]);

  async function getRestaurants() {
    const restaurants = await api.get('/menu');
    setRestaurantsList(restaurants.data);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <ContainerPage>
      <Container>
        <Title title="Selecione a refeição desejada abaixo!" />
        <Restaurants
          data={restaurantsList}
          keyExtractor={restaurant => String(restaurant._id)}
          renderItem={({ item }) => (
            <Button
              onPressFn={() => {}}
              onPressTextFn={item.title}
              isBordered={item.title.includes('(Jerônimo Monteiro)')}
            />
          )}
        />
      </Container>
    </ContainerPage>
  );
}

Home.navigationOptions = props => ({
  header: <Header {...props} title="Cardápio" />,
});
