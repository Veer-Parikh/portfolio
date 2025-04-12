"use client";
import Spline from "@splinetool/react-spline";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function SplineComponent() {
  const words = [
    { text: "Hi,", className: "text-slate-500" },
    { text: "I", className: "text-slate-500" },
    { text: "am", className: "text-slate-500" },
    { text: "Veer", className: "text-slate-500" },
    { text: "Parikh", className: "text-fuchsia-500 dark:text-fuchsia-400" },
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Spline 3D Background */}
      <Spline scene="https://prod.spline.design/j6mV2-IXlylq-y2O/scene.splinecode" /> {/* https://prod.spline.design/oaBr4b0V0QifXZ12/scene.splinecode */}

      {/* Overlay content */}
      <div className="absolute top-24 left-12 z-10 flex flex-col items-start text-left max-w-[90%] sm:max-w-[70%] pointer-events-none">
        <div className="pointer-events-auto">
          <TypewriterEffectSmooth
            words={words}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          />
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 font-medium italic max-w-xl">
            "My code never has bugs. It just develops random features"
          </p>
        </div>
      </div>
    </section>
  );
}
