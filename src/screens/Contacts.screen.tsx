import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles, colores} from '@theme/index';
import {AuthContext} from '@context/index';
import Icon from 'react-native-vector-icons/Ionicons';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.iconName && (
        <Icon name={authState.iconName} size={80} color={colores.primary} />
      )}
      {!authState.isLogeddin && <Button title="singIn" onPress={signIn} />}
    </View>
  );
};
