'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

const ctaFeatures = [
  'Free startup tier with 1M tasks/month',
  'No credit card required',
  'Deploy in under 15 minutes',
  'Dedicated onboarding support',
];

export default function ProductCTA() {
  return (
    <section style={{ background: '#000000' }} className="py-14 md:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(11,159,189,0.1) 0%, rgba(179,27,111,0.1) 100%)',
            border: '1px solid rgba(11,159,189,0.3)',
          }}
        >
          {/* Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border backdrop-blur-md"
              style={{ borderColor: '#0B9FBD', background: 'rgba(11,159,189,0.08)' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: '#0B9FBD', animation: 'pulse 2s infinite' }} />
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#0B9FBD' }}>
                Ready to Transform Operations?
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4"
            >
              Start With AetherSync <span style={{ color: '#0B9FBD' }}>Today</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
            >
              Join companies that are revolutionizing operations with intelligent autonomous agents.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 mb-10 w-full sm:w-auto"
            >
              {ctaFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#0B9FBD' }} />
                  <span className="text-sm text-white/70 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <motion.a
                href="https://app.virtusynccore.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #0B9FBD, #025067)', color: '#000000', boxShadow: '0 0 40px rgba(11,159,189,0.4)' }}
              >
                Launch AetherSync <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://app.virtusynccore.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider border transition-colors duration-300"
                style={{ borderColor: '#0B9FBD', color: '#0B9FBD', background: 'rgba(11,159,189,0.08)' }}
              >
                Schedule Demo
              </motion.a>
            </motion.div>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="text-xs text-white/40 mt-8"
            >
              Enterprise plans available. Contact sales for custom deployments.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
