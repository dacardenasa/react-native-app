import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '@theme/index';
import {SettingButton} from '@components/index';
import {AuthContext} from '@context/index';

export const SettingsScreen = () => {
  /* useSafeAreaInsets hook used to handle SafeAreaView in place we wanted, values: { top, left, bottom, right } */
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.globalMargin,
        {
          marginTop: top + 20,
          alignItems: 'center',
          flex: 1,
        },
      ]}>
      <Text style={styles.title}>Settings Screen</Text>
      <View style={styles.settingsButtonContainer}>
        <SettingButton
          path="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          handleClick={() => {}}
          title="Account"
        />
        <SettingButton
          path="https://smallimg.pngkey.com/png/small/32-324995_personalized-womens-wallet-leather-wallet-bi-fold-design.png"
          handleClick={() => {}}
          title="Wallet"
        />
        <SettingButton
          path="https://smallimg.pngkey.com/png/small/146-1464258_round-maroon-and-white-location-icon-circle-location.png"
          handleClick={() => {}}
          title="Locations"
        />
        <SettingButton
          path="https://smallimg.pngkey.com/png/small/21-218116_1-reply-5-retweets-12-likes-goods-and.png"
          handleClick={() => {}}
          title="Orders"
        />
        <SettingButton
          path="https://smallimg.pngkey.com/png/small/130-1304232_best-notification-center-icon-png-apple-notification-center.png"
          handleClick={() => {}}
          title="Notifications"
        />
        <SettingButton
          path="https://smallimg.pngkey.com/png/small/386-3866632_update-credit-card-recharge-infusionsoft-subscriptions-credit-card.png"
          handleClick={() => {}}
          title="Payment Method"
        />
      </View>
    </View>
  );
};
