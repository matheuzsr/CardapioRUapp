import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/screens/Home';
import MenuDetails from '~/screens/MenuDetails';

const createRootNavigator = () =>
  createAppContainer(
    createStackNavigator({
      Home,
      MenuDetails,
    })
  );

export default createRootNavigator;
