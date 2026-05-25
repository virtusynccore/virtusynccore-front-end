'use client';

import { motion } from 'motion/react';
import { Globe, Cpu } from 'lucide-react';

export default function BottomRightCorner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
      className="absolute bottom-24 right-6 md:bottom-28 md:right-10 z-20"
    >
      <div
        className="rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[260px] md:max-w-[320px]"
        style={{
          background: 'rgba(3,26,34,0.55)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(179,27,111,0.22)',
          boxShadow: '0 0 40px rgba(179,27,111,0.08), 0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(179,27,111,0.12)',
            border: '1px solid rgba(179,27,111,0.3)',
          }}
        >
          <Cpu className="w-4 h-4" style={{ color: '#B31B6F' }} />
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <Globe className="w-2.5 h-2.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.35)' }} />
            <span
              className="text-[9px] font-black tracking-[0.15em] uppercase truncate"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Crivity Visual Design.com
            </span>
          </div>
          <p
            className="text-[10px] font-semibold leading-tight"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            AI Agent Infrastructure &amp; Intelligent Workflow Automation Platform
          </p>
        </div>
      </div>
    </motion.div>
  );
}
