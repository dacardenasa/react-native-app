import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, View, Text} from 'react-native';

import {styles} from './settingButtonTheme';

interface button {
  path: string;
  title: string;
  handleClick: () => void;
}

export const SettingButton = ({path, handleClick, title}: button) => (
  <View style={styles.buttonBox}>
    <TouchableOpacity onPress={handleClick}>
      <Image
        source={{
          uri: path,
        }}
        style={styles.avatar}
      />
    </TouchableOpacity>
    <Text style={styles.buttonTitle}>{title}</Text>
  </View>
);
