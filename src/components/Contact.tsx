import { motion, useReducedMotion } from 'motion/react';
import { Magnetic } from './Magnetic';
import { Reveal } from './Reveal';
import { site } from '../data/site';

export function Contact() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-between overflow-hidden border-t border-line px-5 py-24 sm:px-8 md:py-36"
    >
      {/* ghost accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 select-none font-display text-[38vw] font-extrabold leading-none tracking-tighter text-paper/[0.03] lg:block"
      >
        U
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        <Reveal className="mb-10 flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">Let's talk</span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        {reduced ? (
          <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-paper sm:text-7xl md:text-[9vw]">
            Your website
            <br />
            could look <span className="whitespace-nowrap">better.</span>
            <br />
            <span className="text-acid">Let's fix that.</span>
          </h2>
        ) : (
          <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-paper sm:text-7xl md:text-[9vw]">
            <Line delay={0}>Your website</Line>
            <Line delay={0.08}>
              could look <span className="whitespace-nowrap">better.</span>
            </Line>
            <Line delay={0.16}>
              <span className="text-acid">Let's fix that.</span>
            </Line>
          </h2>
        )}

        <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={0.1}>
            <p className="max-w-sm text-lg text-paper-dim">
              One great website changes how your business is perceived. Tell us what you're building
              and we'll take it from there.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-3 bg-acid px-8 py-5 font-display text-xl font-bold tracking-tight text-ink transition-transform duration-300 hover:scale-[1.03] sm:px-10 sm:py-6 sm:text-2xl"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* contact strip */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-[1500px]">
        <Reveal>
          <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
              <p className="text-paper">{site.founderName}</p>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-acid">
                {site.email}
              </a>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">{site.domain}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">Design / Development / Experiences</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
