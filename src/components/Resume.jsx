import { Download, Eye, FileText } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { profile, resumeHighlights } from '../data/portfolio';

const Resume = () => {
  return (
    <AnimatedSection id="resume" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="RESUME"
          title="A quick recruiter snapshot, ready to download."
          copy="The resume highlights production backend development, Spring Boot 3, Java 17, React/Next.js full-stack applications, Redis caching, and applied AI systems."
        />

        <SpotlightCard className="p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            {/* Left Preview Card */}
            <div className="rounded-2xl border border-white/10 bg-[#080c16]/85 p-6 shadow-2xl shadow-black/25">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Resume snapshot</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{profile.name}</h3>
                  <p className="text-xs text-slate-400">{profile.headline}</p>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  <FileText size={20} />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {resumeHighlights.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
                      <Icon size={16} />
                    </span>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Details & CTA */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">Recruiter-ready</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white">Software Engineer</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Early-career software engineer focused on building robust REST APIs, scalable backend systems, database performance optimization, and practical AI-integrated products. Experienced with Spring Boot 3, Java 17, Node.js, Redis cache-aside, React/Next.js, and RAG vector search pipelines.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">B.Tech CSE (8.19 CGPA)</span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">Hyderabad, India</span>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">Willing to relocate</span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={profile.resume}
                  download="Nikhil_Kshirasagar_Resume.pdf"
                  className="btn-primary"
                  aria-label="Download Nikhil Kshirasagar's resume PDF"
                >
                  <span>Download Resume</span>
                  <Download size={18} />
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="Preview Nikhil Kshirasagar's resume in a new tab"
                >
                  <span>Preview PDF</span>
                  <Eye size={18} />
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </AnimatedSection>
  );
};

export default Resume;
