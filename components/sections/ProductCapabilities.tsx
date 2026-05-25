'use client';

import { motion } from 'motion/react';
import { Cpu, Database, Zap, Settings } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'Intelligent Agent Brain',
    tech: 'NVIDIA NeMo Framework',
    description: 'Specialized large language models trained for autonomous operations. Agents reason, understand permissions, and handle complex operational roles with domain-specific accuracy.',
    features: [
      'Custom-trained AI models',
      'Role-based task understanding',
      'Domain-specific reasoning',
      'Adaptive learning',
    ],
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    icon: Database,
    title: 'Real-Time Monitoring',
    tech: 'NVIDIA Morpheus',
    description: 'Monitor 10 million tasks per day with instant anomaly detection. AI-powered pipeline monitoring catches issues before they impact your operations.',
    features: [
      'Live task telemetry',
      'Instant failure detection',
      'Performance bottleneck alerts',
      'Self-healing agents',
    ],
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    icon: Zap,
    title: 'High-Speed Analytics',
    tech: 'NVIDIA RAPIDS',
    description: 'Process millions of data points instantly. Fast analytics keep your command center dashboard responsive even under extreme operational load.',
    features: [
      'Real-time data aggregation',
      'Interactive dashboards',
      'System metric tracking',
      'Cost analysis',
    ],
    accent: '#B31B6F',
    border: '#6C0E42',
  },
  {
    icon: Settings,
    title: 'Production Deployment',
    tech: 'NVIDIA Triton & TensorRT',
    description: 'Deploy optimized models with sub-50ms latency. Route complex tasks between agents with precision. Compile and optimize for maximum efficiency.',
    features: [
      'Multi-agent orchestration',
      'Conditional task routing',
      'GPU-optimized inference',
      'Zero-downtime updates',
    ],
    accent: '#B31B6F',
    border: '#6C0E42',
  },
];

export default function ProductCapabilities() {
  return (
    <section style={{ background: '#000000' }} className="py-14 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <span
            className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border"
            style={{ color: '#B31B6F', borderColor: '#6C0E42', background: '#6C0E4220' }}
          >
            Technical Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Built on <span style={{ color: '#B31B6F' }}>NVIDIA Excellence</span>
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-lg font-medium max-w-2xl">
            AetherSync leverages cutting-edge NVIDIA SDKs to deliver enterprise-grade AI agent orchestration. Each component is purpose-built for real-world operations.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 md:p-8 transition-all duration-300"
                style={{
                  background: '#0a0a0a',
                  border: `1px solid ${cap.border}`,
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${cap.accent}15`, border: `1px solid ${cap.accent}30` }}>
                    <Icon className="w-7 h-7" style={{ color: cap.accent }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-white tracking-tight">{cap.title}</h3>
                    <p className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: cap.accent }}>
                      Powered by {cap.tech}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-6">{cap.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {cap.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: cap.accent }} />
                      <span className="text-xs text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(11,159,189,0.08) 0%, rgba(179,27,111,0.08) 100%)',
            border: '1px solid rgba(11,159,189,0.2)',
          }}
        >
          <h4 className="text-white font-black mb-2">Seamless Integration</h4>
          <p className="text-sm text-white/60">
            All NVIDIA components work together within AetherSync. You don't need to manage them separately—they're optimized as a unified system. Deploy once, benefit from enterprise-grade infrastructure without the complexity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
