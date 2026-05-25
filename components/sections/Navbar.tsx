'use client';

import { useState } from 'react';
import { Home, Flame, Zap, Settings, MessageSquare, HelpCircle, Mail } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');

  const navItems = [
    { id: 'hero',         label: 'Home',     icon: Home,          href: '/#hero' },
    { id: 'features',     label: 'Features', icon: Zap,           href: '/#features' },
    { id: 'how-it-works', label: 'Process',  icon: Settings,      href: '/#how-it-works' },
    { id: 'logo',         label: 'Logo',     isCenter: true,      href: '/#hero' },
    { id: 'testimonials', label: 'Reviews',  icon: MessageSquare, href: '/#testimonials' },
    { id: 'faq',          label: 'FAQ',      icon: HelpCircle,    href: '/#faq' },
    { id: 'contact',      label: 'Contact',  icon: Mail,          href: '/#contact' },
  ];

  return (
    /* Positioned at the very bottom of the screen, respects iOS home indicator */
    <div
      className="fixed bottom-0 left-0 w-full z-50 pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}
    >
      <div className="w-full max-w-[640px] mx-auto px-3 flex flex-col items-center pointer-events-auto">

        {/* Navigation pill */}
        <div
          className="w-full bg-white rounded-[28px] flex justify-between items-center shadow-[0px_8px_24px_rgba(0,0,0,0.08)]"
          style={{ padding: '8px 4px 12px' }}
        >
          {navItems.map((item) => {
            if (item.isCenter) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className="relative flex flex-col items-center justify-center"
                  style={{ minWidth: 52, margin: '0 4px' }}
                >
                  <div
                    className="absolute flex items-center justify-center cursor-pointer hover:scale-105 transition-transform z-10 border-4 border-white"
                    style={{
                      top: -20,
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: '#000',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
                    }}
                  >
                    <Flame className="w-5 h-5 text-white" fill="white" />
                  </div>
                  {/* spacer so other items don't collapse */}
                  <div style={{ height: 44 }} />
                </a>
              );
            }

            const isActive = activeTab === item.id;
            const Icon = item.icon!;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center justify-center gap-0.5"
                style={{ minWidth: 44, padding: '2px 2px' }}
              >
                <div className={`transition-colors ${isActive ? 'text-[#0B9FBD]' : 'text-[#A0A4AB]'}`}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={`transition-all leading-none ${isActive ? 'text-[#0B9FBD] font-bold' : 'text-[#A0A4AB] font-medium'}`}
                  style={{ fontSize: 8 }}
                >
                  {item.label}
                </span>
                <div
                  className={`rounded-full mt-0.5 transition-all ${isActive ? 'bg-[#0B9FBD]' : 'bg-transparent'}`}
                  style={{ width: 4, height: 4 }}
                />
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}
