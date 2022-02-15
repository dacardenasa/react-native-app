import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {DrawerNavigatorLateral} from './src/navigator/DrawerNavigatorLateral';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigatorLateral />
    </NavigationContainer>
  );
};

export default App;
