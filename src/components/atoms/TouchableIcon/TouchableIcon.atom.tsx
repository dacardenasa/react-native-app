import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {colores} from '@theme/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '@context/index';

interface ITouchableIconProps {
  iconName: string;
}

export const TouchableIcon = ({iconName}: ITouchableIconProps) => {
  const {changeFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={80} color={colores.primary} />
    </TouchableOpacity>
  );
};
