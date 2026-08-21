"use client";

import { MessageCircle, Play } from "lucide-react";

export function DialogueBoard({ label, ko, meaning, note, listenLabel }: { label: string; ko: string; meaning: string; note: string; listenLabel: string }) {
  function speak() {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(ko);
    utterance.lang = "ko-KR";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div className="dialogue-top"><span>{label}</span><button type="button" aria-label={listenLabel} onClick={speak}><Play /></button></div>
      <p className="hangul">{ko}</p><p className="meaning">{meaning}</p><div className="lesson-note"><MessageCircle /><p>{note}</p></div>
    </>
  );
}
