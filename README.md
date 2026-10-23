# 大考中心字彙總表 · 圖文單字卡

**Language:** [![中文](https://img.shields.io/badge/%E4%B8%AD%E6%96%87-%E4%B8%AD%E6%96%87%E7%89%88-blue?style=flat-square)](README.md) [![English](https://img.shields.io/badge/English-English-blue?style=flat-square)](README.en.md)

[![PWA](https://img.shields.io/badge/PWA-offline%20ready-%233A9BD5)](https://tewei02.github.io/vocabulary-cards/)
[![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Mobile-1f7a4d.svg)](#)
[![Vocabulary](https://img.shields.io/badge/vocabulary-40%2C690%20words-2563eb.svg)](#)

以**大考中心字彙總表**為基礎的圖文單字卡學習頁，收錄全部 **40,690 詞**（含片語），
按 L1–L6 分級，並附 PWA 離線安裝與 TTS 發音。

> **線上版**：<https://tewei02.github.io/vocabulary-cards/>

## 功能

- **總目錄（index.html）**：全部 / L1–L6 分級入口，內建即時搜尋（輸入即篩選，如 `patient` / `date` / `term`）。
- **圖文單字卡（all.html / level1–6.html）**：每張卡含單字、詞性、中文釋義與英文定義、片語用法，
  並搭配 Wikimedia Commons 圖檔（L1 含圖 3,702 張）。
- **TTS 發音**：每張卡可一鍵播放英文發音，亦可**逐字母拼讀**（spell speak）。
- **單字記憶**：每張卡右上角可標記「✓ 已學會 / ★ 待複習」，以 `localStorage`（`vc_mem_map`）持久化，手機端可操作。
- **中英切換**：介面可切換中文 / English，底部播放條亦固定提供語言切換（選擇自動記住）。
- **PWA 離線安裝**：`manifest.json` + Service Worker（`sw.js`）快取，可安裝為桌面 / 行動應用（單字卡睡眠學習）。

## 檔案清單

| 檔案 | 說明 |
|---|---|
| `index.html` | 總目錄：分級入口與即時搜尋 |
| `all.html` | 全部 40,690 詞單字卡 |
| `level1.html` – `level6.html` | L1–L6 各級單字卡 |
| `vocab_index.js` | 詞彙索引資料（搜尋用） |
| `manifest.json` / `sw.js` | PWA 應用資訊與離線快取 |
| `icon-192.png` / `icon-512.png` | PWA 圖示 |

## 使用方式

直接開啟 `index.html` 即可離線使用；或瀏覽線上版
<https://tewei02.github.io/vocabulary-cards/>（支援 PWA 安裝）。

## 授權

MIT License © 2026 Te-Wei Ko
