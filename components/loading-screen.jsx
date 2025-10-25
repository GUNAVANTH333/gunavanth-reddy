"use client";

import { useState } from "react";
import { DecryptedText } from "./decrypted-text";

export function LoadingScreen({ name = "YourName", onComplete = () => {} }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleDecryptComplete = () => {
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onComplete, 100);
    }, 800);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 transition-all duration-800 ease-in-out ${
        isFadingOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
      style={{ fontFamily: "'Rubik Doodle Shadow', system-ui" }}
    >
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 text-4xl md:text-6xl tracking-wider">
        <DecryptedText
          text={name}
          speed={50}
          onComplete={handleDecryptComplete}
          randomChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
        />
      </div>
    </div>
  );
}
