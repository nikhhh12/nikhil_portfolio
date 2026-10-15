import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { profile, socials } from '../data/portfolio';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message with at least 10 characters.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const payload = new FormData();
    payload.append('name', formData.name.trim());
    payload.append('email', formData.email.trim());
    payload.append('subject', formData.subject.trim() || 'New Portfolio Message from ' + formData.name.trim());
    payload.append('message', formData.message.trim());
    payload.append('_captcha', 'false');
    payload.append('_template', 'table');
    payload.append('_replyto', formData.email.trim());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Server returned error status');
      }

      setStatus('sent');
      setFormData(initialForm);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.warn('Form submission service error, falling back to direct email:', error);
      setStatus('error');
      setErrorMessage(
        `Unable to reach the automated form endpoint. Please email me directly at ${profile.email}.`
      );
    }
  };

  return (
    <AnimatedSection id="contact" className="z-10 pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="CONTACT"
          title="Let's Connect"
          copy="I'm interested in software engineering opportunities where I can contribute to backend systems, full-stack applications, and practical AI-integrated products. Feel free to reach out to discuss opportunities or technical projects."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Contact Form Card */}
          <SpotlightCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  <span>Name <span className="text-cyan-400">*</span></span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    disabled={status === 'sending'}
                    className="form-field"
                    id="contact-name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  <span>Email <span className="text-cyan-400">*</span></span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    disabled={status === 'sending'}
                    className="form-field"
                    id="contact-email"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-300">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineer Role / Project Inquiry"
                  disabled={status === 'sending'}
                  className="form-field"
                  id="contact-subject"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-300">
                <span>Message <span className="text-cyan-400">*</span></span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your team, role, or technical project."
                  disabled={status === 'sending'}
                  className="form-field resize-none"
                  id="contact-message"
                />
              </label>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary w-full justify-center"
                id="contact-submit"
              >
                {status === 'sent' ? (
                  <>
                    <span>Message Sent Successfully</span>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                  </>
                ) : status === 'sending' ? (
                  <>
                    <span>Sending Message...</span>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {status === 'sent' ? (
                <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-xs text-emerald-200">
                  Thank you! Your message has been sent. I'll get back to you shortly.
                </p>
              ) : null}

              {status === 'error' ? (
                <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-xs text-rose-200">
                  <p>{errorMessage}</p>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(
                      formData.subject || 'Portfolio Inquiry'
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="mt-2 inline-flex font-semibold text-white underline hover:text-cyan-300"
                  >
                    Click here to open email client directly
                  </a>
                </div>
              ) : null}
            </form>
          </SpotlightCard>

          {/* Direct Info and Social Cards */}
          <div className="grid gap-6">
            <SpotlightCard className="p-6 sm:p-8">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/20">
                <Mail size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">Direct contact</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fastest way to reach me for full-time engineering roles, internships, or project discussions.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
                >
                  <Mail size={16} className="text-cyan-400" />
                  <span>{profile.email}</span>
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
                >
                  <Phone size={16} className="text-cyan-400" />
                  <span>{profile.phone}</span>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300">
                  <MapPin size={16} className="text-cyan-400 shrink-0" />
                  <span>{profile.location} (Willing to Relocate)</span>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">Social links &amp; profiles</h3>
              <p className="mt-1 text-xs text-slate-400">Explore code, profiles, and problem-solving history.</p>
              
              <div className="mt-5 grid gap-2.5">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    id={`contact-social-${label.toLowerCase()}`}
                    href={href}
                    target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                    aria-label={`Open ${label}`}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3.5 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-cyan-300" />
                      <span className="font-medium">{label}</span>
                    </div>
                    <span className="text-xs text-slate-500">Visit ↗</span>
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
