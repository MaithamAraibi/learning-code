export type Lesson = {
  id: number;
  title: string;
  prompt: string;
  points: number;
};

export const lessons: Lesson[] = [
  { id: 1, title: 'Harakat Basics', prompt: 'Read: بَ بِ بُ', points: 10 },
  { id: 2, title: 'Noon Sakinah', prompt: 'Read: مِنْ رَبِّهِمْ', points: 15 },
  { id: 3, title: 'Tartil Practice', prompt: 'Read with tartil pace: الرَّحْمَٰنِ', points: 20 }
];
