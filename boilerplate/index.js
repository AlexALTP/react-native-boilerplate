import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/Reducers';
import RootNavigator from './src/Navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
