import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { COLORS } from '~/constants';

import {
  Container,
  Bar,
  ActionsContainer,
  Actions,
  TitleContainer,
  TitleText,
  NotificationsAction,
  NotificationsIcon,
  SearchContainer,
  SearchField,
  MapAction,
  MapIcon,
} from './styles';

export default function Header({ type, isSearch, isBack, title, navigation }) {
  return (
    <Container type={type}>
      <Bar type={type}>
        {isBack ? (
          <ActionsContainer>
            <Actions onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-arrow-back"
                size={30}
                color={COLORS.BLUE_DARKER}
              />
            </Actions>
          </ActionsContainer>
        ) : (
          <NotificationsAction
            onPress={() => navigation.navigate('Notifications')}
          >
            <NotificationsIcon />
          </NotificationsAction>
        )}
        {title && (
          <TitleContainer>
            <TitleText type={type}>{title}</TitleText>
          </TitleContainer>
        )}
        {isSearch && (
          <SearchContainer>
            <SearchField placeholder="Buscar Locais" />
          </SearchContainer>
        )}
        {isBack ? (
          <ActionsContainer />
        ) : (
          <MapAction>
            <MapIcon />
          </MapAction>
        )}
      </Bar>
    </Container>
  );
}

Header.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: null,
  description: null,
};
