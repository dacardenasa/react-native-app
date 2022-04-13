import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '@theme/index';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '@navigator/index';
import {AuthContext} from '@context/index';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  const {changeUsername} = useContext(AuthContext);
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(route.params, null, 3)}</Text>
    </View>
  );
};
