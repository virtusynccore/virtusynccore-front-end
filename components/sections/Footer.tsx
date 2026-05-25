'use client';

import { Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer
        className="pt-20 pb-8 font-sans relative overflow-hidden"
        style={{ background: '#000000', borderTop: '1px solid #0B9FBD15' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 800,
            height: 200,
            background: '#0B9FBD08',
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: 400,
            height: 200,
            background: '#6C0E4210',
            filter: 'blur(80px)',
            borderRadius: '50%',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* ── Main grid ───────────────────────────────────────────────────── */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12"
            style={{ borderBottom: '1px solid #0B9FBD12' }}
          >
            {/* Brand */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #0B9FBD, #6C0E42)',
                    boxShadow: '0 4px 16px #0B9FBD30',
                  }}
                >
                  <span className="font-black text-sm" style={{ color: '#000000' }}>
                    V
                  </span>
                </div>
                <span className="text-white font-black text-xl tracking-tight">
                  Crivity Visual Design
                </span>
              </div>

              <p className="text-sm leading-relaxed font-medium max-w-xs" style={{ color: '#ffffff60' }}>
                Intelligent Agent Infrastructure and Intelligent Workflow Automation Platform.
              </p>

              {/* Status indicator */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: '#ffffff25' }}
                >
                  All systems operational
                </span>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { Icon: Twitter, accent: '#0B9FBD' },
                  { Icon: Linkedin, accent: '#0B9FBD' },
                  { Icon: Youtube, accent: '#B31B6F' },
                ].map(({ Icon, accent }, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all group"
                    style={{
                      background: '#0250671a',
                      border: '1px solid #0B9FBD20',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${accent}60`;
                      e.currentTarget.style.background = `${accent}15`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#0B9FBD20';
                      e.currentTarget.style.background = '#0250671a';
                    }}
                  >
                    <Icon
                      className="w-4 h-4 transition-colors"
                      style={{ color: '#ffffff30' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = accent;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#ffffff30';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { title: 'Navigation', links: [{name: 'Home', href: '/#hero'}, {name: 'Features', href: '/#features'}, {name: 'Process', href: '/#how-it-works'}] },
                { title: 'Resources', links: [{name: 'Reviews', href: '/#testimonials'}, {name: 'FAQ', href: '/#faq'}, {name: 'Contact', href: '/#contact'}] },
                { title: 'Legal', links: [{name: 'Privacy Policy', href: '/privacy-policy'}, {name: 'Terms of Service', href: '/terms-of-service'}] },
              ].map(col => (
                <div key={col.title}>
                  <h4
                    className="text-[10px] font-black uppercase tracking-[0.5em] mb-6"
                    style={{ color: '#0B9FBD' }}
                  >
                    {col.title}
                  </h4>
                  <ul className="space-y-4">
                    {col.links.map(link => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm font-semibold flex items-center gap-2 group transition-colors"
                          style={{ color: '#ffffff40' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.color = '#ffffff';
                            const bar = e.currentTarget.querySelector('span');
                            if (bar) bar.style.width = '12px';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = '#ffffff40';
                            const bar = e.currentTarget.querySelector('span');
                            if (bar) bar.style.width = '0px';
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: 0,
                              height: 1,
                              background: '#0B9FBD',
                              transition: 'width 0.2s',
                              flexShrink: 0,
                            }}
                          />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom bar ──────────────────────────────────────────────────── */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.4em]"
              style={{ color: '#ffffff20' }}
            >
              © 2026 Crivity Visual Design. All rights reserved.
            </span>

            <div className="flex gap-8 flex-wrap">
              <a
                href="/privacy-policy"
                className="text-[10px] font-bold uppercase tracking-widest transition-colors"
                style={{ color: '#ffffff20' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#0B9FBD';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#ffffff20';
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-[10px] font-bold uppercase tracking-widest transition-colors"
                style={{ color: '#ffffff20' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#0B9FBD';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#ffffff20';
                }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[10px] font-bold uppercase tracking-widest transition-colors"
                style={{ color: '#ffffff20' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#0B9FBD';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#ffffff20';
                }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
