"use client";

import { useEffect, useState } from "react";

export function DecryptedText({
  text = "YourName",
  speed = 120,
  randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  onComplete = () => {},
}) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let revealIndex = 0;
    let iteration = 0;

    const interval = setInterval(() => {
      let newText = text
        .split("")
        .map((char, i) => {
          if (i < revealIndex) return char;
          return randomChars[Math.floor(Math.random() * randomChars.length)];
        })
        .join("");

      setDisplayText(newText);

      iteration++;
      if (iteration % 3 === 0 && revealIndex < text.length) {
        revealIndex++;
      }

      if (revealIndex >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, randomChars, onComplete]);

  return <span>{displayText}</span>;
}
