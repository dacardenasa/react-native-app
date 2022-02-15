import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/Settings.screen';
import {StackNavigator} from './StackNavigator';
import {Image, useWindowDimensions, View, Text} from 'react-native';
import {styles} from '../theme/globalTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <InternMenu {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const InternMenu = ({navigation}: DrawerContentComponentProps) => (
  <DrawerContentScrollView>
    {/* User Avatar */}
    <View style={styles.avatarContainer}>
      <Image
        source={{
          uri: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
        }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Diego Cardenas</Text>
    </View>
    {/* Menu Options */}
    <View style={styles.menuListBox}>
      <TouchableOpacity
        style={styles.menuOption}
        onPress={() => navigation.navigate('StackNavigator')}>
        <Text style={styles.menuOptionText}>Navigation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuOption}
        onPress={() => navigation.navigate('SettingsScreen')}>
        <Text style={styles.menuOptionText}>Settings</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
);
