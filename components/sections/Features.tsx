'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const modules = [
  { index: 1, label: 'Module 1', tag: 'Deployment',    title: 'AI Agent Deployment',        icon: 'AI Agent Deployment.svg',        accentColor: '#0B9FBD', description: "Crivity Visual Design's AI Agent Deployment module equips your infrastructure with autonomous, production-grade capabilities — purpose-built for teams scaling complex AI operations.", content: ['Spin up purpose-built autonomous agents', 'Assign to specific operational roles', 'Configure task permissions & API access', 'Deploy with zero downtime'], result: ['Agents self-monitor and retry on failure', 'Real-time telemetry dashboard', 'Full operational transparency', 'Auto-scaling under load'] },
  { index: 2, label: 'Module 2', tag: 'Automation',    title: 'Workflow Automation',         icon: 'Workflow Automation.svg',  accentColor: '#0B9FBD', description: 'Design multi-step task pipelines using a visual builder or code-first API. Connect triggers from CRMs, databases, webhooks, or scheduled jobs and chain into fully automated sequences.', content: ['Design multi-step task pipelines', 'Connect CRMs, databases, webhooks', 'Conditional branching & parallel execution', 'Code-first or visual builder'], result: ['Reliable execution at any scale', 'Built-in error-handling logic', 'Scheduled & event-driven triggers', 'Full audit trail logging'] },
  { index: 3, label: 'Module 3', tag: 'Orchestration', title: 'Intelligent Orchestration',   icon: 'Intelligent Orchestration.svg',       accentColor: '#0B9FBD', description: 'Intelligent Orchestration sits at the core of Crivity Visual Design, dynamically routing tasks between agents based on load, priority, and availability.', content: ['Dynamically route tasks between agents', 'Resolve system fragmentation', 'GPU compute allocation', 'Real-time latency optimization'], result: ['Peak performance under heavy load', 'Unified coordination layer', 'Telemetry & performance insights', 'Priority-based task queuing'] },
  { index: 4, label: 'Module 4', tag: 'Integration',   title: 'System Integration',          icon: 'System Integration.svg', accentColor: '#0B9FBD', description: 'Connect to any REST or GraphQL API with pre-built connectors for 200+ tools. Bidirectional data sync ensures zero data loss across your entire ecosystem.', content: ['Connect to any REST or GraphQL API', 'Pre-built connectors for 200+ tools', 'Bidirectional data sync', 'Custom webhook management'], result: ['Zero data loss during sync', 'Conflict resolution built-in', 'Live connection health monitoring', 'Encrypted data in transit'] },
  { index: 5, label: 'Module 5', tag: 'Task Graphs',   title: 'Task Graph Engine',           icon: 'Task Graph Engine.svg',       accentColor: '#0B9FBD', description: 'Model complex dependencies with a visual DAG-based task engine. Execute parallel branches and resolve dependencies dynamically for maximum throughput.', content: ['Visual DAG-based task modeling', 'Dependency resolution engine', 'Parallel branch execution', 'Real-time progress tracking'], result: ['Reduced execution bottlenecks', 'Dynamic re-routing on failure', 'Full graph versioning history', 'Exportable task blueprints'] },
  { index: 6, label: 'Module 6', tag: 'Monitoring',    title: 'Telemetry & Monitoring',      icon: 'Telemetry & Monitoring.svg',       accentColor: '#0B9FBD', description: 'Real-time agent performance metrics with custom alert thresholds and distributed tracing. Stay ahead of anomalies before they impact operations.', content: ['Real-time agent performance metrics', 'Custom alert thresholds', 'Distributed tracing across agents', 'Log aggregation & search'], result: ['Instant anomaly detection', 'SLA compliance dashboards', 'Historical performance trends', 'Exportable audit reports'] },
  { index: 7, label: 'Module 7', tag: 'Security',      title: 'Security & Compliance',       icon: 'Security & Compliance.svg',    accentColor: '#6C0E42', description: 'Role-based access control, end-to-end encryption, and SOC 2 Type II compliance baked in. Zero-trust architecture for enterprise-grade deployments.', content: ['Role-based access control (RBAC)', 'End-to-end encryption at rest', 'SOC 2 Type II compliant', 'Automated policy enforcement'], result: ['Zero trust network architecture', 'Continuous vulnerability scanning', 'Compliance reporting built-in', 'Granular permission management'] },
  { index: 8, label: 'Module 8', tag: 'Analytics',     title: 'Analytics & Insights',        icon: 'Analytics & Insights.svg',        accentColor: '#B31B6F', description: 'Operational efficiency scoring, agent utilization heatmaps, and predictive load forecasting to drive continuous improvement across your AI infrastructure.', content: ['Operational efficiency scoring', 'Agent utilization heatmaps', 'Cost-per-task tracking', 'Predictive load forecasting'], result: ['Actionable optimization insights', 'ROI measurement dashboards', 'Trend analysis over time', 'Custom KPI report builder'] },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<50ms', label: 'Avg Latency' },
  { value: '200+',  label: 'Integrations' },
  { value: '10M+',  label: 'Tasks / Day' },
];

