'use client';

import { motion } from 'motion/react';
import { Users, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';

export default function BottomLeftCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
      className="absolute bottom-24 left-6 md:bottom-28 md:left-10 z-20"
    >
      <div
        className="rounded-2xl p-4 md:p-5 flex flex-col gap-3 min-w-[160px]"
        style={{
          background: 'rgba(3,26,34,0.55)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(11,159,189,0.25)',
          boxShadow: '0 0 40px rgba(11,159,189,0.1), 0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(11,159,189,0.12)',
                border: '1px solid rgba(11,159,189,0.3)',
              }}
            >
              <Users className="w-4 h-4" style={{ color: '#0B9FBD' }} />
            </div>
            <div>
              <motion.p
                className="text-white font-black text-lg leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                style={{ textShadow: '0 0 12px rgba(11,159,189,0.4)' }}
              >
                5.2K
              </motion.p>
              <p className="text-[10px] font-semibold tracking-widest uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Active Agents
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1" style={{ color: '#0B9FBD' }}>
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">+12%</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(11,159,189,0.12)' }} />

        {/* Button */}
        <motion.button
          onClick={() => window.location.href = '/#how-it-works'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 mt-4 rounded-xl text-xs font-black uppercase tracking-wider transition-colors"
          style={{
            background: 'linear-gradient(135deg, #0B9FBD, #025067)',
            color: '#000000',
            border: '1px solid #0B9FBD40',
            boxShadow: '0 0 20px rgba(11,159,189,0.3)',
          }}
        >
          View Live Metrics <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
