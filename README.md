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

## Instruction on How to Operate

### A) Start the app
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm start
   ```
3. Open on phone using Expo Go (scan QR), or run simulator:
   ```bash
   npm run ios
   npm run android
   ```

### B) Use app tabs
- **Learn** tab: actual lesson flow.
- **UI Samples v2** tab: reference screens for UX design.

### C) Change display mode
- Tap **Mode: system/light/dark** button in top bar.
- Each tap cycles between:
  1. system mode,
  2. light mode,
  3. dark mode.

### D) Operate learning flow
1. Read the displayed lesson prompt.
2. Tap **🔊 Listen & Read With Reader** to hear voice playback.
3. Enter practice text in input field.
4. Tap **Submit**:
   - If accepted, points are added and stage advances.
   - If not accepted, app shows **"Repeat in Arabic"** and you retry.
5. Tap **Skip** to move to next stage without points.

### E) Understand scoring
- Points accumulate on accepted submissions.
- Grade levels auto-update:
  - Beginner (< 15)
  - Intermediate (15–29)
  - Advanced (30+)

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
