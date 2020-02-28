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
} from './styles';

export default function Header({ isBack, title, navigation }) {
  return (
    <Container>
      <Bar>
        {isBack ? (
          <ActionsContainer>
            <Actions onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-arrow-back"
                size={30}
                color={COLORS.BLUE_DARK}
                style={{ marginTop: 3 }}
              />
            </Actions>
          </ActionsContainer>
        ) : (
          <ActionsContainer />
        )}
        {title && (
          <TitleContainer>
            <TitleText>{title}</TitleText>
          </TitleContainer>
        )}
        <ActionsContainer />
      </Bar>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: null,
};
