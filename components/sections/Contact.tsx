'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Send } from 'lucide-react';

// ── Color palette from the image ──────────────────────────────────────────────
// #000000  pure black   → background
// #025067  deep teal    → card surfaces / dark fills
// #0B9FBD  cyan         → primary accent (CTAs, labels, icons)
// #6C0E42  deep magenta → secondary accent (icon backgrounds, gradient)
// #B31B6F  vivid magenta→ hot accent (secondary buttons, animated dots, highlights)
// ─────────────────────────────────────────────────────────────────────────────

const FORMSPREE_URL = 'https://formspree.io/f/meedawvj';
const RECAPTCHA_SITE_KEY = '6Ldn7fQsAAAAABiFS0rHuIQmRYD73lVIg_blcou7';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load reCAPTCHA script with explicit callback
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Render reCAPTCHA after script loads
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: 'dark',
        });
        setRecaptchaReady(true);
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get reCAPTCHA token from v2
      const token = window.grecaptcha?.getResponse?.();
      
      if (!token) {
        setSubmitStatus('error');
        setStatusMessage('Please complete the reCAPTCHA verification.');
        setIsSubmitting(false);
        return;
      }

      // Submit to Formspree
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          'g-recaptcha-response': token,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('success');
        setStatusMessage("Message sent successfully! We'll be in touch soon.");
        // Reset reCAPTCHA for next submission
        window.grecaptcha?.reset?.();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage('Failed to send message. Please try again.');
        window.grecaptcha?.reset?.();
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
      window.grecaptcha?.reset?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ background: '#000000' }}
      className="py-16 md:py-32 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="mb-16">
          <span
            className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
            style={{ background: '#0B9FBD15', color: '#0B9FBD', border: '1px solid #0B9FBD35' }}
          >
            Contact Us
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mt-3">
                Get in <span style={{ color: '#0B9FBD' }}>Touch</span>
              </h2>
              <p className="text-white/50 text-base font-medium mt-4 max-w-lg">
                Have a question, a project in mind, or just want to say hello?
                We'd love to hear from you.
              </p>
            </div>
            {/* Decorative divider line */}
            <div
              className="hidden md:block flex-1 max-w-xs h-px self-center ml-8"
              style={{ background: 'linear-gradient(to right, #0B9FBD40, transparent)' }}
            />
          </div>
        </div>

        {/* ── Contact grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

          {/* Left — info cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div>
              <span
                className="inline-block mb-6 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                style={{ background: '#6C0E4220', color: '#B31B6F', border: '1px solid #6C0E4240' }}
              >
                Support
              </span>
              <h3 className="text-2xl font-black text-white mt-4 mb-3">
                Connect with our engineering team
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
               Ready to deploy intelligent agent workflows?

              </p>
            </div>

            {[
              { icon: Mail,   label: 'Email Us',      value: 'help@virtusynccore.com', accent: '#0B9FBD' },
              { icon: Phone,  label: 'Call Us',        value: '+1 364-444-5907',        accent: '#B31B6F' },
              { icon: MapPin, label: 'Headquarters',   value: '404 S Figueroa St, Suite 1210\nLos Angeles, CA 90012\nUSA', accent: '#025067' },
            ].map(({ icon: Icon, label, value, accent }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl transition-colors"
                style={{
                  background: '#025067' + '1a',
                  border: `1px solid ${accent}30`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
                >
                  <Icon className="w-4 h-4" style={{ color: accent }} />
                </div>
                <div>
                  <p
                    className="text-[9px] font-black uppercase tracking-widest mb-0.5"
                    style={{ color: accent + 'aa' }}
                  >
                    {label}
                  </p>
                  <p className="text-sm font-bold text-white whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div
            className="lg:col-span-8 rounded-2xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(160deg, #025067 0%, #000000 100%)',
              border: '1px solid #0B9FBD25',
            }}
          >
            {/* Form header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: '#0B9FBD20', border: '1px solid #0B9FBD40' }}
              >
                <Send className="w-4 h-4" style={{ color: '#0B9FBD' }} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Send a Message</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: '#B31B6F' }}
                  />
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: '#0B9FBD99' }}
                  >
                    Typically replies in &lt;24h
                  </span>
                </div>
              </div>
            </div>

            {/* Status Message */}
            {submitStatus !== 'idle' && (
              <div
                className={`w-full p-4 rounded-xl text-sm font-semibold text-center mb-5 ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                    : 'bg-red-500/20 text-red-300 border border-red-500/40'
                }`}
              >
                {statusMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    className="block text-[10px] font-black uppercase tracking-[0.3em]"
                    style={{ color: '#0B9FBD' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full h-12 px-4 rounded-xl text-sm font-medium transition-colors focus:outline-none"
                    style={{
                      background: '#00000050',
                      border: '1px solid #0B9FBD30',
                      color: '#ffffff',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#0B9FBD80')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#0B9FBD30')}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    className="block text-[10px] font-black uppercase tracking-[0.3em]"
                    style={{ color: '#0B9FBD' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full h-12 px-4 rounded-xl text-sm font-medium transition-colors focus:outline-none"
                    style={{
                      background: '#00000050',
                      border: '1px solid #0B9FBD30',
                      color: '#ffffff',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#0B9FBD80')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#0B9FBD30')}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  className="block text-[10px] font-black uppercase tracking-[0.3em]"
                  style={{ color: '#0B9FBD' }}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your automation goals or infrastructure requirements..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors focus:outline-none resize-none"
                  style={{
                    background: '#00000050',
                    border: '1px solid #0B9FBD30',
                    color: '#ffffff',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#0B9FBD80')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#0B9FBD30')}
                />
              </div>

              {/* reCAPTCHA Container */}
              <div
                ref={recaptchaRef}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              />

              {/* reCAPTCHA Badge Info */}
              <p className="text-[10px] text-white/50 text-center mt-4">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" className="hover:text-white/70">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" className="hover:text-white/70">
                  Terms of Service
                </a>{' '}
                apply.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-wider rounded-xl transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: '#0B9FBD', color: '#000000' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowUpRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>

        {/* ── CTA Banner ──────────────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-2xl p-10 md:p-16 mb-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #025067 0%, #000000 55%, #6C0E42 100%)',
            border: '1px solid #0B9FBD33',
          }}
        >
          {/* Soft glow blobs */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 500,
              height: 180,
              background: '#0B9FBD18',
              filter: 'blur(72px)',
              borderRadius: '50%',
            }}
          />
          <div
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{
              width: 300,
              height: 200,
              background: '#B31B6F18',
              filter: 'blur(64px)',
              borderRadius: '50%',
            }}
          />

          <div className="relative z-10">
            <span
              className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
              style={{ background: '#0B9FBD20', color: '#0B9FBD', border: '1px solid #0B9FBD40' }}
            >
              Platform Access
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mt-3 mb-4">
              Ready to deploy<br />
              <span style={{ color: '#0B9FBD' }}>AI Agent workflows?</span>
            </h2>

            <p className="text-white/80 text-base font-medium mb-10 max-w-xl mx-auto">
              Request demo credentials, or schedule a technical briefing on
              Crivity Visual Design infrastructure capabilities.
            </p>

            <div className="flex items-center justify-center gap-3 flex-col sm:flex-row flex-wrap">
              {/* Primary CTA */}
              <button
                onClick={() => window.location.href = 'mailto:help@virtusynccore.com'}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all hover:brightness-110 active:scale-95"
                style={{ background: '#0B9FBD', color: '#000000' }}
              >
                Schedule Briefing <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Ghost CTA */}
              <button
                onClick={() => window.location.href = 'mailto:help@virtusynccore.com'}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all hover:bg-white/10 active:scale-95"
                style={{ color: '#B31B6F', border: '1px solid #B31B6F60' }}
              >
                Request Demo Access
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}