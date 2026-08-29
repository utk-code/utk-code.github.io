import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export function Cursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40 });
  const sy = useSpring(y, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine || reduced) {
      document.body.classList.remove('has-cursor');
      return;
    }
    document.body.classList.add('has-cursor');
    setEnabled(true);
    return () => document.body.classList.remove('has-cursor');
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setActive(Boolean(target?.closest('a, button, [role="button"]')));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: active ? 48 : 12,
          height: active ? 48 : 12,
          backgroundColor: active ? 'rgba(235,255,0,0.9)' : 'rgba(242,239,230,0.85)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
    </motion.div>
  );
}
