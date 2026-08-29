import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="transition-colors hover:text-acid">
          UTKCODE<span className="text-acid">©</span> {new Date().getFullYear()}
        </a>
        <span>Websites worth remembering.</span>
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-acid"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
