"use client";
import { useEffect, useState } from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IconHome, IconTools, IconFolders, IconTrophy, IconBriefcase, IconMessage } from "@tabler/icons-react";
import Spline from "./components/Spline";
import Navbar from "./components/Navbar";
import { TimelineDemo } from "./components/Timeline";
// import { HeroSection } from "./components/HeroSection";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconTools className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolders className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Achievements",
      link: "#achievements",
      icon: <IconTrophy className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  if (!isClient) return null;

  return (
    <div className="relative w-full font-sans scroll-smooth">
      <FloatingNav navItems={navItems} />
      <section id="home" className="relative h-screen w-full">
        <Navbar />
        <Spline />
      </section>

      {/* Other Sections */}
      <section id="skills" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900 text-4xl font-bold text-center">
        Skills Section
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-white dark:bg-neutral-800 text-4xl font-bold text-center">
        Projects Section
      </section>

      <section id="achievements" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900 text-4xl font-bold text-center">
        Achievements Section
      </section>

      <section id="experience" className="h-screen flex items-center justify-center bg-white dark:bg-neutral-800 text-4xl font-bold text-center">
        <TimelineDemo />
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900 text-4xl font-bold text-center">
        Contact Section
      </section>
    </div>
  );
}
