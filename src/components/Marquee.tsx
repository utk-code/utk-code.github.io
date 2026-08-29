import { cx } from '../lib/cx';

const ITEMS = [
  'Design',
  'Development',
  'Digital Experiences',
  'Art Direction',
  'Interfaces',
  'Business Websites',
  'Motion',
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2 py-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent"
      />
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight text-paper/45 sm:text-4xl"
          >
            <span className="px-6">{item}</span>
            <span className={cx('text-acid')}>*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
