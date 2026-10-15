import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <AnimatedSection id="education" className="z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="ACADEMIC BACKGROUND"
          title="Education and computer science foundation"
          copy="Rigorous coursework in core computer science, systems design, relational data management, and competitive algorithmic problem solving."
        />

        <div className="grid gap-6">
          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <SpotlightCard className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-0.5 text-xs font-semibold text-emerald-200">
                            {edu.score}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <MapPin size={13} className="text-cyan-400" />
                            Hyderabad, Telangana, India
                          </span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-base font-semibold text-cyan-300">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:text-right">
                      <Calendar size={14} className="text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">{edu.description}</p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Academic Areas &amp; Rigor:</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {edu.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-slate-300">
                          <CheckCircle2 size={15} className="mt-0.5 text-cyan-300 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;
