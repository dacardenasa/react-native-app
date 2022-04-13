import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '@context/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores, styles} from '@theme/index';

export const AlbumsScreen = () => {
  const {
    signOut,
    signIn,
    authState: {isLogeddin},
  } = useContext(AuthContext);
  return (
    <View style={styles.albumsBox}>
      <TouchableOpacity
        onPress={isLogeddin ? signOut : signIn}
        style={styles.albumsBox__Button}>
        <Icon
          name={isLogeddin ? 'log-out-outline' : 'log-in-outline'}
          size={40}
          color={colores.primary}
        />
        <Text>{isLogeddin ? 'Signout' : 'Signin'}</Text>
      </TouchableOpacity>
    </View>
  );
};
