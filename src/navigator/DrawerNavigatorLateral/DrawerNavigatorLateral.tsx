import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '@screens/Settings.screen';
import {Image, useWindowDimensions, View, Text} from 'react-native';
import {styles, colores} from '@theme/globalTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Tabs} from '@navigator/BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <InternMenu {...props} />}>
      <Drawer.Screen name="Tabs" options={{title: 'Home'}} component={Tabs} />
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
        onPress={() => navigation.navigate('Tabs')}>
        <Icon name="compass-outline" size={25} color={colores.primary} />
        <Text style={styles.menuOptionText}>Navigation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuOption}
        onPress={() => navigation.navigate('SettingsScreen')}>
        <Icon name="settings-outline" size={25} color={colores.primary} />
        <Text style={styles.menuOptionText}>Settings</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
);
