"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data/caseStudies";
import { Reveal } from "@/components/motion/Reveal";

interface WorkGridProps {
  caseStudies: CaseStudy[];
}

export function WorkGrid({ caseStudies }: WorkGridProps) {
  const projectTypes = useMemo(
    () => Array.from(new Set(caseStudies.map((study) => study.projectType))),
    [caseStudies]
  );
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.projectType === activeFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {["All", ...projectTypes].map((type) => {
          const isActive = activeFilter === type;
          return (
            <button
              key={type}
              type="button"
              onClick={() => setActiveFilter(type)}
              className={`rounded-button border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-orange-red bg-orange-red text-white"
                  : "border-silver-light text-black hover:border-orange-red hover:text-orange-red"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudies.map((study, index) => (
          <Reveal variant="media" key={study.slug} delay={index * 60}>
            <Link href={`/work/${study.slug}`} className="group block">
              <div className="aspect-[4/3] w-full overflow-hidden bg-purple-wash">
                <div className="h-full w-full bg-purple-wash transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-silver">
                {study.projectType} &middot; {study.year}
              </p>
              <h3 className="mt-2 font-display text-2xl group-hover:text-orange-red transition-colors">
                {study.client}
              </h3>
              <p className="mt-2 text-sm text-black/70">{study.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
