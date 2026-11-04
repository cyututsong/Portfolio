const socialLinks = [
  { label: "GitHub Repository", icon: "code" },
  { label: "LinkedIn Profile", icon: "badge" },
  { label: "Twitter Profile", icon: "chat" },
  { label: "Direct Email", icon: "mail", href: "mailto:hello@rodney.dev" },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-xl">
          <div className="flex flex-col items-center md:items-start gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span
                aria-hidden="true"
                className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center font-headline-sm font-bold"
              >
                R
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Rodney
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
              Architecting high-performance web applications and search
              optimization strategies.
            </p>
          </div>

          <div className="flex items-center gap-space-md">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                aria-label={link.label}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
                href={link.href ?? "#"}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <p className="font-body-sm text-body-sm text-outline">
            © 2024 Rodney. Engineered for organic scale &amp; velocity. All
            rights reserved.
          </p>
          <span className="font-label-code text-label-code text-outline">
            100% LIGHTHOUSE COMPLIANT
          </span>
        </div>
      </div>
    </footer>
  );
}
