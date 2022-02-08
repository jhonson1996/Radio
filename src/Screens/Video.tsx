import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export const Video = ({ route }: { route: any }) => {

  const { item } = route.params

  return (
    <SafeAreaView style={styles.safeArea}>
      {
        <WebView
          source={{ uri: "https://www.youtube.com/embed/" + item.id.videoId }}
          startInLoadingState={true}
        />
      }
      <Text>{JSON.stringify(item.id.videoId)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});