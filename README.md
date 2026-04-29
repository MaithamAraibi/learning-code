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
- UI sample tab with starter cards for lesson and progress design.

## UI/UX Starter Samples
The app now includes a **UI Samples** tab containing:
- **Lesson Card sample** (large Arabic text, readable spacing, focused hierarchy).
- **Progress Card sample** (points, grade, stage metrics).

Use these as starting references for color system, typography, and card layout before moving into full design system and navigation.

## Project Structure
- `src/App.tsx` main app shell + simple tab switcher (Learn / UI Samples).
- `src/screens/LearningScreen.tsx` lesson flow, correction logic, points/grades.
- `src/screens/SamplesScreen.tsx` starter UI/UX examples.
- `src/components/BottomAdBanner.tsx` bottom banner ad placeholder.
- `src/data/lessons.ts` sample stage data.

## How to fix `npm install` 403 (registry.npmjs.org)
If you get `403 Forbidden` from npm registry, usually your network/proxy/security policy is blocking package download.

Try this checklist:

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
5. If on corporate network:
   - Ask for npm registry allowlist access.
   - Or use internal mirror (Artifactory/Nexus) and set it as npm registry.
6. If CI/container policy blocks internet, run install where internet is allowed, then commit lockfile.

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
