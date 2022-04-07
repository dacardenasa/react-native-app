import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '@theme/index';
import {AuthContext} from '@context/index';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {!authState.isLogeddin && <Button title="singIn" onPress={signIn} />}
    </View>
  );
};
