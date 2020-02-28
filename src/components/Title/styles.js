import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  align-items: stretch;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
`;

export const TitleText = styled.Text`
  font-family: 'sourcesanspro-bold';
  color: ${COLORS.GRAY};
  font-size: ${({ isFull }) => (isFull ? '25px' : '30px')};
  line-height: 30px;
  text-align: ${({ isFull }) => (isFull ? 'left' : 'center')};
  margin-bottom: 8px;
`;

export const DateText = styled(TitleText)`
  text-align: center;
  font-family: 'sourcesanspro-regular';
  font-size: 20px;
  margin-top: 5px;
`;

export const Bar = styled.View`
  height: 3px;
  background-color: ${COLORS.BLUE_DARK};
  margin: ${({ isFull }) => (isFull ? '0' : '0 30px')};
`;
