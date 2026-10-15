import { motion } from 'framer-motion';
import { BriefcaseBusiness, Calendar, CheckCircle2, MapPin, Users2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { experience, journey, leadership } from '../data/portfolio';

const Experience = () => {
  return (
    <AnimatedSection id="experience" className="z-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="EXPERIENCE & LEADERSHIP"
          title="Industry experience and community leadership"
          copy="Proven track record in production backend development, REST API design, database query optimization, and leading a technical student developer community."
        />

        {/* Professional Experience & Leadership Cards */}
        <div className="grid gap-6">
          {/* Work Experience */}
          {experience.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <SpotlightCard className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-0.5 text-xs font-semibold text-cyan-200">
                            {exp.type}
                          </span>
                          <span className="text-xs font-medium text-slate-400">Hyderabad, India</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-base font-semibold text-cyan-300">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:text-right">
                      <Calendar size={14} className="text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">{exp.description}</p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Technical Contributions:</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-300">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="mt-1 text-cyan-400 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}

          {/* Leadership & Responsibility */}
          {leadership.map((lead, idx) => {
            const Icon = lead.icon;
            return (
              <motion.div
                key={lead.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 1) * 0.08 }}
              >
                <SpotlightCard className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-purple-400/30 bg-purple-400/10 text-purple-200">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-0.5 text-xs font-semibold text-purple-200">
                            Community Leadership
                          </span>
                          <span className="text-xs font-medium text-slate-400">50+ Members</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-white">{lead.role}</h3>
                        <p className="text-base font-semibold text-purple-300">{lead.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:text-right">
                      <Calendar size={14} className="text-purple-400" />
                      <span>{lead.period}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">{lead.description}</p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Leadership Highlights:</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-300">
                      {lead.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="mt-1 text-purple-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {lead.skills.map((skill) => (
                      <span key={skill} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Journey Timeline */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">ENGINEERING TIMELINE</span>
            <h3 className="mt-1 text-2xl font-bold text-white">Milestones and growth track</h3>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-fuchsia-400/0 md:block" />
            <div className="grid gap-5">
              {journey.map(({ title, detail, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  className="relative md:pl-16"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-2xl border border-cyan-300/20 bg-[#07101a] text-cyan-100 shadow-lg shadow-cyan-400/10 md:grid">
                    <Icon size={18} />
                  </div>
                  <SpotlightCard className="p-6">
                    <div className="flex gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-cyan-200 md:hidden">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-cyan-300">0{index + 1}</p>
                        <h4 className="mt-1 text-lg font-bold text-white">{title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
