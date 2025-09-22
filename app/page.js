"use client"; // 👈 add this at the very top

import dynamic from "next/dynamic";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Skills from "./components/homepage/skills";

// 👇 disable SSR only for components that may use document/window
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
