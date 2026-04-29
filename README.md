# Quran Reader Pro App

A cross-platform (iOS + Android) mobile app prototype built with Expo/React Native to help learners read Quran professionally.

## Implemented Features
- Learning stages for Quran reading practice.
- Rules-oriented lesson prompts (harakat, Tajweed, tartīl-oriented practice).
- Reading correction gate:
  - if input is not accepted, app shows **"Repeat in Arabic"** and blocks progression.
  - user can choose **Skip** to move forward without earning points.
- Points, grades, and stage progression model.
- **Voice support** using `expo-speech` so users can listen and read with the app.
- Dark mode + light mode + system mode switch.
- Bottom ad banner placeholder.
- Pricing displayed as **3 dinars**.
- Includes Tartīl and Canonical Recitations (Qirā’āt) pathway note.
- UI Samples v2 tab with onboarding, lesson, and progress dashboard starter layouts.

## UI/UX Samples v2
The app includes **UI Samples v2** with:
- Onboarding card sample.
- Lesson reading card sample.
- Progress dashboard card sample.

## Project Structure
- `src/App.tsx` main shell + tab switcher + dark/light/system mode.
- `src/screens/LearningScreen.tsx` lesson flow, correction logic, voice playback, points/grades.
- `src/screens/SamplesScreen.tsx` UI/UX starter examples v2.
- `src/components/BottomAdBanner.tsx` bottom banner ad placeholder.
- `src/theme/palette.ts` theme palettes.
- `src/data/lessons.ts` sample stage data.

## How to fix `npm install` 403 (registry.npmjs.org)
If you get `403 Forbidden` from npm registry, usually your network/proxy/security policy is blocking package download.

1. Check configured registries/proxies:
   ```bash
   npm config get registry
   npm config list
   ```
2. Force official npm registry:
   ```bash
   npm config set registry https://registry.npmjs.org/
   ```
3. Remove invalid proxy settings (if present):
   ```bash
   npm config delete proxy
   npm config delete https-proxy
   ```
4. Clear cache and retry:
   ```bash
   npm cache clean --force
   npm install
   ```

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
