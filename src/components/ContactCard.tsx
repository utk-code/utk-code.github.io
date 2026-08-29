import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface ContactCardProps {
  open: boolean;
  onClose: () => void;
}

export function ContactCard({ open, onClose }: ContactCardProps) {
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Contact UTKCODE"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" aria-hidden="true" />

          <motion.div
            key="card"
            role="document"
            className="relative w-full border-t border-line bg-ink-2/95 backdrop-blur-md sm:mx-4 sm:w-full sm:max-w-md sm:border sm:border-line"
            initial={reduced ? false : { y: 40, opacity: 0 }}
            animate={reduced ? undefined : { y: 0, opacity: 1 }}
            exit={reduced ? undefined : { y: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* header strip */}
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper">
                Contact<span className="text-acid"> UTKCODE</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim transition-colors hover:text-acid"
              >
                Close ✕
              </button>
            </div>

            <div className="px-6 pb-6 pt-5">
              <p className="max-w-xs font-display text-2xl font-bold leading-tight tracking-tight text-paper">
                Let's build something <span className="text-acid">worth remembering.</span>
              </p>

              <div className="mt-6 divide-y divide-line border-t border-line">
                <a
                  href={`mailto:${'utkarshpgedam@gmail.com'}`}
                  className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:bg-ink-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">Email</span>
                  <span className="truncate text-right font-mono text-[13px] tracking-tight text-paper transition-colors group-hover:text-acid">
                    utkarshpgedam@gmail.com
                  </span>
                </a>

                <a
                  href="https://wa.me/917666916941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:bg-ink-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">WhatsApp</span>
                  <span className="font-mono text-[13px] tracking-tight text-paper transition-colors group-hover:text-acid">
                    7666916941
                  </span>
                </a>
              </div>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper-dim">
                Reply within 24 hours
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
