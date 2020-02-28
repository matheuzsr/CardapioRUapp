import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { api } from '~/services';
import { COLORS } from '~/constants';

import ContainerPage from '~/components/ContainerPage';
import Header from '~/components/Header';
import Title from '~/components/Title';
import Button from '~/components/Button';

import { Container, Restaurants } from './styles';

export default function Home({ navigation }) {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getRestaurants() {
    const restaurants = await api.get('/menu');
    setRestaurantsList(restaurants.data);
  }

  useEffect(() => {
    setLoading(true);
    getRestaurants().then(() => setLoading(false));
  }, []);

  renderData = () => (
    <Restaurants
      data={restaurantsList}
      keyExtractor={restaurant => String(restaurant._id)}
      renderItem={({ item }) => (
        <Button
          onPressFn={() =>
            navigation.navigate('MenuDetails', {
              restaurant_name: item.title,
              date: item.date,
              id: item._id,
            })
          }
          onPressTextFn={item.title}
          isBordered={item.title.includes('(Jerônimo Monteiro)')}
        />
      )}
    />
  );

  renderList = () =>
    restaurants.length ? (
      renderData()
    ) : (
      <NoData text="Nenhuma informação encontrada" />
    );

  return (
    <ContainerPage>
      <Container>
        <Title title="Selecione a refeição desejada abaixo!" />
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator size="large" color={COLORS.RED} />
          </View>
        ) : (
          renderData()
        )}
      </Container>
    </ContainerPage>
  );
}

Home.navigationOptions = props => ({
  header: <Header {...props} title="Cardápio" />,
});
