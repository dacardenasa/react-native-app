import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ContactsScreen} from '@screens/Contacts.screen';
import {ChatScreen} from '@screens/Chat.screen';
import {AlbumsScreen} from '@screens/Albums.screen';
import {colores} from '@theme/globalTheme';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colores.white,
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: () => {
          let iconName: any = '';
          switch (route.name) {
            case 'Chat':
              iconName = (
                <Icon
                  name="chatbox-ellipses-outline"
                  size={20}
                  color={colores.primary}
                />
              );
              break;
            case 'Contacts':
              iconName = (
                <Icon name="people-outline" size={20} color={colores.primary} />
              );
              break;
            case 'Albums':
              iconName = (
                <Icon name="albums-outline" size={20} color={colores.primary} />
              );
              break;
          }
          return <Text>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
