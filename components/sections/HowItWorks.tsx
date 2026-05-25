'use client';

import { ArrowUpRight, Activity, Cpu, Radio, Bot } from 'lucide-react';
import { useState } from 'react';

const bentoItems = [
  { src: '/Core Compute Infrastructure.svg',     label: 'Core Compute Infrastructure',     tag: 'System',      icon: Cpu,      accent: '#0B9FBD', border: '#025067', glow: 'rgba(11,159,189,0.25)',  stat: { value: '99.9%', label: 'Uptime'    }, description: 'A resilient foundation for your most demanding AI workloads.' },
  { src: '/Intelligent Agent Communication.svg', label: 'Intelligent Agent Communication', tag: 'Orchestrator', icon: Radio,     accent: '#0B9FBD', border: '#025067', glow: 'rgba(11,159,189,0.2)',   stat: { value: '10M+',  label: 'Msgs/day'  }, description: 'High-throughput orchestration routing messages with ultra-low latency.' },
  { src: '/Real-Time Pipeline Monitoring.svg',   label: 'Real-Time Pipeline Monitoring',   tag: 'Telemetry',   icon: Activity, accent: '#B31B6F', border: '#6C0E42', glow: 'rgba(179,27,111,0.25)', stat: { value: '<50ms', label: 'Latency'   }, description: 'Live telemetry designed to keep workflows within tight latency bounds.' },
  { src: '/Autonomous Task Execution.svg',       label: 'Autonomous Task Execution',       tag: 'Agents',      icon: Bot,      accent: '#B31B6F', border: '#6C0E42', glow: 'rgba(179,27,111,0.2)',  stat: { value: '5.2K',  label: 'Active'    }, description: 'An actively managed fleet of AI agents executing thousands of tasks.' },
];

const steps = [
  { num: '01', title: 'Configure Infrastructure', desc: 'Establish compute nodes, database systems, and workflow integrations with zero-config deployment.', accent: '#0B9FBD', border: '#025067', bg: 'rgba(11,159,189,0.04)' },
  { num: '02', title: 'Deploy AI Agents',         desc: 'Define roles, assign tasks, and trigger intelligent agent coordination pipelines in real time.',       accent: '#B31B6F', border: '#6C0E42', bg: 'rgba(108,14,66,0.06)' },
  { num: '03', title: 'Monitor & Optimize',       desc: 'Track workflow load, execution status, and GPU utilization across your entire agent fleet.',           accent: '#0B9FBD', border: '#025067', bg: 'rgba(2,80,103,0.06)'  },
];

function BentoCard({ item }: { item: typeof bentoItems[number] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className="relative overflow-hidden cursor-pointer rounded-xl sm:rounded-[20px]"
      style={{
        aspectRatio: '4/3',
        border: `1px solid ${hovered ? item.accent + '55' : item.border + '44'}`,
        boxShadow: hovered ? `0 0 40px ${item.glow}, 0 20px 60px rgba(0,0,0,0.6)` : '0 4px 24px rgba(0,0,0,0.5)',
        background: '#050505',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={item.src} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" style={{ transform: hovered ? 'scale(1.08)' : 'scale(1.0)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.85) 100%)' }} />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(${item.accent}30 1px, transparent 1px), linear-gradient(90deg, ${item.accent}30 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      {/* Tag */}
      <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}35`, backdropFilter: 'blur(8px)' }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.accent }} />
        <span className="text-[8px] font-black uppercase tracking-widest" style={{ color: item.accent }}>{item.tag}</span>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg mb-2" style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${item.border}55`, backdropFilter: 'blur(8px)' }}>
          <Icon className="w-3 h-3" style={{ color: item.accent }} />
          <span className="text-[10px] font-black" style={{ color: item.accent }}>{item.stat.value}</span>
          <span className="text-[9px] text-white/40">{item.stat.label}</span>
        </div>
        <p className="text-xs font-black text-white leading-tight">{item.label}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 md:py-28 font-sans relative overflow-hidden" style={{ background: '#000000' }}>

      {/* Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(11,159,189,0.07) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,14,66,0.09) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(11,159,189,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,159,189,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

        {/* Header */}
        <div className="mb-8 md:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: 'rgba(11,159,189,0.08)', border: '1px solid rgba(11,159,189,0.25)' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#0B9FBD', boxShadow: '0 0 8px #0B9FBD' }} />
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#0B9FBD' }}>Platform Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
              <span className="text-white block">A new era of</span>
              <span className="block" style={{ color: '#0B9FBD' }}>autonomous automation</span>
            </h2>
          </div>

          {/* Stat card */}
          <div className="rounded-2xl p-5 w-full sm:w-auto sm:min-w-[200px]" style={{ background: 'rgba(11,159,189,0.05)', border: '1px solid rgba(11,159,189,0.2)', backdropFilter: 'blur(12px)' }}>
            <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: '#0B9FBD', textShadow: '0 0 30px rgba(11,159,189,0.4)' }}>200+</div>
            <div className="text-[11px] uppercase tracking-widest text-white/40 mb-3">Integrations</div>
            <div className="h-px" style={{ background: 'linear-gradient(90deg, #0B9FBD44, transparent)' }} />
            <div className="mt-3 text-xs text-white/40 leading-relaxed">Connect every tool to a unified orchestration layer.</div>
          </div>
        </div>

        {/* Bento grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12">
          {bentoItems.map((item, i) => <BentoCard key={i} item={item} />)}
        </div>

        {/* Divider pill */}
        <div className="flex items-center gap-4 my-8 md:my-12">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #025067)' }} />
          <div className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest" style={{ border: '1px solid #025067', color: '#0B9FBD', background: 'rgba(2,80,103,0.1)' }}>How it works</div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #025067, transparent)' }} />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl p-5 md:p-8 overflow-hidden group cursor-pointer transition-all duration-300"
              style={{ background: step.bg, border: `1px solid ${step.border}44` }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = step.accent + '55'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${step.accent}18`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = step.border + '44'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
            >
              <div className="text-[5rem] md:text-[7rem] font-black leading-none absolute -top-4 -right-4 select-none pointer-events-none" style={{ color: `${step.accent}08` }}>{step.num}</div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: `${step.accent}12`, border: `1px solid ${step.border}55` }}>
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: step.accent }}>Step {step.num}</span>
              </div>
              <h3 className="text-base md:text-xl font-black text-white mb-2 leading-tight tracking-tight relative z-10">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}