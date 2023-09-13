import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const websiteUrl = 'https://flitz.netlify.app'; // Substitua com a sua URL

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: websiteUrl }}
        style={styles.webview}
        scalesPageToFit={false} // Permitir zoom
        bounces={true} // Evitar efeito elástico no final da página
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});


