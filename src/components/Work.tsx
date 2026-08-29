import { motion, useReducedMotion } from 'motion/react';
import { projects } from '../data/site';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';
import { Magnetic } from './Magnetic';
import { cx } from '../lib/cx';
import type { Project } from '../types';

export function Work() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        {/* section header */}
        <Reveal className="mb-4 flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">Selected Work</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">2025 — 2026</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-5xl font-extrabold tracking-tight text-paper sm:text-7xl md:text-8xl">
            The Work.
          </h2>
        </Reveal>

        {/* Dental Studio flagship header */}
        <Reveal delay={0.1}>
          <div className="mt-16 border-t border-line pt-8 md:mt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">Flagship</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
              Dental Studio.
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
              One industry. Three directions.
            </p>
          </div>
        </Reveal>

        {/* runway */}
        <div className="mt-20 space-y-32 md:space-y-44">
          {projects.map((p) => (
            <ProjectRow key={p.index} project={p} reduced={reduced} />
          ))}
        </div>

        {/* next website flex */}
        <Reveal className="mt-24 mb-16 border-t border-line pt-8 md:mt-32 md:mb-20 md:pt-12">
          <p className="max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-paper/80 sm:text-4xl">
            Your next website <span className="text-acid">could be here.</span>
          </p>
        </Reveal>

        {/* visual spacer between Work and Services */}
        <div className="h-24 md:h-32 lg:h-40" />
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  reduced,
}: {
  project: Project;
  reduced: boolean;
}) {
  const { layout } = project;

  if (layout === 'editorial') {
    return (
      <article className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ProjectMeta project={project} />
        </div>
        <div className="lg:col-span-8">
          <VisualBlock project={project} reduced={reduced} className="aspect-[16/10]" />
        </div>
      </article>
    );
  }

  if (layout === 'split') {
    return (
      <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <VisualBlock project={project} reduced={reduced} className="aspect-[10/12]" />
        </div>
        <div className="flex items-center lg:col-span-5">
          <ProjectMeta project={project} />
        </div>
      </article>
    );
  }

  // full-width overlay band
  return (
    <article className="group relative overflow-hidden">
      <VisualBlock
        project={project}
        reduced={reduced}
        className="aspect-[16/9] w-full md:aspect-[4/3]"
        labels={false}
      />
      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-ink/80 via-transparent to-ink/30 p-7 sm:p-10">
        <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-paper/85 sm:text-[11px]">
          <span className="rounded-sm bg-ink/40 px-2 py-1">Full-Bleed — {project.category}</span>
          <span className="rounded-sm bg-ink/40 px-2 py-1">{project.year}</span>
        </div>
        <div>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-4xl font-extrabold text-acid sm:text-6xl">
              {project.index}
            </span>
            <h3 className="font-display text-4xl font-extrabold tracking-tight text-paper sm:text-6xl md:text-7xl">
              {project.title}
            </h3>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
            {project.subtitle} — {project.category}
          </p>
          <p className="mt-2 max-w-xl text-paper/90 sm:text-lg">{project.description}</p>
        </div>
      </div>
    </article>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <Reveal>
      <div>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-6xl font-extrabold tracking-tight text-paper/15 sm:text-7xl">
            {project.index}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
            {project.year}
          </span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-paper sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
          {project.subtitle} — {project.category}
        </p>

        <p className="mt-5 max-w-md text-paper-dim">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
          {project.focus.map((f) => (
            <li key={f} className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/60">
              {f}
            </li>
          ))}
        </ul>

        <Magnetic className="mt-7 inline-block">
          <a
            href={project.url || '#contact'}
            {...(project.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={cx(
              'group inline-flex items-center gap-2 border border-line-strong px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em]',
              'text-paper transition-colors hover:border-acid hover:text-acid'
            )}
          >
            Explore project
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </Magnetic>
      </div>
    </Reveal>
  );
}

function VisualBlock({
  project,
  reduced,
  className,
  labels = true,
}: {
  project: Project;
  reduced: boolean;
  className?: string;
  labels?: boolean;
}) {
  return (
    <Reveal y={40}>
      <motion.div
        className="group relative overflow-hidden"
        whileHover={reduced ? undefined : { scale: 1.012 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProjectVisual
          visual={project.visual}
          className={cx('w-full overflow-hidden', className)}
        />
        {labels && (
          <>
            <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80 mix-blend-difference">
              {project.visual.label}
            </span>
            <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80 mix-blend-difference">
              {project.visual.motif}
            </span>
          </>
        )}
      </motion.div>
    </Reveal>
  );
}
