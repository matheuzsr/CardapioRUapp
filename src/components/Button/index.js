import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { COLORS } from '~/constants';

import { Container, ButtonContainer, ButtonNoBackground, Text } from './styles';

export default function Button({
  onPressFn,
  onPressTextFn,
  isLoading,
  isBordered,
  noBackground,
  bgColor,
}) {
  return (
    <Container>
      <ButtonContainer
        onPress={onPressFn}
        isLoading={isLoading}
        isBordered={isBordered}
        noBackground={noBackground}
        bgColor={bgColor}
      >
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={isBordered || noBackground ? COLORS.BLUE : COLORS.WHITE}
          />
        ) : (
          <Text isBordered={isBordered} noBackground={noBackground}>
            {onPressTextFn}
          </Text>
        )}
      </ButtonContainer>
    </Container>
  );
}

Button.propTypes = {
  onPressFn: PropTypes.func.isRequired,
  onPressTextFn: PropTypes.string.isRequired,
  isBordered: PropTypes.bool,
  isLoading: PropTypes.bool,
  noBackground: PropTypes.bool,
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  isBordered: false,
  isLoading: false,
  noBackground: false,
  bgColor: '',
};
