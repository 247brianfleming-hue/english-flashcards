# Sunflower English (project folder)

This folder is the local copy of the English Flashcards app.

## Folder layout

```
Sunflower English/
  README.md          this file
  sw.js              offline cache (service worker)
  manifest.json      home-screen app settings for iPhone and Android
  index.html         the app page (copy it from the live artifact)
  data/
    words.json       the word list (copy from the artifact's data folder)
    order.json       the module order (copy from the artifact's data folder)
  audio/
    a001.json ... a277.json   the audio clips (copy from the artifact's audio folder)
```

## What is and isn't on this PC yet

- Done here: this README, sw.js, manifest.json.
- Not done here: index.html, data/, and audio/. These are the app's own files and they sit inside the claude.ai artifact. They were too large to move through the chat (the audio alone is about 134 MB across 277 files), so they need to be copied over by hand.

## How to copy the app files over

1. Open the English Flashcards artifact in claude.ai.
2. Download or export each file (index.html, data/words.json, data/order.json, and all 277 audio files). If the artifact page doesn't offer a download, ask me for another route before you start copying.
3. Put each file in the matching folder above, keeping the same file names.

## Offline use on iPhone (later)

Once the files are online at a free GitHub Pages address, opening the app in Safari and choosing "Add to Home Screen" installs it. The service worker in sw.js caches the app, the word list, and the audio the first time they load, so it then works without internet.
