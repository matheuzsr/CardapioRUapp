import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { COLORS } from '~/constants';

const padding = Platform.OS === 'android' ? 24 : 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.WHITE};
  padding-top: ${({ pad }) => (pad ? padding : 0)};
`;
