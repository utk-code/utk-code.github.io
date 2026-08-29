import { services } from '../data/site';
import { Reveal } from './Reveal';

export function Services() {
  return (
    <section id="services" className="relative border-y border-line bg-ink-2 px-5 sm:px-8" style={{ paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: 'clamp(2rem, 5vw, 4rem)' }}>
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">What we do</span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold tracking-tight text-paper" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', marginTop: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
            Capability,
            <br />
            <span className="text-paper/40">not a sales pitch.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3" style={{ marginTop: 'clamp(1rem, 3vw, 2rem)' }}>
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.08} className="bg-ink-2">
              <div className="flex h-full flex-col" style={{ padding: 'clamp(1rem, 2.5vw, 2rem)' }}>
                <div className="flex items-baseline justify-between border-b border-line pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    {s.index}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    Capability
                  </span>
                </div>

                <h3 className="font-display font-extrabold uppercase tracking-tight text-paper" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginTop: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                  {s.name}
                </h3>

                <ul className="space-y-3" style={{ marginTop: 'clamp(1rem, 2.5vw, 2rem)' }}>
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 font-mono text-[13px] tracking-wide text-paper/75"
                    >
                      <span className="text-acid">/</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-10 text-sm leading-relaxed text-paper-dim">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
