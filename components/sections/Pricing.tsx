'use client';

import { Check, ArrowUpRight, Zap, Shield, Rocket } from 'lucide-react';
import { useState } from 'react';

// ─── Color palette ────────────────────────────────────────────────────────────
// #000000  #025067  #0B9FBD  #6C0E42  #B31B6F

const tiers = [
  {
    name: 'Pilot',
    price: '$59',
    period: '/month',
    tag: 'For testing & pilots',
    icon: Zap,
    features: [
      'Up to 5 Autonomous Agents',
      '10,000 automated tasks/mo',
      'Basic workflow orchestration',
      'Standard API access',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
    accent: '#B31B6F',
    border: '#6C0E42',
    glow: 'rgba(179,27,111,0.15)',
    bg: 'rgba(108,14,66,0.05)',
    link: 'https://buy.stripe.com/test_7sYcN7gtp5scdZ96sigEg01',
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    tag: 'Most popular',
    icon: Rocket,
    features: [
      'Up to 25 Autonomous Agents',
      '100,000 automated tasks/mo',
      'Advanced system collaboration',
      'Compute load optimization',
      'Priority API and processing access',
      'Email & Slack support',
    ],
    cta: 'Start Scaling',
    highlighted: true,
    accent: '#0B9FBD',
    border: '#025067',
    glow: 'rgba(11,159,189,0.2)',
    bg: 'rgba(11,159,189,0.05)',
    link: 'https://buy.stripe.com/test_28EfZjb955sc4oz8AqgEg00',
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    tag: 'For large enterprises',
    icon: Shield,
    features: [
      'Unlimited Autonomous Agents',
      'Unlimited automated tasks',
      'Custom system orchestration',
      'Dedicated compute resource allocation',
      'Enterprise-grade SLA',
      'On-premise licensing',
    ],
    cta: "Let's Talk",
    highlighted: false,
    accent: '#0B9FBD',
    border: '#025067',
    glow: 'rgba(2,80,103,0.2)',
    bg: 'rgba(2,80,103,0.05)',
    link: '/#contact',
  },
];

function PricingCard({ tier }: { tier: typeof tiers[number] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = tier.icon;

  return (
    <div
      className="relative flex flex-col rounded-3xl overflow-hidden transition-all duration-400 cursor-pointer"
      style={{
        background: tier.highlighted
          ? `linear-gradient(160deg, rgba(11,159,189,0.1) 0%, rgba(0,0,0,0.9) 60%)`
          : tier.bg,
        border: `1px solid ${hovered || tier.highlighted ? tier.accent + '55' : tier.border + '33'}`,
        boxShadow: hovered || tier.highlighted
          ? `0 0 50px ${tier.glow}, 0 20px 60px rgba(0,0,0,0.5)`
          : '0 4px 24px rgba(0,0,0,0.4)',
        transition: 'all 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top glow bar */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${tier.accent}, transparent)`,
          opacity: tier.highlighted || hovered ? 1 : 0.4,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Most popular badge */}
      {tier.highlighted && (
        <div className="absolute top-4 right-4 z-10">
          <div
            className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
            style={{
              background: 'rgba(11,159,189,0.15)',
              border: '1px solid rgba(11,159,189,0.4)',
              color: '#0B9FBD',
              boxShadow: '0 0 16px rgba(11,159,189,0.2)',
            }}
          >
            ✦ Most Popular
          </div>
        </div>
      )}

      {/* Ambient glow orb */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${tier.accent}20 0%, transparent 70%)`,
          opacity: hovered || tier.highlighted ? 1 : 0.4,
        }}
      />

      <div className="p-5 md:p-8 flex flex-col flex-grow relative z-10">

        {/* Header row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p
              className="text-[10px] font-black uppercase tracking-widest mb-2"
              style={{ color: tier.accent }}
            >
              {tier.tag}
            </p>
            <h3 className="text-2xl font-black text-white tracking-tight">{tier.name}</h3>
          </div>
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered || tier.highlighted ? `${tier.accent}20` : `${tier.accent}0e`,
              border: `1px solid ${tier.accent}${hovered || tier.highlighted ? '40' : '20'}`,
              boxShadow: hovered || tier.highlighted ? `0 0 20px ${tier.accent}25` : 'none',
            }}
          >
            <Icon className="w-5 h-5" style={{ color: tier.accent }} />
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-end gap-1.5">
            <span
              className="text-5xl font-black leading-none"
              style={{
                color: '#ffffff',
                textShadow: hovered || tier.highlighted ? `0 0 30px ${tier.accent}50` : 'none',
                transition: 'text-shadow 0.3s ease',
              }}
            >
              {tier.price}
            </span>
            {tier.period && (
              <span className="text-white/40 text-sm font-medium mb-1">{tier.period}</span>
            )}
          </div>
          {/* Price underline */}
          <div
            className="mt-2 h-px transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, ${tier.accent}50, transparent)`,
              width: hovered || tier.highlighted ? '60%' : '30%',
            }}
          />
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-10 flex-grow">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: hovered || tier.highlighted ? `${tier.accent}18` : `${tier.accent}0c`,
                  border: `1px solid ${tier.accent}${hovered || tier.highlighted ? '35' : '20'}`,
                }}
              >
                <Check className="w-3 h-3" style={{ color: tier.accent }} />
              </div>
              <span className="text-sm text-white/60 font-medium">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => {
            if (tier.link.startsWith('http')) {
              window.open(tier.link, '_blank', 'noopener,noreferrer');
            } else {
              window.location.href = tier.link;
            }
          }}
          className="w-full py-3.5 rounded-2xl text-sm font-black tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95"
          style={
            tier.highlighted
              ? {
                  background: `linear-gradient(135deg, #0B9FBD, #025067)`,
                  color: '#000000',
                  boxShadow: `0 0 24px rgba(11,159,189,0.35)`,
                }
              : {
                  background: hovered ? `${tier.accent}18` : 'transparent',
                  color: tier.accent,
                  border: `1px solid ${tier.accent}${hovered ? '55' : '30'}`,
                  boxShadow: hovered ? `0 0 16px ${tier.glow}` : 'none',
                }
          }
        >
          {tier.cta}
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-32 font-sans relative overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(11,159,189,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,14,66,0.07) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,159,189,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,159,189,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{
                background: 'rgba(11,159,189,0.08)',
                border: '1px solid rgba(11,159,189,0.25)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#0B9FBD', boxShadow: '0 0 8px #0B9FBD' }} />
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#0B9FBD' }}>
                Pricing
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mt-2">
              Scale with confidence.<br />
              <span style={{ color: '#0B9FBD' }}>Predictable agent pricing.</span>
            </h2>
          </div>

          <p className="text-white/50 text-sm leading-relaxed font-medium max-w-xs">
            Choose the computing tier that fits your operational needs. Upgrade or downgrade agents as your requirements scale.
          </p>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="mt-8 rounded-2xl p-5 md:p-7 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          style={{
            background: 'rgba(2,80,103,0.06)',
            border: '1px solid rgba(2,80,103,0.3)',
          }}
        >
          <div>
            <p className="text-white font-black text-lg">Need custom agent orchestration?</p>
            <p className="text-white/40 text-sm mt-1 font-medium">
             Get in touch for enterprise-wide deployments, dedicated compute options, and custom API integrations.
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/#contact'}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              border: '1px solid rgba(11,159,189,0.35)',
              color: '#0B9FBD',
              background: 'rgba(11,159,189,0.06)',
            }}
          >
            Request Custom Quote
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}