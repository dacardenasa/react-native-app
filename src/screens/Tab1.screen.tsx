import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '@theme/index';
import {TouchableIcon} from '@components/index';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="git-pull-request-outline" />
        <TouchableIcon iconName="planet-outline" />
        <TouchableIcon iconName="qr-code-outline" />
      </Text>
    </View>
  );
};
