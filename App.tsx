import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CardScreen } from "./src/screens/CardScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'}/>
      <SafeAreaProvider>
        <CardScreen />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
