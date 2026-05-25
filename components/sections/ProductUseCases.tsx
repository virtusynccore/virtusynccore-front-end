'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const useCases = [
  {
    title: 'Customer Service Automation',
    description: 'Deploy agents that handle customer inquiries, resolve issues, and escalate complex cases—all in real time with 24/7 availability.',
    benefits: [
      'Reduce response time by 80%',
      'Handle 10x more inquiries',
      'Improve customer satisfaction',
      'Lower support costs',
    ],
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    title: 'Workflow Orchestration',
    description: 'Connect your CRM, databases, and APIs. Let AI agents coordinate multi-step processes across your entire system automatically.',
    benefits: [
      'Eliminate manual handoffs',
      'Reduce human errors',
      'Accelerate task completion',
      'Free up your team',
    ],
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    title: 'Data Processing Pipeline',
    description: 'Intelligent agents analyze, validate, and route data across systems. Monitor quality in real time with automated corrections.',
    benefits: [
      'Process data 100x faster',
      'Ensure data consistency',
      'Automatic error handling',
      'Complete audit trails',
    ],
    accent: '#B31B6F',
    border: '#6C0E42',
  },
  {
    title: 'System Monitoring & Response',
    description: 'Agents monitor infrastructure health, detect anomalies, and execute responses automatically—keeping systems running without interruption.',
    benefits: [
      'Catch issues before users do',
      'Auto-remediate common problems',
      'Real-time alerting',
      '99.9% uptime SLA',
    ],
    accent: '#B31B6F',
    border: '#6C0E42',
  },
  {
    title: 'Business Process Automation',
    description: 'Automate complex business processes from onboarding to fulfillment. Agents handle approvals, validations, and compliance checks.',
    benefits: [
      'Reduce process time by 70%',
      'Ensure policy compliance',
      'Full audit logging',
      'Scale without hiring',
    ],
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    title: 'Content & Report Generation',
    description: 'AI agents generate reports, analyze trends, and create insights automatically. Update dashboards and stakeholders in real time.',
    benefits: [
      'Generate reports instantly',
      'Real-time analytics',
      'Custom insights on demand',
      'Save analyst time',
    ],
    accent: '#B31B6F',
    border: '#6C0E42',
  },
];

export default function ProductUseCases() {
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
            style={{ color: '#0B9FBD', borderColor: '#025067', background: '#02506720' }}
          >
            Real-World Applications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Use cases for <span style={{ color: '#0B9FBD' }}>every business</span>
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-lg font-medium max-w-2xl">
            From startups to enterprises, AetherSync adapts to your industry. Here are just some of the ways organizations use our platform.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer hover:scale-105"
              style={{
                background: '#0a0a0a',
                border: `1px solid ${useCase.border}`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 0 40px ${useCase.accent}40, 0 8px 32px rgba(0,0,0,0.6)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 0 0 1px transparent';
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-black text-white tracking-tight">{useCase.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: useCase.accent }} />
              </div>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed mb-6">{useCase.description}</p>

              {/* Benefits */}
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-widest" style={{ color: useCase.accent }}>Key Benefits</p>
                {useCase.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: useCase.accent }} />
                    <span className="text-xs text-white/50">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Use Case CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-sm md:text-base mb-4">Don't see your use case? AetherSync is flexible enough to handle custom workflows.</p>
          <a
            href="https://app.virtusynccore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #0B9FBD, #025067)', color: '#000000' }}
          >
            Talk to Our Team <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
