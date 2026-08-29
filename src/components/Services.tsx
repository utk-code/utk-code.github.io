import { services } from '../data/site';
import { Reveal } from './Reveal';

export function Services() {
  return (
    <section id="services" className="relative border-y border-line bg-ink-2 px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">What we do</span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-paper sm:text-6xl md:text-7xl">
            Capability,
            <br />
            <span className="text-paper/40">not a sales pitch.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.08} className="bg-ink-2">
              <div className="flex h-full flex-col p-8 md:p-10">
                <div className="flex items-baseline justify-between border-b border-line pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    {s.index}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                    Capability
                  </span>
                </div>

                <h3 className="mt-6 font-display text-4xl font-extrabold uppercase tracking-tight text-paper">
                  {s.name}
                </h3>

                <ul className="mt-8 space-y-3">
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
