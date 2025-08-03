'use client';

import { useEffect } from 'react';

const FacebookPixel = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Prevent duplicate load
    if ((window as any).fbq) return;

    const fbq = function (...args: any[]) {
      (window as any).fbq.callMethod
        ? (window as any).fbq.callMethod.apply(window.fbq, args)
        : (window as any).fbq.queue.push(args);
    };

    (window as any).fbq = fbq;
    (window as any).fbq.push = fbq;
    (window as any).fbq.loaded = true;
    (window as any).fbq.version = '2.0';
    (window as any).fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    // Init and track
    (window as any).fbq('init', '259407931315119');
    (window as any).fbq('track', 'PageView');
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=259407931315119&ev=PageView&noscript=1"
      />
    </noscript>
  );
};

export default FacebookPixel;
