# **Dmytro Orlenko — Portfolio** — personal frontend portfolio website

## Overview

A clean, responsive personal portfolio showcasing selected frontend projects, tech stack and social links. Built as a fully static site with smooth animations, bilingual support (EN / UK) and a dark-themed design.

## Features

- Fully static frontend (HTML / CSS / JS) — no frameworks, no dependencies
- Bilingual UI with runtime language switching (English / Ukrainian)
- Animated cards with project previews and direct GitHub links
- Tech stack grid with icon badges
- Responsive layout adapted for mobile, tablet and desktop
- PWA-ready (`site.webmanifest`, theme color, icons)

## Run locally

1. Clone the repository and open the project folder:

```bash
git clone https://github.com/eternalstoneinside/Dmytro-Orlenko-Portfolio.git
cd Dmytro-Orlenko-Portfolio
```

2. Open `index.html` directly in the browser or use a local server (recommended):

```bash
# Python 3
python -m http.server 8000
# or use Live Server in VS Code
```

3. Open http://localhost:8000 and verify the app.

## Publishing to GitHub Pages

1. Go to the repository on GitHub.
2. Open **Settings → Pages**.
3. Under _Branch_ select `main` and folder `/` (root), then click **Save**.
4. After a minute the site will be live at `https://eternalstoneinside.github.io/Dmytro-Orlenko-Portfolio/`.

## Project structure

```
index.html          — main page (markup & layout)
css/
  main.css          — all styles, animations, responsive breakpoints
js/
  main.js           — translations, UI interactions, language switcher
img/
  icons/            — tech stack & social icons (SVG/PNG)
  *-preview.*       — project preview images
  site-icon.svg     — favicon
site.webmanifest    — PWA manifest
```

## Projects showcased

| # | Project | Description |
|---|---------|-------------|
| 1 | **Wevv** | Lightweight browser speed & stability test (latency, jitter, download) |
| 2 | **Productivio** | Task board + notes + Pomodoro + mood tracker in one dashboard |
| 3 | **AIM Game** | Browser aim trainer with difficulty levels and ranked mode |
| 4 | **Lovee** | Romantic flower delivery landing with catalog and checkout flow |
| 5 | **Dzherelo Restaurant** | Cafe website with menu, gallery, map and table reservation |
| 6 | **Bridge** | Debit card promo landing with onboarding and app download CTA |

## Tech stack used in portfolio

HTML5 · CSS3 · JavaScript · Git · Figma

---

Dmytro Orlenko — Front-end розробник, захоплений створенням красивих адаптивних інтерфейсів. Портфоліо зроблено на чистому HTML/CSS/JS без фреймворків.

## Особливості

- Повністю статичний фронтенд (HTML / CSS / JS) — без фреймворків і залежностей
- Двомовний інтерфейс із перемиканням мови у реальному часі (EN / UK)
- Анімовані картки проєктів з превью та посиланнями на GitHub
- Адаптивна вёрстка для мобільних, планшетів і десктопу
- PWA-ready (`site.webmanifest`, theme color, іконки)

## Як запустити локально

1. Клонуйте репозиторій:

```bash
git clone https://github.com/eternalstoneinside/Dmytro-Orlenko-Portfolio.git
cd Dmytro-Orlenko-Portfolio
```

2. Відкрийте `index.html` у браузері або запустіть локальний сервер:

```bash
# Python 3
python -m http.server 8000
# або Live Server у VS Code
```

3. Перейдіть на http://localhost:8000.

## Публікація на GitHub Pages

1. Відкрийте **Settings → Pages** у репозиторії.
2. У розділі _Branch_ оберіть `main` і папку `/` (root), натисніть **Save**.
3. За хвилину сайт буде доступний за адресою `https://eternalstoneinside.github.io/Dmytro-Orlenko-Portfolio/`.

## Структура проєкту

```
index.html          — головний файл (розмітка та layout)
css/
  main.css          — всі стилі, анімації, адаптивність
js/
  main.js           — переклади, взаємодія з UI, перемикач мови
img/
  icons/            — іконки tech stack та соціальних мереж
  *-preview.*       — превью зображення проєктів
  site-icon.svg     — favicon
site.webmanifest    — PWA manifest
```

## Ліцензія

MIT — вільне використання з посиланням на автора.
