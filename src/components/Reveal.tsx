import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: 'div' | 'li' | 'span' | 'section' | 'p';
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const Tag = motion[as];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
