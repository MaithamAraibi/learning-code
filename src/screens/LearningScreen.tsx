import React, { useMemo, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { lessons } from '../data/lessons';

export function LearningScreen() {
  const [stage, setStage] = useState(1);
  const [points, setPoints] = useState(0);
  const [grade, setGrade] = useState('Beginner');
  const [answer, setAnswer] = useState('');
  const currentLesson = useMemo(() => lessons[Math.min(stage - 1, lessons.length - 1)], [stage]);

  const updateGrade = (newPoints: number) => {
    if (newPoints >= 30) {
      setGrade('Advanced');
    } else if (newPoints >= 15) {
      setGrade('Intermediate');
    } else {
      setGrade('Beginner');
    }
  };

  const onSubmit = () => {
    const isCorrect = answer.trim().length > 3;
    if (!isCorrect) {
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
    <View style={styles.container}>
      <Text style={styles.heading}>Quran Reader Pro</Text>
      <Text style={styles.meta}>Price: 3 dinars • Platform: iOS + Android</Text>
      <Text style={styles.meta}>Points: {points} • Grade: {grade} • Stage: {stage}</Text>

      <View style={styles.lessonCard}>
        <Text style={styles.lessonTitle}>{currentLesson.title}</Text>
        <Text style={styles.prompt}>{currentLesson.prompt}</Text>
        <TextInput
          style={styles.input}
          placeholder="Recite text or type your practice"
          value={answer}
          onChangeText={setAnswer}
        />
        <View style={styles.actions}>
          <Pressable style={[styles.button, styles.success]} onPress={onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.skip]} onPress={onSkip}>
            <Text style={styles.buttonText}>Skip</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.footerNote}>Includes Tartīl and Canonical Recitations (Qirā’āt) learning path.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 28, fontWeight: '700', marginTop: 24, marginBottom: 8 },
  meta: { fontSize: 14, color: '#444', marginBottom: 4 },
  lessonCard: { backgroundColor: '#f8fafc', borderRadius: 12, padding: 16, marginTop: 16 },
  lessonTitle: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  prompt: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, backgroundColor: '#fff' },
  actions: { flexDirection: 'row', gap: 10, marginTop: 12 },
  button: { flex: 1, padding: 12, borderRadius: 8 },
  success: { backgroundColor: '#0f766e' },
  skip: { backgroundColor: '#9ca3af' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
  footerNote: { marginTop: 20, fontSize: 13, color: '#374151' }
});
