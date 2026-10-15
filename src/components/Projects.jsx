import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { projects } from '../data/portfolio';

const SectionBlock = ({ title, children }) => (
  <div className="border-t border-white/10 pt-4">
    <h4 className="text-sm font-semibold text-white">{title}</h4>
    <div className="mt-2 text-sm leading-6 text-slate-400">{children}</div>
  </div>
);

const TextList = ({ items }) => (
  <ul className="grid gap-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TechStack = ({ stack }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {Object.entries(stack).map(([category, items]) => (
      <div key={category} className="rounded-2xl border border-white/10 bg-black/20 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">{category}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {items.map((item) => (
            <span key={item} className="rounded-full bg-white/[0.065] px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/10">
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="FEATURED PROJECTS"
          title="Projects presented like products, not assignments."
          copy="Each build is framed around the real problem, product decision, architecture, technical challenges, and recruiter signal."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, subtitle, description, features, tech, githubUrl, github, liveUrl, image, icon: Icon, metric, metrics, caseStudy }) => {
            const effectiveGithub = githubUrl || github;
            return (
              <article key={title} className="flex">
                <SpotlightCard className="flex w-full flex-col overflow-hidden p-6 sm:p-7">
                  {/* Visual Project Preview */}
                  {image ? (
                    <div className="relative mb-6 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner group-hover:border-cyan-400/20">
                      <img
                        src={image}
                        alt={`${title} Preview`}
                        className="h-44 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
                    </div>
                  ) : null}

                  {/* Top Category & Metric */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 text-cyan-200 ring-1 ring-white/10">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {metric}
                    </span>
                  </div>

                  {/* Titles & Description */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">{subtitle}</p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>

                    {/* Verified Metrics Row */}
                    {metrics ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {metrics.map((m) => (
                          <span key={m.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                            <strong className="text-cyan-300">{m.value}</strong>
                            <span className="ml-1.5 text-slate-400">{m.label}</span>
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Core Product Value */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Core product value</p>
                    <div className="mt-2.5 grid gap-2">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tech.map((item) => (
                      <span key={item} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Data-driven GitHub and Live Demo buttons */}
                  {(effectiveGithub || liveUrl) ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {effectiveGithub ? (
                        <a
                          href={effectiveGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link flex-1"
                          aria-label={`View ${title} on GitHub`}
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                      ) : null}
                      {liveUrl ? (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link flex-1"
                          aria-label={`Open ${title} live demo`}
                        >
                          <ArrowUpRight size={16} />
                          <span>Live Demo</span>
                        </a>
                      ) : null}
                    </div>
                  ) : null}

                {/* Expandable 15-Point Product Case Study */}
                <details className="group mt-6 rounded-xl border border-white/10 bg-black/25">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white">
                    <span>Product Case Study</span>
                    <ChevronDown size={16} className="transition group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-4 px-4 pb-5 pt-2">
                    {caseStudy.assumption ? (
                      <p className="rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-xs leading-5 text-amber-100">
                        {caseStudy.assumption}
                      </p>
                    ) : null}

                    <SectionBlock title="1. Elevator Pitch">
                      <p>{caseStudy.pitch}</p>
                    </SectionBlock>
                    <SectionBlock title="2. Problem Statement">
                      <TextList items={caseStudy.problem} />
                    </SectionBlock>
                    <SectionBlock title="3. Existing Solutions and Limitations">
                      <TextList items={caseStudy.limitations} />
                    </SectionBlock>
                    <SectionBlock title="4. Our Solution">
                      <TextList items={caseStudy.solution} />
                    </SectionBlock>
                    <SectionBlock title="5. Key Innovations">
                      <TextList items={caseStudy.innovations} />
                    </SectionBlock>
                    <SectionBlock title="6. Core Features">
                      <TextList items={caseStudy.features} />
                    </SectionBlock>
                    <SectionBlock title="7. Technical Architecture">
                      <TextList items={caseStudy.architecture} />
                    </SectionBlock>
                    <SectionBlock title="8. Challenges Solved">
                      <TextList items={caseStudy.challenges} />
                    </SectionBlock>
                    <SectionBlock title="9. Real-World Impact">
                      <TextList items={caseStudy.impact} />
                    </SectionBlock>
                    <SectionBlock title="10. Why Recruiters Should Care">
                      <TextList items={caseStudy.recruiter} />
                    </SectionBlock>
                    <SectionBlock title="11. Future Roadmap">
                      <TextList items={caseStudy.roadmap} />
                    </SectionBlock>
                    <SectionBlock title="12. Tech Stack Breakdown">
                      <TechStack stack={caseStudy.techStack} />
                    </SectionBlock>
                    <SectionBlock title="13. Resume Description">
                      <TextList items={caseStudy.resume} />
                    </SectionBlock>
                    <SectionBlock title={effectiveGithub ? "14. GitHub README Summary" : "14. System & Architecture Summary"}>
                      <p>{caseStudy.readme}</p>
                    </SectionBlock>
                    <SectionBlock title="15. Portfolio Summary">
                      <p>{caseStudy.portfolio}</p>
                    </SectionBlock>
                  </div>
                </details>
              </SpotlightCard>
            </article>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
