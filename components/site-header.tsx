const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Stack", id: "stack" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <a className="flex items-center gap-space-sm group" href="#home">
            <span
              aria-hidden="true"
              className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold"
            >
              R
            </span>
            <span className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
                Rodney
              </span>
            </span>
          </a>
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
            </span>
            <span className="font-label-code text-label-code text-tertiary tracking-wide">
              Available for hire
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-space-lg">
          {navigation.map((item, index) => (
            <a
              key={item.id}
              aria-current={index === 0 ? "page" : undefined}
              className={`transition-colors ${
                index === 0
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]"
            href="#contact"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
