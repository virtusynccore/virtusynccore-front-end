'use client';

import { useEffect, useState, useRef } from 'react';

export default function CreativeVisuals() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    const onLeave = () => setCursorVisible(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    // Particle network canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;

    interface P { x: number; y: number; vx: number; vy: number; r: number; hue: number }
    let pts: P[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      pts = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        hue: Math.random() > 0.5 ? 191 : 330, // cyan or magenta hue
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, 0.7)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, 0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (let a = 0; a < pts.length; a++) {
        for (let b = a + 1; b < pts.length; b++) {
          const dx = pts[a].x - pts[b].x;
          const dy = pts[a].y - pts[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            const h = pts[a].hue === pts[b].hue ? pts[a].hue : 260;
            ctx.strokeStyle = `hsla(${h}, 80%, 65%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[a].x, pts[a].y);
            ctx.lineTo(pts[b].x, pts[b].y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Neon grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none neon-grid opacity-60" />

      {/* Animated neon orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Cyan orb — top left */}
        <div
          className="absolute animate-float-orb"
          style={{
            top: '10%', left: '-5%',
            width: 600, height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(11,159,189,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Magenta orb — bottom right */}
        <div
          className="absolute animate-float-orb-delay"
          style={{
            bottom: '5%', right: '-8%',
            width: 700, height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(179,27,111,0.16) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Dark teal orb — center */}
        <div
          className="absolute animate-float-orb-slow"
          style={{
            top: '40%', left: '40%',
            width: 500, height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(2,80,103,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Small cyan accent — top right */}
        <div
          className="absolute animate-float-orb-delay"
          style={{
            top: '15%', right: '10%',
            width: 300, height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(11,159,189,0.12) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-50" />

      {/* Scan line */}
      <div
        className="fixed left-0 right-0 h-[2px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(11,159,189,0.4), rgba(179,27,111,0.4), transparent)',
          animation: 'scanline 8s linear infinite',
          top: 0,
        }}
      />

      {/* Neon HUD cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block transition-opacity duration-200 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px)` }}
      >
        {/* Outer rotating ring */}
        <div
          className="absolute w-8 h-8 rounded-full"
          style={{
            border: '1px solid rgba(11,159,189,0.8)',
            boxShadow: '0 0 8px rgba(11,159,189,0.6), inset 0 0 8px rgba(11,159,189,0.2)',
            animation: 'spin 3s linear infinite',
          }}
        />
        {/* Inner dot */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
          style={{
            background: '#0B9FBD',
            boxShadow: '0 0 6px rgba(11,159,189,1)',
          }}
        />
        {/* Cross hairs */}
        <div className="absolute top-1/2 left-0 w-full h-[1px]" style={{ background: 'rgba(11,159,189,0.4)', transform: 'translateY(-50%)' }} />
        <div className="absolute left-1/2 top-0 h-full w-[1px]" style={{ background: 'rgba(11,159,189,0.4)', transform: 'translateX(-50%)' }} />
        {/* Coords */}
        <div className="absolute top-9 left-9 flex flex-col gap-0.5 whitespace-nowrap">
          <span className="text-[6px] font-black tracking-widest uppercase" style={{ color: '#0B9FBD', textShadow: '0 0 6px rgba(11,159,189,0.8)' }}>
            X: {Math.round(mousePos.x)}
          </span>
          <span className="text-[6px] font-black tracking-widest uppercase" style={{ color: '#B31B6F', textShadow: '0 0 6px rgba(179,27,111,0.8)' }}>
            Y: {Math.round(mousePos.y)}
          </span>
        </div>
      </div>

      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)',
      }} />
    </>
  );
}
