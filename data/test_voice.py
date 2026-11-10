# Voice test for Sunflower English.
# Makes sample audio in four natural-sounding English voices so you can pick one.
#
# Setup (once, in Command Prompt):
#   py -m pip install edge-tts
# Run:
#   py test_voice.py
# Then open the "voice_samples" folder and play the .mp3 files.

import asyncio
import os
import edge_tts

VOICES = {
    "jenny_us_female": "en-US-JennyNeural",
    "aria_us_female": "en-US-AriaNeural",
    "clara_ca_female": "en-CA-ClaraNeural",
    "liam_ca_male": "en-CA-LiamNeural",
}

SENTENCES = [
    "A reliable friend is always there when you need help.",
    "Could you tell me where the bus station is, please?",
    "I'd like to order the chicken soup and a cup of tea.",
]

OUT = "voice_samples"


async def main():
    os.makedirs(OUT, exist_ok=True)
    for name, voice in VOICES.items():
        for i, text in enumerate(SENTENCES, start=1):
            path = os.path.join(OUT, f"{name}_{i}.mp3")
            await edge_tts.Communicate(text, voice).save(path)
            print("made", path)
    print("Done. Listen to the files in the voice_samples folder.")


asyncio.run(main())
