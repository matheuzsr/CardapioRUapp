import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { api } from '~/services';
import { COLORS } from '~/constants';

import Header from '~/components/Header';
import Title from '~/components/Title';

import { Container, MenuContainer, MenuItens } from './styles';

export default function MenuDetails({ navigation }) {
  const { getParam } = navigation;
  const [restaurant, setRestaurantsList] = useState({});
  const [loading, setLoading] = useState(false);

  async function getRestaurantDetails() {
    const restaurants = await api.get(`/menu/${getParam('id')}`);
    return setRestaurantsList(restaurants.data);
  }

  useEffect(() => {
    setLoading(true);
    getRestaurantDetails().then(() => setLoading(false));
  }, []);

  renderData = () => (
    <>
      <Title
        title={getParam('restaurant_name')}
        date={getParam('date')}
        isFull
      />
      <MenuContainer>
        <MenuItens>{restaurant.menuJoin}</MenuItens>
      </MenuContainer>
    </>
  );

  renderList = () =>
    restaurant.length ? (
      renderData()
    ) : (
      <NoData text="Nenhuma informação encontrada" />
    );

  return (
    <Container>
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
  );
}

MenuDetails.navigationOptions = props => ({
  header: <Header {...props} title="Cardápio" isBack />,
});
