import React, { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomAdBanner } from './components/BottomAdBanner';
import { LearningScreen } from './screens/LearningScreen';
import { SamplesScreen } from './screens/SamplesScreen';
import { darkPalette, lightPalette } from './theme/palette';

type Tab = 'learn' | 'samples';
type Mode = 'system' | 'light' | 'dark';

export default function App() {
  const [tab, setTab] = useState<Tab>('learn');
  const [mode, setMode] = useState<Mode>('system');
  const systemScheme = useColorScheme();

  const isDark = mode === 'dark' || (mode === 'system' && systemScheme === 'dark');
  const palette = useMemo(() => (isDark ? darkPalette : lightPalette), [isDark]);

  const cycleMode = () => {
    setMode((prev) => (prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'));
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.bg }]}> 
      <StatusBar style={isDark ? 'light' : 'dark'} />

      <View style={[styles.tabRow, { borderBottomColor: palette.border }]}> 
        <Pressable style={[styles.tab, { backgroundColor: palette.surface }, tab === 'learn' && { backgroundColor: palette.primary }]} onPress={() => setTab('learn')}>
          <Text style={[styles.tabText, { color: tab === 'learn' ? '#ffffff' : palette.text }]}>Learn</Text>
        </Pressable>
        <Pressable style={[styles.tab, { backgroundColor: palette.surface }, tab === 'samples' && { backgroundColor: palette.primary }]} onPress={() => setTab('samples')}>
          <Text style={[styles.tabText, { color: tab === 'samples' ? '#ffffff' : palette.text }]}>UI Samples v2</Text>
        </Pressable>
        <Pressable style={[styles.modeButton, { borderColor: palette.border }]} onPress={cycleMode}>
          <Text style={[styles.modeText, { color: palette.text }]}>Mode: {mode}</Text>
        </Pressable>
      </View>

      {tab === 'learn' ? <LearningScreen palette={palette} /> : <SamplesScreen palette={palette} />}
      <BottomAdBanner palette={palette} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  tab: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999 },
  tabText: { fontSize: 12, fontWeight: '600' },
  modeButton: { marginLeft: 'auto', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8 },
  modeText: { fontSize: 12, fontWeight: '600' }
});
