import { motion, useReducedMotion } from 'motion/react';
import { Magnetic } from './Magnetic';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
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

      {/* THE WORDMARK */}
      <div className="hero-wordmark-wrap relative z-10 -mx-2 leading-[0.78]">
        {reduced ? (
          <h1 className="hero-wordmark font-display font-extrabold tracking-[-0.05em] text-paper">
            UTK<br /><span className="text-paper">CODE</span>
            <span className="block h-[0.6em] w-[0.09em] translate-y-[0.1em] bg-acid" />
          </h1>
        ) : (
          <h1 className="hero-wordmark font-display font-extrabold tracking-[-0.05em] text-paper">
            <span className="block">UTK</span>
            <span className="block text-paper">CODE</span>
            <span className="block h-[0.6em] w-[0.09em] translate-y-[0.1em] bg-acid" />
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
            <button
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 bg-acid px-6 py-4 font-display text-lg font-bold tracking-tight text-ink transition-transform duration-300 hover:scale-[1.03] sm:px-8 sm:py-5 sm:text-xl"
            >
              Contact Us
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">↗</span>
            </button>
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