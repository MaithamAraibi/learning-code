import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export function SamplesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>UI/UX Samples</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sample 1: Lesson Card</Text>
        <Text style={styles.arabic}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
        <Text style={styles.caption}>Large Arabic text with Tajweed-friendly readability and simple action layout.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sample 2: Progress Card</Text>
        <Text style={styles.metric}>Points: 45</Text>
        <Text style={styles.metric}>Grade: Intermediate</Text>
        <Text style={styles.metric}>Stage: 4 / 10</Text>
        <Text style={styles.caption}>Clear progress visibility and stage status for motivation.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  content: { padding: 16, gap: 14 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 8 },
  card: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 16,
    gap: 8
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#0f172a' },
  arabic: { fontSize: 30, lineHeight: 44, textAlign: 'right', color: '#111827' },
  metric: { fontSize: 16, color: '#1f2937' },
  caption: { fontSize: 13, color: '#475569' }
});
