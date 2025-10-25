"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef(null);
  const invertRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    const hideSystemCursor = () => {
      document.querySelectorAll("*").forEach((el) => {
        el.style.cursor = "none";
      });
    };

    hideSystemCursor();
    const observer = new MutationObserver(hideSystemCursor);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.classList.contains("interactive") ||
        target.classList.contains("btn-interactive");

      setCursorVariant(isInteractive ? "hover" : "default");
    };

    const handleMouseOut = () => setCursorVariant("default");

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    const animateCursor = () => {
      const dx = mouseX.current - cursorX.current;
      const dy = mouseY.current - cursorY.current;

      cursorX.current += dx * 0.2;
      cursorY.current += dy * 0.2;

      const cursorSize = cursorVariant === "hover" ? 48 : 32;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${
          cursorX.current - cursorSize / 2
        }px, ${cursorY.current - cursorSize / 2}px, 0)`;
      }

      if (invertRef.current) {
        invertRef.current.style.transform = `translate3d(${
          cursorX.current - cursorSize / 2
        }px, ${cursorY.current - cursorSize / 2}px, 0)`;
      }

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      observer.disconnect();
      document.querySelectorAll("*").forEach((el) => {
        el.style.cursor = "auto";
      });
    };
  }, [cursorVariant]);

  return (
    <>
      <div
        ref={invertRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
        style={{
          width: cursorVariant === "hover" ? 48 : 32,
          height: cursorVariant === "hover" ? 48 : 32,
          backdropFilter: "invert(1)",
          WebkitBackdropFilter: "invert(1)",
          clipPath: "circle(50% at 50% 50%)",
          pointerEvents: "none",
          transition: "width 0.2s, height 0.2s",
        }}
      />

      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        animate={cursorVariant}
        variants={{
          default: { width: 32, height: 32 },
          hover: { width: 48, height: 48 },
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/40 backdrop-blur-md"
          animate={cursorVariant}
          variants={{
            default: { opacity: 0.6, scale: 1 },
            hover: { opacity: 1, scale: 1.1 },
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 backdrop-blur-lg shadow-lg shadow-cyan-400/20"
          animate={cursorVariant}
          variants={{
            default: { opacity: 0.5 },
            hover: { opacity: 0.8 },
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          style={{
            mixBlendMode: "difference",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={cursorVariant}
          variants={{
            default: { scale: 1, opacity: 0.8 },
            hover: { scale: 1.5, opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>
    </>
  );
}
