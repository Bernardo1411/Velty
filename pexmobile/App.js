import React from 'react';
import {
  StatusBar, StyleSheet, SafeAreaView, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

function App() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar />
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
