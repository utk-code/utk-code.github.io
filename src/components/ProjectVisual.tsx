import type { Visual } from '../types';

interface Props {
  visual: Visual;
  className?: string;
}

export function ProjectVisual({ visual, className }: Props) {
  if (visual.motif === 'grid') {
    return (
      <div className={className}>
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(135deg, ${visual.tone}, ${visual.tone2})`,
          }}
        >
          <GridOverlay />
        </div>
      </div>
    );
  }

  if (visual.motif === 'orbit') {
    return (
      <div className={className}>
        <div
          className="relative flex h-full w-full items-center justify-center overflow-hidden"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${visual.tone}, ${visual.tone2} 70%)`,
          }}
        >
          <span
            aria-hidden="true"
            className="absolute h-[45%] w-[45%] rounded-full border border-paper/30"
          />
          <span
            aria-hidden="true"
            className="absolute h-[68%] w-[68%] rounded-full border border-paper/20"
          />
          <span
            aria-hidden="true"
            className="absolute h-[92%] w-[92%] rounded-full border border-paper/10"
          />
        </div>
      </div>
    );
  }

  // type motif
  return (
    <div className={className}>
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${visual.tone2}, ${visual.tone} 160%)`,
        }}
      >
        <span className="font-display text-[16vw] font-extrabold tracking-tighter text-paper/90 mix-blend-overlay md:text-[9vw]">
          U
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 28px)',
          }}
        />
      </div>
    </div>
  );
}

function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)',
        backgroundSize: '8.33% 100%, 100% 16.66%',
      }}
    />
  );
}
