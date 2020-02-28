import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  justify-content: flex-start;
  /* align-items: center; */
  padding: 40px 20px;
`;

export const MenuContainer = styled.View``;

export const MenuItens = styled.Text`
  font-family: 'sourcesanspro-regular';
  font-size: 20px;
  text-align: left;
`;
