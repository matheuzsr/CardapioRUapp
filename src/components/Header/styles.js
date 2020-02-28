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
  margin-top: ${({ type }) => (type === 'page' ? margin : 0)};
  padding-top: ${({ type }) => (type === 'page' ? pad : 0)};
  background-color: ${COLORS.GREEN};
`;

export const Bar = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
`;

export const TitleContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${COLORS.GREEN};
`;

export const ActionsContainer = styled.View`
  flex: 1;
`;

export const Actions = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 2px;
`;

export const ActionsText = styled(TitleText)`
  font-size: 10px;
  margin-right: 5px;
`;

export const SearchContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREEN};
  margin: 0 10px;
`;
export const SearchField = styled.TextInput`
  padding: 10px;
  text-align: center;
`;

export const NotificationsAction = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${COLORS.GREEN};
  padding: 6px;
`;

export const NotificationsIcon = styled(MaterialIcons).attrs({
  name: 'notifications',
  size: 25,
  color: COLORS.GREEN,
})``;

export const MapAction = styled(NotificationsAction)`
  background-color: ${COLORS.GREEN};
`;

export const MapIcon = styled(FontAwesome5).attrs({
  name: 'coins',
  size: 22,
  color: COLORS.GREEN,
})``;
