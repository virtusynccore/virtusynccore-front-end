'use client';

import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export default function ProductHero() {
  return (
    <div id="product-hero" className="w-full h-screen flex items-center justify-center p-2 sm:p-3 md:p-5 bg-[#000000]">
      <section className="relative w-full max-w-[1536px] h-full rounded-2xl md:rounded-[3rem] overflow-hidden flex flex-col items-center bg-white/10">

        {/* Video Background */}
        <video
          autoPlay muted loop playsInline
          poster="/hero-robot.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source
            src="/herobg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(2,80,103,0.4) 50%, rgba(0,0,0,0.75) 100%)' }} />

        {/* Neon grid overlay */}
        <div className="absolute inset-0 z-[1] opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(11,159,189,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,159,189,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Ambient glow orbs */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div className="absolute" style={{ top: '-10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,159,189,0.14) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float-orb 10s ease-in-out infinite' }} />
          <div className="absolute" style={{ bottom: '-5%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(179,27,111,0.12) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'float-orb 13s ease-in-out infinite 3s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <div className="w-full max-w-4xl flex flex-col items-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-md"
              style={{ borderColor: '#0B9FBD', background: 'rgba(11,159,189,0.1)' }}
            >
              <Zap className="w-4 h-4" style={{ color: '#0B9FBD' }} />
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest" style={{ color: '#0B9FBD' }}>
                Powered by NVIDIA SDKs
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4.5rem] font-black leading-[1.05] tracking-tight text-white mb-3 mt-2"
              style={{ textShadow: '0 2px 40px rgba(0,0,0,0.6)' }}
            >
              <span className="text-white block">Meet AetherSync</span>
              <span className="text-white block">Enterprise AI Agent</span>
              <span className="text-white">Platform for </span>
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B9FBD] to-[#6C0E42]"
                style={{ filter: 'drop-shadow(0 0 20px rgba(11,159,189,0.5))' }}
              >
                Autonomous Operations
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-sm md:text-base lg:text-lg font-medium max-w-sm sm:max-w-2xl mb-8 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Deploy intelligent autonomous agents that learn, adapt, and execute complex business operations at enterprise scale. Seamlessly integrate with your existing systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-12"
            >
              <motion.a
                href="https://app.virtusynccore.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #0B9FBD, #025067)', color: '#000000', boxShadow: '0 0 40px rgba(11,159,189,0.4)' }}
              >
                Launch AetherSync <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('product-benefits')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider border transition-colors duration-300"
                style={{ borderColor: '#0B9FBD', color: '#0B9FBD', background: 'rgba(11,159,189,0.08)' }}
              >
                Explore Features
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center gap-5 sm:gap-10 mt-6"
            >
              {[
                { val: '10M+', label: 'Tasks Per Day' },
                { val: '<50ms', label: 'Agent Latency' },
                { val: '99.9%', label: 'Uptime SLA' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-lg md:text-2xl font-black text-white" style={{ textShadow: '0 0 16px rgba(11,159,189,0.4)' }}>
                    {s.val}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Top edge neon line */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] z-20 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(11,159,189,0.6), rgba(179,27,111,0.6), transparent)' }} />
      </section>
    </div>
  );
}
