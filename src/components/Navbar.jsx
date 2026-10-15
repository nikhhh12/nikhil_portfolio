import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);

      let current = 'home';
      for (const item of navItems) {
        const id = item.href.replace('#', '');
        const section = document.getElementById(id);
        if (section && window.scrollY + 160 >= section.offsetTop) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-[#05070d]/85 shadow-2xl shadow-black/30 backdrop-blur-2xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Desktop left balance spacer for centered pill navigation */}
        <div className="hidden lg:block lg:w-28" aria-hidden="true" />

        {/* Desktop Floating Pill Navigation */}
        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/10"
                    transition={{ type: 'spring', stiffness: 360, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3 ml-auto lg:ml-0">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20 sm:inline-flex"
            aria-label="View Nikhil Kshirasagar's resume PDF"
          >
            Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="border-t border-white/10 bg-[#05070d]/98 px-5 pb-6 pt-3 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-auto grid max-w-7xl gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigate}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href={profile.resume}
                  download="Nikhil_Kshirasagar_Resume.pdf"
                  onClick={handleNavigate}
                  className="block rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-center text-sm font-semibold text-cyan-100"
                  aria-label="Download Nikhil Kshirasagar's resume PDF"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
