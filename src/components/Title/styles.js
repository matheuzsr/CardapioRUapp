import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  align-items: stretch;
  justify-content: space-between;
  padding: 10px 0;
`;

export const TitleText = styled.Text`
  font-family: 'sourcesanspro-bold';
  color: ${COLORS.GRAY};
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 8px;
`;

export const Bar = styled.View`
  height: 3px;
  background-color: ${COLORS.GREEN};
  margin: 0 30px;
`;
