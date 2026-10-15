import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { aboutKeywords, aboutStats, focusAreas } from '../data/portfolio';

const About = () => {
  return (
    <AnimatedSection id="about" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="ABOUT"
          title="Software Engineer — backend & full-stack systems with practical AI integration."
          copy="I'm a Computer Science and Engineering graduate from CMR Technical Campus, Hyderabad, with a strong interest in software engineering, backend development, full-stack applications, and AI-integrated systems. I enjoy understanding how applications work end to end—from designing REST APIs and database schemas to implementing authentication, improving query performance, and building intuitive user interfaces. Through my internship, personal projects, and leadership experience, I've developed a practical approach to problem-solving, collaboration, debugging, and continuous learning. I'm looking for opportunities where I can contribute to real software products, strengthen my engineering fundamentals, and grow as a software engineer."
        />

        {/* Verified Factual Statistics Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map(({ value, label, sub }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <SpotlightCard className="p-5">
                <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                    {value}
                  </span>
                </p>
                <h4 className="mt-2 text-sm font-semibold text-slate-200">{label}</h4>
                <p className="mt-1 text-xs text-slate-400">{sub}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* 4 Focus Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, copy }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <SpotlightCard className="h-full p-6">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.07] text-cyan-200 ring-1 ring-white/10">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Engineering Map Card */}
        <SpotlightCard className="mt-8 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">Engineering map</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                From robust API design to applied AI systems.
              </h3>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>Software engineering fundamentals: OOP, clean architecture, modular service boundaries, and root-cause analysis.</li>
                <li>Backend systems: REST API development in Java/Spring Boot &amp; Node.js, request validation, and structured error handling.</li>
                <li>Performance &amp; Caching: Redis cache-aside invalidation cutting p95 lookup latency from 180ms to 65ms (64% reduction).</li>
                <li>Database modeling: MySQL, PostgreSQL, and MongoDB with versioned schema migrations via Flyway.</li>
                <li>Applied AI &amp; Vector Search: Spring AI with Chroma vector DB for RAG workflows with role-scoped tools.</li>
                <li>500+ DSA problems solved across LeetCode and competitive programming platforms.</li>
                <li>Open to Software Engineer, Backend Developer, and Full-Stack roles (Hyderabad or Relocation).</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {aboutKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-white/[0.08] hover:text-white"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </AnimatedSection>
  );
};

export default About;
