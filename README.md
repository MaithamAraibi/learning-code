# Quran Reader Pro — Product Plan

This repository now contains a clear product plan for a mobile app that helps users learn to read the Quran with professional recitation guidance.

## 1) App vision
Build a beginner-friendly app that teaches Quran reading step by step, with:
- How to read Arabic letters correctly.
- Rules of Quranic reading (Tajweed).
- Movements/harakat (fatha, kasra, damma, sukun, shadda, madd, tanween).
- Tartīl (measured, clear recitation) principles and practical examples.
- Canonical recitations (Qirā’āt) explained at a beginner-friendly level.

The app will launch on both **iOS** and **Android**.

## 2) Core features

### A. Learn to read module
- Arabic letters with pronunciation audio.
- Letter forms by position (beginning/middle/end).
- Syllable and word-building lessons.
- Short quizzes after each lesson.

### B. Tajweed rules module
- Rule-by-rule lessons using simple language.
- Audio examples for each rule.
- Practice mode: users listen and repeat.
- Visual highlights in text where the rule applies.

Suggested rule groups:
- Noon Sakinah & Tanween rules.
- Meem Sakinah rules.
- Qalqalah.
- Madd rules.
- Heavy/light letters.
- Stops and starts (Waqf & Ibtida).

### C. Harakat and movements module
- Dedicated lessons for each movement.
- Animated mouth-position tips (optional in v2).
- Exercises that compare similar sounds.

### D. Recitation styles module
- Teach Tartīl as a core reading practice: slow, accurate, and reflective recitation.
- Explain the Canonical Recitations (the recognized Qirā’āt) at a beginner level.
- Focus first release on one default riwāyah for consistency (e.g., Hafs ‘an ‘Asim).
- Add guided comparisons with other canonical recitations in future updates.

### E. Progress & motivation
- Daily learning streak.
- Achievement badges.
- Lesson completion tracking.


### F. Reading correction and advancement engine
- While the user reads aloud, the app listens and detects pronunciation/rule mistakes.
- When an error is detected, the app prompts: **"Repeat in Arabic"**.
- Lesson flow only continues when the user either:
  - reads the part correctly, or
  - chooses to skip.
- The app records each correction attempt for progress analytics.

### G. Points, grades, and stages
- Users earn points for correct reading and first-try accuracy.
- Points contribute to a grade for each lesson/stage.
- Grade completion unlocks the next stage in a structured path.
- Users may skip to the next stage at any time, but skipped content grants **no points**.
- Stage history clearly marks completed vs skipped lessons.


## 3) Monetization and pricing
- One-time purchase price: **3 dinars**.
- Include a **banner ad at the bottom** of the main learning screens.
- Recommendation: clearly disclose ads in the store listing and privacy policy.

## 4) Platform and tech recommendation
To support iOS and Android from one codebase:
- **Flutter** (recommended) or React Native.
- Audio engine for precise playback.
- Cloud backend for progress sync (optional in v1).

## 5) MVP scope (first release)
1. Onboarding and level placement.
2. 20 beginner lessons (letters + harakat).
3. 15 Tajweed lessons with audio.
4. Basic quizzes and progress tracking.
5. Real-time reading correction with "Repeat in Arabic" prompt.
6. Points and grade-based stage progression (skip allowed without points).
7. One Tartīl-focused recitation track (Hafs ‘an ‘Asim) with sample surahs.
8. In-app purchase at 3 dinars + bottom banner ad.
9. iOS + Android release builds.

## 6) UX requirements
- Large Arabic text with readable fonts.
- Right-to-left support.
- Offline lesson downloads for core content.
- Simple navigation: Learn, Practice, Rules, Progress, Settings.

## 7) Compliance and quality
- Respect Quran text integrity and trusted source verification.
- Include scholar review before release.
- Add privacy policy and age-appropriate ad settings.

## 8) Proposed next step
Create clickable UI wireframes and a detailed lesson curriculum, then start building the Flutter MVP.
