"use client";

import { Volume2 } from "lucide-react";

export function PronunciationButton({ text, label }: { text: string; label: string }) {
  function speak() {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  return <button type="button" className="pronunciation-button" onClick={speak} aria-label={label}><Volume2 aria-hidden="true" /></button>;
}
