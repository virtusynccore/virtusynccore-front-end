'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', href: '/product' },
    { label: 'Infrastructure', href: '#features' },
    { label: 'Workflows', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        scrolled
          ? 'backdrop-blur-xl border-b py-4'
          : 'bg-transparent py-6'
    }`}
      style={scrolled ? {
        background: 'rgba(0,0,0,0.7)',
        borderColor: 'rgba(11,159,189,0.2)',
        boxShadow: '0 0 30px rgba(11,159,189,0.08), 0 1px 0 rgba(11,159,189,0.15)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center">
        
        {/* Left Side: Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-white/60 hover:text-white uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-border rounded-full text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Right Side: Horizontal line and Logo */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block w-24 lg:w-48 h-[2px] bg-secondary"></div>
          <div className="font-black text-2xl tracking-tighter flex items-center justify-center cursor-pointer text-primary">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 4H9L15 15V4H19V20H15L9 9V20H5V4Z" fill="currentColor" />
            </svg>
          </div>
        </div>

      </div>

      {/* Mobile Navigation Panel */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[300px] opacity-100 mt-4 px-6 pb-6 bg-background/95 backdrop-blur-md' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-4 border-t border-border pt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wider text-white/70 hover:text-white uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
