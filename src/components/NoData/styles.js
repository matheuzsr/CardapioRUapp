import styled from 'styled-components/native';
import { COLORS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${COLORS.BLUE_DARK};
  font-weight: bold;
  font-size: 20px;
`;
