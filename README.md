# Quran Reader Pro App

A cross-platform (iOS + Android) mobile app prototype built with Expo/React Native to help learners read Quran professionally.

## Implemented Features
- Learning stages for Quran reading practice.
- Rules-oriented lesson prompts (harakat, Tajweed, tartīl-oriented practice).
- Reading correction gate:
  - if input is not accepted, app shows **"Repeat in Arabic"** and blocks progression.
  - user can choose **Skip** to move forward without earning points.
- Points, grades, and stage progression model.
- Bottom ad banner placeholder.
- Pricing displayed as **3 dinars**.
- Includes Tartīl and Canonical Recitations (Qirā’āt) pathway note.

## Project Structure
- `src/App.tsx` main app shell.
- `src/screens/LearningScreen.tsx` lesson flow, correction logic, points/grades.
- `src/components/BottomAdBanner.tsx` bottom banner ad placeholder.
- `src/data/lessons.ts` sample stage data.

## Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm start
   ```
3. Open on iOS/Android via Expo Go.