type Module = typeof modules[number];

function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <polyline points="1,4 3,6 7,2" stroke="#B31B6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active: Module = modules[activeIndex];
  const iconSrc = encodeURI(`/${active.icon}`);

  return (
    <section id="features" style={{ background: '#000000' }} className="py-14 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <span
            className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border"
            style={{ color: '#0B9FBD', borderColor: '#025067', background: '#02506720' }}
          >
            Core Capabilities
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Intelligent orchestration<br />
              <span style={{ color: '#0B9FBD' }}>for modern operations</span>
            </h2>
            <p className="text-white/70 text-sm md:text-lg leading-relaxed font-medium max-w-sm lg:max-w-xs">
              VirtuSyncCore solves system fragmentation by deploying intelligent agents that execute tasks autonomously.
            </p>
          </div>
        </div>

        {/* Module Tabs — scrollable on mobile */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
          {modules.map((m, i) => (
            <button
              key={m.index}
              onClick={() => setActiveIndex(i)}
              className="flex-shrink-0 px-3 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all duration-200"
              style={activeIndex === i ? { background: '#0B9FBD', color: '#000000' } : { background: '#025067', color: '#0B9FBD' }}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left card */}
          <div className="rounded-2xl p-5 md:p-8 flex flex-col gap-5" style={{ background: '#0a0a0a', border: '1px solid #025067' }}>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#0B9FBD' }}>{active.tag}</span>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${active.accentColor}20`, border: `1px solid ${active.accentColor}30` }}>
                  <img src={iconSrc} alt={`${active.title} icon`} className="w-5 h-5 object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight">{active.title}</h3>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>Content</p>
              <div className="flex flex-col gap-2">
                {active.content.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full flex-shrink-0 mt-0.5" style={{ background: '#0B9FBD' }} />
                    <span className="text-xs text-white/60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px" style={{ background: 'linear-gradient(90deg, #025067, #6C0E42)' }} />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>Result</p>
              <div className="flex flex-col gap-2">
                {active.result.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: '#6C0E42' }}>
                      <CheckIcon />
                    </div>
                    <span className="text-xs text-white/60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-2xl p-5 md:p-8 flex flex-col justify-between gap-6" style={{ background: '#0a0a0a', border: '1px solid #6C0E4244' }}>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border" style={{ background: '#6C0E4222', borderColor: '#6C0E42', color: '#B31B6F' }}>
                Module {active.index} of {modules.length}
              </span>
              <p className="mt-4 text-sm text-white/50 leading-relaxed">{active.description}</p>
              <div className="flex items-center gap-2 mt-6 flex-wrap">
                {modules.map((_, i) => (
                  <button key={i} onClick={() => setActiveIndex(i)} className="rounded-full transition-all duration-300" style={{ width: activeIndex === i ? '24px' : '6px', height: '6px', background: activeIndex === i ? '#0B9FBD' : '#025067' }} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <button onClick={() => window.location.href = '/#contact'} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-opacity hover:opacity-90" style={{ background: '#0B9FBD', color: '#000000' }}>
                Deploy Now <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => window.location.href = '/#how-it-works'} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-colors hover:bg-white/5" style={{ borderColor: '#025067', color: '#0B9FBD' }}>
                Documentation
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="lg:col-span-2 rounded-2xl p-5 md:p-8" style={{ background: 'linear-gradient(135deg, #025067 0%, #000000 60%)', border: '1px solid #0B9FBD44' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left sm:flex-row sm:gap-8 sm:flex-1">
                  <div>
                    <div className="text-2xl md:text-3xl font-black" style={{ color: '#0B9FBD' }}>{s.value}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
                  </div>
                  {i < stats.length - 1 && <div className="hidden sm:block w-px h-10 self-center flex-shrink-0" style={{ background: '#025067' }} />}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}