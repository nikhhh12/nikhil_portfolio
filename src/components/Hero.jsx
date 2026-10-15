import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { heroRoles, profile, socials } from '../data/portfolio';
import RotatingRole from './RotatingRole';

const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen px-5 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            HELLO, I'M
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <div className="mt-3 text-lg font-semibold text-cyan-200 sm:text-xl">
            <RotatingRole roles={heroRoles} />
          </div>

          <p className="mt-4 text-xl font-medium text-slate-200">
            Software Engineer | Backend &amp; Full-Stack Developer
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-[rgba(161,161,170,0.95)]">
            I'm a Computer Science graduate who enjoys building reliable backend systems, full-stack applications, and practical AI-integrated software. I focus on clean API design, database performance, application security, and solving real engineering problems through hands-on projects.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="text-cyan-400 shrink-0" />
            <span>Hyderabad, India · Open to Relocation</span>
          </div>

          {/* Hero CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              <span>Explore My Projects</span>
              <ArrowRight size={17} />
            </a>
            <a
              href={profile.resume}
              download="Nikhil_Kshirasagar_Resume.pdf"
              className="btn-secondary"
              aria-label="Download Nikhil Kshirasagar's resume PDF"
            >
              <span>Download Resume</span>
              <Download size={17} />
            </a>
            <a href="#contact" className="btn-ghost">
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5 text-sm text-slate-300">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                id={`hero-social-${label.toLowerCase()}`}
                href={href}
                target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:text-white"
              >
                <Icon size={14} className="text-cyan-300" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Core Expertise Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-lg rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0B0B0B] p-6 sm:p-7 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Core expertise</span>
                <h3 className="mt-1 text-xl font-bold text-white">Backend &amp; Full-stack systems</h3>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                <Sparkles size={18} />
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span><strong>15+ REST APIs:</strong> Built in Node.js, JavaScript, and SQL during software developer internship at DineGo Technologies.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span><strong>Spring Boot 3 &amp; Java 17:</strong> Controller-Service-Repository architecture, Spring Security, JWT authentication &amp; RBAC.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span><strong>Databases &amp; Caching:</strong> MySQL, PostgreSQL, MongoDB, and Redis cache-aside (cutting p95 lookup latency by 64%).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span><strong>AI &amp; Vector Systems:</strong> Spring AI, RAG document retrieval pipelines, Chroma vector database, and Google Gemini API.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span><strong>Containerization &amp; Migrations:</strong> Docker Compose, Flyway database schema migrations, and 27 passing automated tests.</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">15+ REST APIs</span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">64% Latency Cut</span>
              <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-200">500+ DSA Solved</span>
              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">8.19 CGPA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
