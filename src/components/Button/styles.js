import styled, { css } from 'styled-components/native';

import { COLORS } from '~/constants';

const bordered = css`
  background-color: transparent;
  border: 2px solid ${COLORS.BLUE};
`;

const noBg = css`
  background-color: transparent;
  border: 2px solid transparent;
  margin: 0;
`;

const loading = css`
  padding: 12px;
`;

export const Container = styled.View`
  width: 100%;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : COLORS.BLUE)};
  border-radius: 20px;
  border: 2px solid ${({ bgColor }) => (bgColor ? bgColor : COLORS.BLUE)};
  margin: 10px 0;
  padding: 8px;
  ${({ isBordered }) => isBordered && bordered}
  ${({ isLoading }) => isLoading && loading}
  ${({ noBackground }) => noBackground && noBg}
`;

export const Text = styled.Text`
  color: ${({ isBordered, noBackground }) =>
    isBordered || noBackground ? COLORS.BLUE : COLORS.WHITE};
  text-align: center;
  font-size: 20px;
  font-family: sourcesanspro-bold;
`;
