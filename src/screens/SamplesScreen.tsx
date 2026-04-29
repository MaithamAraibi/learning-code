import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Palette } from '../theme/palette';

export function SamplesScreen({ palette }: { palette: Palette }) {
  return (
    <ScrollView style={[styles.container, { backgroundColor: palette.bg }]} contentContainerStyle={styles.content}>
      <Text style={[styles.title, { color: palette.text }]}>UI/UX Samples v2</Text>

      <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <Text style={[styles.cardTitle, { color: palette.text }]}>Onboarding Sample</Text>
        <Text style={[styles.caption, { color: palette.subtext }]}>“Learn Quran Reading Professionally”</Text>
        <Text style={[styles.badge, { backgroundColor: palette.primary }]}>Start Placement Test</Text>
      </View>

      <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <Text style={[styles.cardTitle, { color: palette.text }]}>Lesson Sample</Text>
        <Text style={[styles.arabic, { color: palette.text }]}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
        <Text style={[styles.caption, { color: palette.subtext }]}>Large Arabic typography + voice assist + correction feedback.</Text>
      </View>

      <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
        <Text style={[styles.cardTitle, { color: palette.text }]}>Progress Dashboard Sample</Text>
        <Text style={[styles.metric, { color: palette.text }]}>Points: 45</Text>
        <Text style={[styles.metric, { color: palette.text }]}>Grade: Intermediate</Text>
        <Text style={[styles.metric, { color: palette.text }]}>Stage: 4 / 10</Text>
        <Text style={[styles.caption, { color: palette.subtext }]}>Shows completed, skipped, and recommended revision stages.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, gap: 14 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 8 },
  card: { borderWidth: 1, borderRadius: 12, padding: 16, gap: 8 },
  cardTitle: { fontSize: 18, fontWeight: '600' },
  arabic: { fontSize: 30, lineHeight: 44, textAlign: 'right' },
  metric: { fontSize: 16 },
  caption: { fontSize: 13 },
  badge: { alignSelf: 'flex-start', color: '#fff', fontWeight: '700', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 }
});
