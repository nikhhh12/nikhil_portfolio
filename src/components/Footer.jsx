import { navItems, profile, socials } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#04060b] px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand & Tagline */}
          <div>
            <span className="text-lg font-bold tracking-tight text-white">{profile.name}</span>
            <p className="mt-1.5 text-sm text-slate-400">
              {profile.headline}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                id={`footer-social-${label.toLowerCase()}`}
                href={href}
                target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-slate-500 sm:text-left">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
