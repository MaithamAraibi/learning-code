# Quran Reader Pro — Project Brainstorm Map

This document is a structured brainstorm map for building a mobile app that teaches Quran reading with professional recitation guidance.

## 1) Core Goal
**Help learners read Quran correctly and confidently** through guided lessons, Tajweed practice, and live correction.

---

## 2) Brainstorm Map (Mind Map Style)

- **Quran Reader Pro**
  - **Learning Experience**
    - Arabic letters (recognition + pronunciation)
    - Harakat/movements (fatha, kasra, damma, sukun, shadda, madd, tanween)
    - Word building and fluency drills
    - Lesson difficulty levels (beginner → advanced)
  - **Tajweed & Reading Rules**
    - Noon Sakinah / Tanween rules
    - Meem Sakinah rules
    - Qalqalah
    - Madd types
    - Heavy/light letters
    - Waqf & Ibtida (stopping/starting)
  - **Tartīl + Canonical Recitations**
    - Teach Tartīl as the main reading method (slow, clear, measured)
    - Introduce Canonical Recitations (Qirā’āt)
    - MVP focus: Hafs ‘an ‘Asim track
    - Future: comparison between recitation paths
  - **AI Reading Correction**
    - User reads aloud
    - App detects reading mistakes
    - App says: **"Repeat in Arabic"**
    - Continue only if:
      - User reads correctly, or
      - User chooses skip
    - Store common mistakes for personalized revision
  - **Points, Grades, and Stages**
    - Points for accurate reading and first-try correctness
    - Grade increase based on lesson performance
    - Grade unlocks next stage
    - User can skip stage, but earns **0 points** for skipped items
    - Stage report: completed vs skipped vs needs review
  - **Engagement**
    - Daily streaks
    - Achievement badges
    - Weekly goals
    - Parent/teacher progress share (future)
  - **Monetization**
    - One-time app price: **3 dinars**
    - Bottom screen banner ad
    - Optional future premium add-ons (advanced tracks)
  - **Platforms & Tech**
    - iOS + Android
    - Flutter (recommended) or React Native
    - Speech/audio processing pipeline
    - Offline lessons + cached audio
  - **UX/UI**
    - RTL-first Arabic interface
    - Large readable Arabic font
    - Simple tabs: Learn / Practice / Rules / Progress / Settings
    - Beginner-friendly flow with clear CTAs
  - **Content Governance**
    - Verified Quran text source
    - Scholar review workflow
    - Versioning for lesson content updates
  - **Compliance & Safety**
    - Privacy policy
    - Age-appropriate ad settings
    - Consent for microphone usage

---

## 3) MVP Brainstorm (What to Build First)
1. Onboarding + level placement.
2. Beginner letters and harakat modules.
3. 15 Tajweed lessons with audio examples.
4. Live reading correction with “Repeat in Arabic” prompt.
5. Points + grade + stage progression logic.
6. Tartīl-focused Hafs ‘an ‘Asim recitation path.
7. 3-dinar purchase + bottom ad banner.
8. Publish on iOS and Android.

---

## 4) Future Ideas Backlog
- Voice quality scoring (tone, pace, clarity).
- Teacher mode (assign homework + review recordings).
- Community challenge mode.
- Multi-language explanations (Arabic, English, Urdu, Bahasa).
- Wearables/reminder integration for daily practice.

---

## 5) Next Action Plan
- Convert this brainstorm map into:
  1) Feature requirements document,
  2) User stories,
  3) UI wireframes,
  4) Technical architecture,
  5) Sprint plan for MVP implementation.
