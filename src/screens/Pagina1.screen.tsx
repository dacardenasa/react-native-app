/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/globalTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

/* Using Props to get Navigation function */
interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text>Navegar con argumentos</Text>
      <View style={styles.buttonsBox}>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#5856D6'}}
          onPress={() =>
            // To pass data between routes we should pass a second param to send data
            // we should be able to get data from target route throught Props params
            navigation.navigate('PersonaScreen', {id: 0, name: 'Pedro'})
          }>
          <Text style={styles.buttonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            // To pass data between routes we should pass a second param to send data
            // we should be able to get data from target route throught Props params
            navigation.navigate('PersonaScreen', {id: 1, name: 'Maria'})
          }>
          <Text style={styles.buttonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
