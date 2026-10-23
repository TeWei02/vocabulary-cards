# CEEC Vocabulary List · Illustrated Flash Cards

**Language:** [![English](https://img.shields.io/badge/English-English-blue?style=flat-square)](README.en.md) [![中文](https://img.shields.io/badge/%E4%B8%AD%E6%96%87-%E4%B8%AD%E6%96%87%E7%89%88-blue?style=flat-square)](README.md)

[![PWA](https://img.shields.io/badge/PWA-offline%20ready-%233A9BD5)](https://tewei02.github.io/vocabulary-cards/)
[![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Mobile-1f7a4d.svg)](#)
[![Vocabulary](https://img.shields.io/badge/vocabulary-40%2C690%20words-2563eb.svg)](#)

Illustrated flash-card study pages built on the **CEEC (College Entrance Examination Center) vocabulary list**,
covering all **40,690 words** (including phrases), grouped by levels L1–L6, with PWA offline install and TTS pronunciation.

> **Live site**: <https://tewei02.github.io/vocabulary-cards/>


<div align="center">

## Demo Preview

A 12-second walkthrough of the core workflow: level-based browsing (L1–L6) → instant search → illustrated vocabulary cards → TTS pronunciation → memorisation markers → offline PWA. The video is a canvas-rendered simulation; open the live version or install the PWA to use it.

<video controls width="640" src="assets/demo-preview.webm"></video>

</div>

## Features

- **Index (`index.html`)**: All / L1–L6 level entries with built-in instant search (filter as you type, e.g. `patient` / `date` / `term`).
- **Illustrated flash cards (`all.html` / `level1.html`–`level6.html`)**: Each card shows the word, part of speech,
  Traditional Chinese definition and English definition, phrase usage, plus an image from Wikimedia Commons (L1 has 3,702 images).
- **TTS pronunciation**: One-click English pronunciation per card, plus **letter-by-letter spelling** (spell speak).
- **Word memory tracking**: Mark each card "✓ Learned / ★ To Review" from the top-right button, persisted in `localStorage`
  (`vc_mem_map`), usable on mobile.
- **Chinese / English toggle**: Switch the interface between 中文 and English; the bottom playback bar also keeps a fixed
  language toggle (your choice is remembered automatically).
- **PWA offline install**: `manifest.json` + Service Worker (`sw.js`) caching — installable as a desktop / mobile app (single-word-card sleep learning).

## File List

| File | Description |
|---|---|
| `index.html` | Index: level entries and instant search |
| `all.html` | Flash cards for all 40,690 words |
| `level1.html` – `level6.html` | Flash cards for levels L1–L6 |
| `vocab_index.js` | Vocabulary index data (for search) |
| `manifest.json` / `sw.js` | PWA app info and offline caching |
| `icon-192.png` / `icon-512.png` | PWA icons |

## Usage

Open `index.html` directly to use offline; or browse the live site
<https://tewei02.github.io/vocabulary-cards/> (PWA install supported).

## License

MIT License © 2026 Te-Wei Ko
