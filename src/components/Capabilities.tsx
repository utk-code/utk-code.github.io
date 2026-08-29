import { capabilities } from '../data/site';
import { Reveal } from './Reveal';

export function Capabilities() {
  return (
    <section id="capabilities" className="relative px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
                Engineering
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-paper sm:text-5xl md:text-6xl">
                Built to
                <br />
                <span className="text-paper/40">feel instant.</span>
              </h2>
              <p className="mt-6 max-w-xs text-paper-dim">
                This site itself is the demonstration. Fast, accessible, engineered. Nothing
                decorative without a reason.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <ul className="border-t border-line">
                {capabilities.map((c, i) => (
                  <Reveal
                    key={c.label}
                    delay={i * 0.03}
                    as="li"
                    className="group flex items-baseline justify-between gap-6 border-b border-line py-5 transition-colors hover:bg-ink-2"
                  >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-xl font-bold tracking-tight text-paper transition-colors group-hover:text-acid sm:text-2xl">
                          {c.label}
                        </span>
                      </div>
                      <span className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-paper-dim sm:block">
                        {c.note}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-paper/30 transition-colors group-hover:text-acid"
                      >
                        →
                      </span>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
