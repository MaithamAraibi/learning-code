import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function BottomAdBanner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.text}>Ad Banner • Learn Quran Better</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f5f5f5'
  },
  text: {
    textAlign: 'center',
    color: '#333',
    fontSize: 12
  }
});
