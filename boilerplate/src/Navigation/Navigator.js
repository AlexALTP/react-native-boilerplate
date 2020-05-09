import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ROUTES from './rooter';
import HomeScreen from '../Containers/HomeScreen';

const Stack = createStackNavigator();
const Menu = createBottomTabNavigator();

const MainMenuNavigator = () => {
  return (
    <Menu.Navigator>
      <Menu.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
    </Menu.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.MAIN_MENU_NAVIGATOR}
        component={MainMenuNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
