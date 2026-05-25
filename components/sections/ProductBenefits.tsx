'use client';

import { motion } from 'motion/react';
import { Zap, Users, Shield, TrendingUp, Clock, Lightbulb } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Deploy in Minutes',
    description: 'Get AI agents running in your environment instantly with zero infrastructure overhead. No complex setup required.',
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    icon: Users,
    title: 'Works With Your Team',
    description: 'Seamlessly integrates with existing tools and workflows. Your team maintains full control and visibility.',
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Role-based access control, end-to-end encryption, and SOC 2 Type II compliance built in from day one.',
    accent: '#B31B6F',
    border: '#6C0E42',
  },
  {
    icon: TrendingUp,
    title: 'Scale Without Limits',
    description: 'Handle millions of tasks daily. AetherSync grows with your business, handling 10M+ tasks per day.',
    accent: '#0B9FBD',
    border: '#025067',
  },
  {
    icon: Clock,
    title: 'Real-Time Insights',
    description: 'Monitor agent performance, task execution, and system health with live dashboards and instant alerts.',
    accent: '#B31B6F',
    border: '#6C0E42',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Agents adapt and improve over time. Built-in analytics help you optimize workflows and reduce costs.',
    accent: '#0B9FBD',
    border: '#025067',
  },
];

export default function ProductBenefits() {
  return (
    <section id="product-benefits" style={{ background: '#000000' }} className="py-14 md:py-24 font-sans">
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
            Why AetherSync
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Designed for <span style={{ color: '#0B9FBD' }}>your success</span>
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-lg font-medium max-w-2xl">
            AetherSync brings together enterprise-grade capabilities with user-friendly design. Deploy intelligent agents that work the way you do.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105"
                style={{
                  background: '#0a0a0a',
                  border: `1px solid ${benefit.border}`,
                  boxShadow: `0 0 0 1px ${benefit.border}44, 0 8px 24px rgba(0,0,0,0.4)`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 0 40px ${benefit.accent}40, 0 8px 32px rgba(0,0,0,0.6)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 0 0 1px ${benefit.border}44, 0 8px 24px rgba(0,0,0,0.4)`;
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${benefit.accent}15`, border: `1px solid ${benefit.accent}30` }}>
                  <Icon className="w-6 h-6" style={{ color: benefit.accent }} />
                </div>
                <h3 className="text-lg font-black text-white mb-2 tracking-tight">{benefit.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
