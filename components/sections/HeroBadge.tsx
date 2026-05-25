'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
      style={{
        background: 'rgba(11,159,189,0.08)',
        border: '1px solid rgba(11,159,189,0.35)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 20px rgba(11,159,189,0.12)',
      }}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles className="w-5 h-5" style={{ color: '#0B9FBD' }} />
      </motion.div>
      <img
        src="/logo.svg"
        alt="Crivity Visual Design logo"
        className="w-10 h-10 sm:w-12 sm:h-12"
        style={{ minWidth: 40, minHeight: 40 }}
      />
      <motion.div
        className="w-2 h-2 rounded-full"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ background: '#0B9FBD', boxShadow: '0 0 8px rgba(11,159,189,1)' }}
      />
    </motion.div>
  );
}
