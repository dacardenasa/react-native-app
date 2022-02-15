import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/globalTheme';
import {useNavigation} from '@react-navigation/core';

export const Pagina2Screen = () => {
  /*
   * We can use a hook to load navigation object, but we should get navigation
   * directly from component default props
   * using hook to load navigation functions
   */
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
