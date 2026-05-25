'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is an intelligent agent infrastructure?',
    a: 'Intelligent agent infrastructure provides the software framework, compute resources, and API integrations necessary to run autonomous agents that execute tasks and coordinate workflows across enterprise databases and systems.',
  },
  {
    q: 'How does VirtuSyncCore integrate with its compute acceleration layer?',
    a: 'VirtuSyncCore utilizes advanced compute architectures to accelerate agent communication, optimize task graph execution, and maximize compute workloads, minimizing latencies across large-scale business operations.',
  },
  {
    q: 'Do we need custom code to build workflows?',
    a: 'While Crivity Visual Design features robust low-code workflow builders, developer APIs, and system templates, teams can write custom Python or JavaScript actions for complex integrations and agent behaviors.',
  },
  {
    q: 'Can we run Crivity Visual Design on-premise?',
    a: 'Yes. Our Scale plan offers infrastructure licensing options allowing you to run Crivity Visual Design orchestrators within your private cloud or on-premise compute hardware for complete security compliance.',
  },
  {
    q: 'What is the typical deployment timeline?',
    a: 'Setting up basic workflow integrations and standard intelligent agent roles takes just a few hours. Enterprise on-premise setup or custom database connections can be finalized in 1 to 2 weeks.',
  },
];

const tools = [
  { label: 'Cloudflare',  accent: 'pink' },
  { label: 'Next.js',     accent: 'teal' },
  { label: 'Python',      accent: 'pink' },
  { label: 'Docker',      accent: 'teal' },
  { label: 'Kubernetes',  accent: 'pink' },
  { label: 'Airtable',   accent: 'teal' },
  { label: 'Zapier',      accent: 'pink' },
];

const stats = [
  { val: '10M+', label: 'Tasks Automated', accent: 'teal' },
  { val: '99.9%', label: 'System Uptime',   accent: 'pink' },
  { val: '24/7',  label: 'Agent Operation', accent: 'teal' },
  { val: '<2 wk', label: 'Avg. Deployment', accent: 'pink' },
];

const TEAL  = '#0B9FBD';
const PINK  = '#d4488b';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        #faq {
          background: #000000;
          font-family: 'DM Sans', sans-serif;
        }

        .faq-item {
          background: #0a0a0a;
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }
        .faq-item.active {
          border-color: rgba(11,155,189,0.35);
        }
        .faq-item:hover:not(.active) {
          border-color: rgba(255,255,255,0.16);
        }

        .faq-icon-wrap {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 0.5px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          transition: background 0.2s, border-color 0.2s;
        }
        .faq-item.active .faq-icon-wrap {
          background: rgba(11,155,189,0.15);
          border-color: rgba(11,155,189,0.4);
        }

        .faq-tag-teal {
          background: rgba(11,155,189,0.1);
          color: #0B9FBD;
          border: 0.5px solid rgba(11,155,189,0.25);
        }
        .faq-tag-pink {
          background: rgba(179,27,111,0.1);
          color: #d4488b;
          border: 0.5px solid rgba(179,27,111,0.25);
        }
      `}</style>

      <section id="faq" className="py-16 md:py-[72px] px-5 md:px-6">
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ alignItems: 'start' }}>
            {/* ── Left column ── */}
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(11,159,189,0.08)',
                  border: '1px solid rgba(11,159,189,0.25)',
                  color: '#0B9FBD',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '5px 16px',
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                FAQ
              </span>

              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight" style={{ color: '#ffffff', margin: '0 0 12px' }}>
                Got questions?<br />
                <span style={{ color: '#0B9FBD' }}>We&apos;ve got answers.</span>
              </h2>

              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.42)',
                  lineHeight: 1.7,
                  margin: '0 0 28px',
                  maxWidth: 280,
                }}
              >
                Everything you need to know about Crivity Visual Design. Can't find what you're looking for?{' '}
                Contact our tech team.
              </p>

              {/* Powered by card */}
              <div
                style={{
                  background: '#0a0a0a',
                  border: '0.5px solid rgba(255,255,255,0.08)',
                  borderRadius: 14,
                  padding: 20,
                  marginBottom: 14,
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.28)',
                    margin: '0 0 14px',
                  }}
                >
                  Powered By
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {tools.map(tool => (
                    <span
                      key={tool.label}
                      className={`faq-tag-${tool.accent}`}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: 100,
                      }}
                    >
                      {tool.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {stats.map(s => (
                  <div
                    key={s.label}
                    style={{
                      background: '#0a0a0a',
                      border: '0.5px solid rgba(255,255,255,0.07)',
                      borderRadius: 10,
                      padding: '14px 16px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 22,
                        fontWeight: 800,
                        color: s.accent === 'teal' ? TEAL : PINK,
                        margin: '0 0 2px',
                      }}
                    >
                      {s.val}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        color: 'rgba(255,255,255,0.35)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        margin: 0,
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column: accordion ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                const numColor = isOpen ? (i % 2 === 0 ? TEAL : PINK) : 'rgba(255,255,255,0.2)';

                return (
                  <div
                    key={i}
                    className={`faq-item${isOpen ? ' active' : ''}`}
                    onClick={() => toggle(i)}
                    role="button"
                    aria-expanded={isOpen}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        padding: 18,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          minWidth: 20,
                          paddingTop: 2,
                          color: numColor,
                          transition: 'color 0.2s',
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        0{i + 1}
                      </span>

                      <span
                        style={{
                          fontSize: 13.5,
                          fontWeight: 700,
                          lineHeight: 1.45,
                          flex: 1,
                          color: isOpen ? '#fff' : 'rgba(255,255,255,0.55)',
                          transition: 'color 0.2s',
                        }}
                      >
                        {faq.q}
                      </span>

                      <div className="faq-icon-wrap">
                        {isOpen
                          ? <Minus size={14} color={TEAL} />
                          : <Plus size={14} color="rgba(255,255,255,0.5)" />
                        }
                      </div>
                    </div>

                    {isOpen && (
                      <div style={{ padding: '0 18px 18px 30px' }}>
                        <p
                          style={{
                            fontSize: 13,
                            color: 'rgba(255,255,255,0.58)',
                            lineHeight: 1.75,
                            margin: 0,
                            fontWeight: 400,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}