import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const TitleText = styled.Text`
  font-family: 'sourcesanspro-semibold';
  font-size: 18px;
`;

export const Action = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: ${({ onPressTextColor }) => onPressTextColor};
  font-family: 'sourcesanspro-regular';
`;

export const ActionIcon = styled(Entypo).attrs({
  name: 'chevron-small-right',
  size: 25,
})`
  margin-top: 3px;
`;
