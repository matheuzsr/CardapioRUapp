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
  background-color: ${COLORS.GREEN};
`;

export const Bar = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${COLORS.WHITE};
  /* background-color: #ccc; */
`;

export const TitleContainer = styled.View`
  flex: 6;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleText = styled.Text`
  font-family: 'sourcesanspro-black';
  font-size: 26px;
  color: ${COLORS.BLACK};
`;

export const ActionsContainer = styled.View`
  flex: 1;
`;
