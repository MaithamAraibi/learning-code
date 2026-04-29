import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomAdBanner } from './components/BottomAdBanner';
import { LearningScreen } from './screens/LearningScreen';
import { SamplesScreen } from './screens/SamplesScreen';

type Tab = 'learn' | 'samples';

export default function App() {
  const [tab, setTab] = useState<Tab>('learn');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.tabRow}>
        <Pressable style={[styles.tab, tab === 'learn' && styles.activeTab]} onPress={() => setTab('learn')}>
          <Text style={[styles.tabText, tab === 'learn' && styles.activeTabText]}>Learn</Text>
        </Pressable>
        <Pressable style={[styles.tab, tab === 'samples' && styles.activeTab]} onPress={() => setTab('samples')}>
          <Text style={[styles.tabText, tab === 'samples' && styles.activeTabText]}>UI Samples</Text>
        </Pressable>
      </View>

      {tab === 'learn' ? <LearningScreen /> : <SamplesScreen />}
      <BottomAdBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb'
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#f3f4f6'
  },
  activeTab: {
    backgroundColor: '#0f766e'
  },
  tabText: {
    fontSize: 13,
    color: '#1f2937',
    fontWeight: '600'
  },
  activeTabText: {
    color: '#ffffff'
  }
});
