import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const pad = Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : '0';
const margin =
  Platform.OS === 'android' ? `${Constants.statusBarHeight}px` : '0';

import { COLORS } from '~/constants';

export const Container = styled.View`
  margin-top: ${margin};
  padding-top: ${pad};
  background-color: ${COLORS.BLUE};
`;

export const Bar = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.WHITE};
`;

export const TitleContainer = styled.View`
  flex: 6;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;

export const TitleText = styled.Text`
  font-family: 'sourcesanspro-black';
  font-size: 26px;
  color: ${COLORS.BLUE_DARK};
`;

export const ActionsContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Actions = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
`;
