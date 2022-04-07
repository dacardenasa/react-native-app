import React from 'react';
import {Platform} from 'react-native';
import {platforms} from '@constants/Platforms';
import {TabsAndroid} from './TabsAndroid';
import {TabsIOS} from './TabsIOS';

export const Tabs = () => {
  return Platform.OS === platforms.ios ? <TabsIOS /> : <TabsAndroid />;
};
