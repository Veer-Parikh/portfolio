"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const techStacks = [
    // Backend
    "Node.js", "Express", "Fastify", "MongoDB", "Supabase", "MySQL",
    "PostgreSQL", "Neon", "Render", "Prisma", "Mongoose", "Firebase",

    // Frontend
    "Next.js", "React.js", "MUI", "Tailwind CSS", "shadcn/ui", "vercel",

    // Languages
    "Java", "Python", "TypeScript", "JavaScript", "C",

    // Extras
    "Matplotlib", "Pandas", "NumPy"
  ];

  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={techStacks} />
    </div>
  );
}
