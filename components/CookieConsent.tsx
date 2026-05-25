'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Cookie Consent</h3>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-md">
            We use cookies to enhance your experience, analyze site traffic, and serve targeted ads. By accepting, you consent to our use of cookies as outlined in our{' '}
            <a href="/privacy-policy" className="text-cyan-400 hover:underline">
              Privacy Policy
            </a>.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
