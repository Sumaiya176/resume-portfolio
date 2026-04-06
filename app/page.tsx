"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { OpenToHire } from "@/components/sections/OpenToHire";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const done = sessionStorage.getItem("portfolio-loaded");
    if (done === "1") {
      setLoading(false);
      return;
    }
    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("portfolio-loaded", "1");
    }, 2400);
    return () => clearTimeout(t);
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
    sessionStorage.setItem("portfolio-loaded", "1");
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <OpenToHire />
        <Contact />
      </main>
      <footer className="border-t border-[var(--border-subtle)] py-8 text-center text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} Sumaiya Talukder. All rights reserved.
      </footer>
    </>
  );
}
