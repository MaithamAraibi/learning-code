import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Palette } from '../theme/palette';

export function BottomAdBanner({ palette }: { palette: Palette }) {
  return (
    <View style={[styles.banner, { borderTopColor: palette.border, backgroundColor: palette.surface }]}>
      <Text style={[styles.text, { color: palette.subtext }]}>Ad Banner • Learn Quran Better</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: { paddingVertical: 10, borderTopWidth: 1 },
  text: { textAlign: 'center', fontSize: 12 }
});
