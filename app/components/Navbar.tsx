"use client";

import { useState } from "react";
// import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-wide text-neutral-800 dark:text-white">
          MyPortfolio
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-neutral-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
