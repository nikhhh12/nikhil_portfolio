import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { skillGroups } from '../data/portfolio';

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="TECHNICAL SKILLS"
          title="A practical engineering toolkit"
          copy="Focused on production-ready backend systems, full-stack architecture, database optimization, testing, developer infrastructure, and pragmatic AI integration."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, skills, accent }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={index === 1 || index === 5 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <SpotlightCard className="flex h-full flex-col p-5">
                {/* Top Accent Line */}
                <div className={`mb-4 h-1.5 w-full rounded-full bg-gradient-to-r ${accent}`} />

                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-white">
                    <Icon size={19} className="text-cyan-200" />
                  </div>
                  <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
                </div>

                {/* Skill Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
