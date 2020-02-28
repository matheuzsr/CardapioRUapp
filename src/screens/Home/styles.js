import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  justify-content: flex-start;
  align-items: center;
  padding: 40px 20px;
`;

export const Restaurants = styled.FlatList`
  width: 100%;
  padding: 0 20px;
  margin-top: 50px;
`;
