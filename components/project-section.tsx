"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { projects, type Project } from "../data/project-data";
import Link from "next/link";
import Image from "next/image";
import ImgNakula from "../public/images/nakula.webp";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "website", label: "Website" },
  { id: "seo", label: "SEO Impact" },
];

function ProjectDetails({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <p
        className={`mb-3 font-label-code text-xs uppercase tracking-[0.16em] ${project.accentText}`}
      >
        {project.industry}
      </p>
      <h3 className="mb-5 font-headline-md text-headline-md tracking-tight text-on-surface">
        {project.title}
      </h3>
      <p className="mb-7 max-w-xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
        {project.description}
      </p>

      <div className="mb-7 grid grid-cols-2 gap-3">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-outline-variant/70 bg-surface-container-low p-4"
          >
            <p
              className={`mb-1 font-headline-sm text-headline-sm font-bold ${metric.color}`}
            >
              {metric.value}
            </p>
            <p className="font-body-sm text-body-sm leading-snug text-on-surface-variant">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <ul className="mb-7 space-y-3">
        {project.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex items-start gap-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant"
          >
            <span
              className={`material-symbols-outlined mt-0.5 text-lg ${project.accentText}`}
            >
              north_east
            </span>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-outline-variant/70 bg-surface-container px-3 py-1.5 font-label-code text-[11px] text-on-surface-variant"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function BrowserFrame({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-outline-variant/70 bg-surface-container-lowest shadow-2xl shadow-black/30">
      <div className="flex items-center gap-3 border-b border-outline-variant/50 px-4 py-3 sm:px-6">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-error/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary/80" />
        </div>
        <div className="mx-auto max-w-[65%] truncate rounded-md bg-surface-container px-3 py-1 font-label-code text-[10px] text-outline sm:text-xs">
          <Link
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.website}
          </Link>
        </div>
        <span className="material-symbols-outlined text-sm text-outline">
          more_horiz
        </span>
      </div>
      {children}
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <BrowserFrame project={project}>
      <div className="relative min-h-[440px] overflow-hidden p-5 sm:min-h-[520px] sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mb-8 flex items-center justify-between">
          <div>
            <p className="font-headline-sm text-lg font-bold text-on-surface">
              Analytic Reports
            </p>
            <p className="mt-1 font-body-sm text-on-surface-variant">
              Performance overview
            </p>
          </div>
          <span className="rounded-full bg-tertiary/10 px-3 py-1.5 font-label-code text-[10px] text-tertiary">
            LAST REPORT
          </span>
        </div>

        <div className="mb-4 rounded-xl border border-outline-variant/50 bg-surface-container/70 p-4 sm:p-5">
          <Image src={ImgNakula} alt="Nakula website" />
        </div>

        <div className="mb-4 rounded-xl border border-outline-variant/50 bg-surface-container/70 p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">
                Organic traffic
              </p>
              <p className="font-label-code text-[10px] text-outline">
                Last 30 days
              </p>
            </div>
            <span className="font-label-code text-xs text-tertiary">+180%</span>
          </div>
          <div className="flex h-36 items-end gap-2 sm:h-44 sm:gap-3">
            {project.trafficData.map((height, index) => {
              return (
                <div
                  key={index}
                  className="flex h-full flex-1 items-end overflow-hidden rounded-t-md bg-surface-container-high"
                >
                  <div
                    className={`w-full rounded-t-md ${
                      index === 11
                        ? "bg-tertiary"
                        : index > 8
                          ? "bg-primary"
                          : "bg-primary/45"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex justify-between font-label-code text-[9px] text-outline">
            <span>JUN 01</span>
            <span>JUN 15</span>
            <span>JUN 30</span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ["42.8k", "Monthly visits"],
            ["+180%", "Organic growth"],
            ["99", "Lighthouse"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-outline-variant/50 bg-surface-container/80 p-3 sm:p-4"
            >
              <p className="font-headline-sm text-xl font-bold text-on-surface sm:text-2xl">
                {value}
              </p>
              <p className="mt-1 font-label-code text-[9px] text-outline sm:text-[10px]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl border border-outline-variant/40 bg-surface-container/50 p-3">
          <span className="material-symbols-outlined text-base text-primary">
            bolt
          </span>
          <p className="font-body-sm text-on-surface-variant">
            Edge-cached pages responding in{" "}
            <span className="font-semibold text-on-surface">92ms</span>
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectSection() {
  const [projectFilter, setProjectFilter] = useState("all");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const visibleProjects = projects.filter(
    (project) =>
      projectFilter === "all" || project.categories.includes(projectFilter),
  );
  const activeProject =
    visibleProjects.find((project) => project.id === activeProjectId) ??
    visibleProjects[0];
  const activeIndex = visibleProjects.findIndex(
    (project) => project.id === activeProject.id,
  );

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;

    const cards = Array.from(
      showcase.querySelectorAll<HTMLElement>("[data-project-id]"),
    );
    const observer = new IntersectionObserver(
      () => {
        const viewportCenter = window.innerHeight / 2;
        const currentCard = cards
          .map((card) => ({
            id: card.dataset.projectId,
            bounds: card.getBoundingClientRect(),
          }))
          .filter(
            ({ bounds }) =>
              bounds.bottom > window.innerHeight * 0.2 &&
              bounds.top < window.innerHeight * 0.8,
          )
          .sort(
            (a, b) =>
              Math.abs(a.bounds.top + a.bounds.height / 2 - viewportCenter) -
              Math.abs(b.bounds.top + b.bounds.height / 2 - viewportCenter),
          )[0];

        if (currentCard?.id) setActiveProjectId(currentCard.id);
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [projectFilter]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-space-2xl lg:px-12"
        id="projects"
        data-project-filter={projectFilter}
      >
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2 inline-flex items-center gap-2 font-label-code text-label-code uppercase tracking-wider text-primary">
              <span>03 / Case Studies</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
              Selected Works &amp; Measurable Impact
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 rounded-xl bg-surface-container-low p-1.5 shadow-inner"
            id="project-filters"
            aria-label="Filter projects"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`rounded-lg px-3 py-2 font-label-md text-label-md transition-colors sm:px-4 ${
                  projectFilter === filter.id
                    ? "bg-primary font-semibold text-on-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
                aria-pressed={projectFilter === filter.id}
                onClick={() => {
                  const firstProject = projects.find(
                    (project) =>
                      filter.id === "all" ||
                      project.categories.includes(filter.id),
                  );
                  if (firstProject) setActiveProjectId(firstProject.id);
                  setProjectFilter(filter.id);
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12 xl:gap-16">
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:overscroll-contain">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-outline-variant/60 bg-surface-container-low p-7 shadow-xl xl:p-9">
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <AnimatePresence mode="wait">
                  <ProjectDetails
                    key={activeProject.id}
                    project={activeProject}
                    index={activeIndex}
                  />
                </AnimatePresence>
              </div>
            </div>
          </aside>

          <div ref={showcaseRef} className="space-y-12 lg:space-y-[18vh]">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                data-project-id={project.id}
                className="project-showcase-card scroll-mt-24"
              >
                <div className="mb-5 rounded-[1.5rem] border border-outline-variant/60 bg-surface-container-low p-6 lg:hidden">
                  <ProjectDetails
                    project={project}
                    index={visibleProjects.findIndex(
                      (item) => item.id === project.id,
                    )}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0.55, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div
                    className={`pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] ${project.accentGlow} blur-2xl`}
                  />
                  <ProjectPreview project={project} />
                  <div className="mt-3 flex items-center justify-between px-1 font-label-code text-[10px] uppercase tracking-wider text-outline">
                    <span>{project.industry}</span>
                    <span>
                      0
                      {visibleProjects.findIndex(
                        (item) => item.id === project.id,
                      ) + 1}
                    </span>
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
