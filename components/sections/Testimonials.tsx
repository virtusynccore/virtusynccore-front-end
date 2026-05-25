'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    reviewerName: 'Mike Wigger',
    personName: 'Sarah K.',
    personRole: 'VP of Operations, NovaLogix',
    avatar: '/Mike Wigger.svg',
    quote:
      'Crivity Visual Design enabled us to automate our entire inventory supply pipeline in days. The AI agents coordinate systems seamlessly without errors — it\'s transformed how we operate at scale.',
    rating: 5,
    tag: 'Logistics',
    accent: 'pink',
  },
  {
    reviewerName: 'James Turner',
    personName: 'Marcus V.',
    personRole: 'CTO, DataSync Solutions',
    avatar: '/James Turner.svg',
    quote:
      'Deploying Crivity Visual Design\'s compute-enabled agents solved our system fragmentation overnight. GPU allocation and telemetry tracking now work beautifully together at scale.',
    rating: 5,
    tag: 'Infrastructure',
    accent: 'teal',
  },
  {
    reviewerName: 'Rachel Moore',
    personName: 'Elena X.',
    personRole: 'Director of IT, GrowthScale',
    avatar: '/Rachel Moore.svg',
    quote:
      'We deployed autonomous agents to handle task coordination across our SaaS platforms. The operational efficiency gain is massive — we cut manual overhead by over 60% in the first month.',
    rating: 5,
    tag: 'SaaS Ops',
    accent: 'pink',
  },
  {
    reviewerName: 'Priya Sharma',
    personName: 'Aiden R.',
    personRole: 'Head of DevOps, CloudNine',
    avatar: '/Priya Sharma.svg',
    quote:
      'The real-time monitoring dashboard alone saved us 20+ engineering hours per week. Agents proactively resolve issues before they even reach our alert thresholds. Absolutely game-changing.',
    rating: 5,
    tag: 'DevOps',
    accent: 'teal',
  },
];

const ACCENTS = {
  pink: {
    banner: '#3B0A2A',
    bannerBorder: '#6C0E42',
    star: '#B31B6F',
    nameColor: '#d4488b',
    tagBg: 'rgba(179,27,111,0.12)',
    tagColor: '#B31B6F',
    tagBorder: 'rgba(179,27,111,0.3)',
    photoBorder: '#6C0E42',
  },
  teal: {
    banner: '#012535',
    bannerBorder: '#025067',
    star: '#0B9FBD',
    nameColor: '#0B9FBD',
    tagBg: 'rgba(11,155,189,0.12)',
    tagColor: '#0B9FBD',
    tagBorder: 'rgba(11,155,189,0.3)',
    photoBorder: '#025067',
  },
};

function StarIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function TestimonialCard({ card, index }) {
  const accent = ACCENTS[card.accent];

  return (
    <div
      className="testimonial-card"
      style={{
        borderRadius: 18,
        overflow: 'visible',
        position: 'relative',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Banner */}
      <div
        style={{
          background: accent.banner,
          borderRadius: '14px 14px 0 0',
          padding: '18px 110px 22px 22px',
          position: 'relative',
          minHeight: 90,
          borderLeft: `2px solid ${accent.bannerBorder}`,
          borderTop: `2px solid ${accent.bannerBorder}`,
          borderRight: `2px solid ${accent.bannerBorder}`,
        }}
      >
        <p
          style={{
            fontSize: 10,
            color: 'rgba(255,255,255,0.45)',
            fontWeight: 500,
            letterSpacing: '0.05em',
            margin: '0 0 2px',
          }}
        >
          review
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: '#fff',
            margin: '0 0 10px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {card.reviewerName}
        </p>
        <div style={{ display: 'flex', gap: 4 }}>
          {Array.from({ length: card.rating }).map((_, i) => (
            <StarIcon key={i} color={accent.star} />
          ))}
        </div>

        {/* Notch / tail */}
        <div
          style={{
            position: 'absolute',
            bottom: -12,
            left: 28,
            width: 24,
            height: 12,
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            background: accent.banner,
          }}
        />

        {/* Circular photo */}
        <div
          style={{
            position: 'absolute',
            top: -10,
            right: 18,
            width: 82,
            height: 82,
            borderRadius: '50%',
            border: `3px solid #0a0a0a`,
            outline: `2px solid ${accent.photoBorder}`,
            overflow: 'hidden',
            background: '#1a1a1a',
            zIndex: 2,
          }}
        >
          <img
            src={card.avatar}
            alt={card.personName}
            width={82}
            height={82}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          background: '#111111',
          borderRadius: '0 0 14px 14px',
          padding: '28px 22px 22px',
          border: '0.5px solid rgba(255,255,255,0.08)',
          borderTop: 'none',
        }}
      >
        {/* Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: 100,
              background: accent.tagBg,
              color: accent.tagColor,
              border: `0.5px solid ${accent.tagBorder}`,
            }}
          >
            {card.tag}
          </span>
        </div>

        <p
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: accent.nameColor,
            margin: '0 0 2px',
            textAlign: 'center',
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {card.personName}
        </p>
        <p
          style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.35)',
            textAlign: 'center',
            letterSpacing: '0.04em',
            margin: '0 0 16px',
            textTransform: 'uppercase',
          }}
        >
          {card.personRole}
        </p>

        <div
          style={{
            height: '0.5px',
            background: 'rgba(255,255,255,0.08)',
            marginBottom: 16,
          }}
        />

        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.72,
            color: 'rgba(255,255,255,0.58)',
            margin: 0,
            fontWeight: 400,
          }}
        >
          {card.quote}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        #testimonials {
          background: #000000;
          font-family: 'DM Sans', sans-serif;
        }

        .testimonial-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
      `}</style>

      <section id="testimonials" style={{ background: '#000000', padding: '72px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
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
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight" style={{ color: '#ffffff', margin: '0 0 10px' }}>
              Don&apos;t just take our<br />
              <span style={{ color: '#0B9FBD' }}>word for it</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', margin: 0 }}>
              Trusted by teams across the globe
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {testimonials.map((card, i) => (
              <TestimonialCard key={i} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}