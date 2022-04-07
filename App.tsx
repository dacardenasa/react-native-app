import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {DrawerNavigatorLateral} from '@navigator/DrawerNavigatorLateral';
import {AppState} from '@appState/appState';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigatorLateral />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
