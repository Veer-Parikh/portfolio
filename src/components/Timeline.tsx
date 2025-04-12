import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Jun 2024 – Jul 2024",
      content: (
        <div>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-1">
            <strong>Web Development Intern</strong> at Express Rupya Capital Advisors (On-site, Mumbai)
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
            Built internal web tools using <strong>React.js</strong> and <strong>Express.js</strong>.
          </p>
        </div>
      ),
    },
    {
      title: "Aug 2024 – Oct 2024",
      content: (
        <div>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-1">
            <strong>Backend Developer Intern</strong> at Branding Catalyst Pvt. Ltd. (Remote)
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
            Developed scalable backend APIs with <strong>Express.js</strong>, handled <strong>authentication</strong>, and contributed to production deployments.
          </p>
        </div>
      ),
    },
    {
      title: "Aug 2024 – April 2025",
      content: (
        <div>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-1">
            <strong>Web Scraping Intern</strong> at Express Rupya Capital Advisors (Hybrid)
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
            Working on automated data extraction pipelines using <strong>Selenium</strong> and <strong>Beautiful Soup</strong>.
          </p>
        </div>
      ),
    }
  ];

  return (
    <div className="container py-10">
      <Timeline data={data} />
    </div>
  );
}
