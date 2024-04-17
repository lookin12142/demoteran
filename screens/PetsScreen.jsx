import React from 'react';
import { WebView } from 'react-native-webview';
import html from './pets.html'
export const PetsScreen = () => {
  return (
    <WebView source={html} style={{ marginTop: 20 }} />
  );
};


