'use client';

import { useEffect } from 'react';

export default function ChatwootScript() {
  useEffect(() => {
    const BASE_URL = 'https://app.chatwoot.com';
    const script = document.createElement('script');
    script.src = BASE_URL + '/packs/js/sdk.js';
    script.async = true;
    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: 'dCYhUXmSuFHB2oxUaECxjjeQ',
          baseUrl: BASE_URL,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
