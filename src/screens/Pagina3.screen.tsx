import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Button} from 'react-native';
import {styles} from '@theme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <View style={{marginBottom: 8}} />
      <Button title="Ir al inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};
