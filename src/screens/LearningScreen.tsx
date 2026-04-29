import React, { useMemo, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import { lessons } from '../data/lessons';
import { Palette } from '../theme/palette';

export function LearningScreen({ palette }: { palette: Palette }) {
  const [stage, setStage] = useState(1);
  const [points, setPoints] = useState(0);
  const [grade, setGrade] = useState('Beginner');
  const [answer, setAnswer] = useState('');
  const currentLesson = useMemo(() => lessons[Math.min(stage - 1, lessons.length - 1)], [stage]);

  const updateGrade = (newPoints: number) => {
    if (newPoints >= 30) setGrade('Advanced');
    else if (newPoints >= 15) setGrade('Intermediate');
    else setGrade('Beginner');
  };

  const speakPrompt = () => {
    Speech.speak(currentLesson.prompt, {
      language: 'ar',
      pitch: 1,
      rate: 0.8
    });
  };

  const onSubmit = () => {
    const isCorrect = answer.trim().length > 3;
    if (!isCorrect) {
      Speech.speak('Repeat in Arabic', { language: 'en' });
      Alert.alert('Repeat in Arabic', 'Please repeat correctly to continue or tap Skip.');
      return;
    }

    const newPoints = points + currentLesson.points;
    setPoints(newPoints);
    updateGrade(newPoints);
    setAnswer('');
    setStage((prev) => prev + 1);
  };

  const onSkip = () => {
    Alert.alert('Stage Skipped', 'No points earned for this stage.');
    setAnswer('');
    setStage((prev) => prev + 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: palette.bg }]}> 
      <Text style={[styles.heading, { color: palette.text }]}>Quran Reader Pro</Text>
      <Text style={[styles.meta, { color: palette.subtext }]}>Price: 3 dinars • Platform: iOS + Android</Text>
      <Text style={[styles.meta, { color: palette.subtext }]}>Points: {points} • Grade: {grade} • Stage: {stage}</Text>

      <View style={[styles.lessonCard, { backgroundColor: palette.surface, borderColor: palette.border }]}> 
        <Text style={[styles.lessonTitle, { color: palette.text }]}>{currentLesson.title}</Text>
        <Text style={[styles.prompt, { color: palette.text }]}>{currentLesson.prompt}</Text>

        <Pressable style={[styles.listenButton, { borderColor: palette.primary }]} onPress={speakPrompt}>
          <Text style={[styles.listenText, { color: palette.primary }]}>🔊 Listen & Read With Reader</Text>
        </Pressable>

        <TextInput
          style={[styles.input, { borderColor: palette.border, color: palette.text, backgroundColor: palette.bg }]}
          placeholder="Recite text or type your practice"
          placeholderTextColor={palette.subtext}
          value={answer}
          onChangeText={setAnswer}
        />

        <View style={styles.actions}>
          <Pressable style={[styles.button, { backgroundColor: palette.success }]} onPress={onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: palette.muted }]} onPress={onSkip}>
            <Text style={styles.buttonText}>Skip</Text>
          </Pressable>
        </View>
      </View>

      <Text style={[styles.footerNote, { color: palette.subtext }]}>Includes Tartīl and Canonical Recitations (Qirā’āt) learning path.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 28, fontWeight: '700', marginTop: 24, marginBottom: 8 },
  meta: { fontSize: 14, marginBottom: 4 },
  lessonCard: { borderRadius: 12, padding: 16, marginTop: 16, borderWidth: 1 },
  lessonTitle: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  prompt: { fontSize: 20, marginBottom: 12, textAlign: 'right' },
  listenButton: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
  listenText: { textAlign: 'center', fontWeight: '700' },
  input: { borderWidth: 1, borderRadius: 8, padding: 10 },
  actions: { flexDirection: 'row', gap: 10, marginTop: 12 },
  button: { flex: 1, padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
  footerNote: { marginTop: 20, fontSize: 13 }
});
