import { motion, useReducedMotion } from 'motion/react';
import { Magnetic } from './Magnetic';

const WORD = 'UTKCODE';

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex h-[100svh] flex-col justify-center overflow-hidden px-5 py-10 sm:px-8"
    >
      {/* backdrop grid hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(242,239,230,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(242,239,230,0.05) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 80%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 80%, black 30%, transparent 75%)',
        }}
      />

      {/* editorial metadata top */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hero-meta relative z-10 mb-auto flex flex-wrap items-start justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim sm:text-[11px]"
      >
        <div className="space-y-1">
          <p>Digital Studio — Est. 2025</p>
          <p>Design / Dev / Experiences</p>
        </div>
        <div className="space-y-1 text-right">
          <p>Independent → Scalable</p>
          <p className="text-acid">Accepting projects</p>
        </div>
      </motion.div>

      {/* THE WORDMARK */}
      <div className="hero-wordmark-wrap relative z-10 -mx-2 leading-[0.78]">
        {reduced ? (
          <h1 className="hero-wordmark font-display font-extrabold tracking-[-0.05em] text-paper">
            UTK<span className="text-paper">CODE</span>
            <span className="inline-block h-[0.6em] w-[0.09em] translate-y-[0.1em] bg-acid" />
          </h1>
        ) : (
          <h1 className="hero-wordmark font-display font-extrabold tracking-[-0.05em] text-paper">
            {WORD.split('').map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
                >
                  {ch}
                </motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block h-[0.6em] w-[0.09em] translate-y-[0.12em] bg-acid"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </h1>
        )}
      </div>

      {/* proposition + CTA row */}
      <div className="hero-prop-row relative z-10 mt-10 flex flex-col gap-8 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between md:mt-14">
        <div>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-prop max-w-md font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl"
          >
            Websites worth <span className="italic">remembering.</span>
          </motion.h2>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-md font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim"
          >
            High-end digital experiences that make your business look as good as it is.
          </motion.p>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6 sm:items-end"
        >
          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-acid px-6 py-4 font-display text-lg font-bold tracking-tight text-ink transition-transform duration-300 hover:scale-[1.03] sm:px-8 sm:py-5 sm:text-xl"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </Magnetic>
          <a
            href="#work"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-paper-dim transition-colors hover:text-acid"
          >
            See the work <span className="animate-bounce">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}