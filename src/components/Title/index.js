import React from 'react';
import PropTypes from 'prop-types';

import { Container, TitleText, Action, ActionText, ActionIcon } from './styles';

export default function Title({
  title,
  onPressFn,
  onPressText,
  onPressTextColor,
}) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      {onPressFn && (
        <Action onPress={onPressFn}>
          <ActionText onPressTextColor={onPressTextColor}>
            {onPressText}
          </ActionText>
          <ActionIcon color={onPressTextColor} />
        </Action>
      )}
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onPressFn: PropTypes.func,
  onPressText: PropTypes.string,
  onPressTextColor: PropTypes.string,
};

Title.defaultProps = {
  // title: '',
};
