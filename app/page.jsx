"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowOverlay(false), 500);
  };

  return (
    <main className="bg-background text-foreground relative">
      {showOverlay && (
        <div
          className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-all duration-1000 ease-in-out ${
            isLoading
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110 pointer-events-none"
          }`}
        >
          <LoadingScreen
            name="Gunavanth Reddy"
            onComplete={handleLoadingComplete}
          />
        </div>
      )}

      {!isLoading && (
        <div className="transition-all duration-700 ease-in-out opacity-100">
          <StarsBackground />
          <ShootingStars />
          <Navbar activeSection={activeSection} />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      )}
    </main>
  );
}
