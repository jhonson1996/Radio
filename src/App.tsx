import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './Constants';
import DrawerNavigator from './Navigation/DrawerNavigation';
import { radioInit } from './TrackPlayer/TrackPlayerSerivce';
import OneSignal from 'react-native-onesignal';
import { ID_ONESIGNAL } from '@env';

// REMOTE NOTIFICATIONS SETUP START //
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId(ID_ONESIGNAL);
//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse((response) => {
  console.log("Prompt response #334: ", response);
})
//Method for handling notifications recieved while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
  console.log("One Signal: notiication will show in foreground: ", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  //Complete with null means don't show a notification
  notificationReceivedEvent.complete(notification);
});
//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler((notification) => {
  console.log("OneSignal: notification opened: ", notification);
})

radioInit();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
