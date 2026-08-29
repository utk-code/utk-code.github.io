import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cx } from '../lib/cx';
import { site } from '../data/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-mono text-[13px] font-semibold tracking-tight text-paper hover:text-acid"
          aria-label="UTKCODE — back to top"
        >
          UTKCODE<span className="text-acid">©</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group hidden items-center gap-2 border border-line-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-acid hover:text-acid sm:inline-flex"
        >
          Start a project
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.header>
  );
}
