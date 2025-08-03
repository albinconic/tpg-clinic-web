'use client';

import { useEffect } from "react";

const GTM_ID = "GTM-NH92S663";

const GTM = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
    });

    // Load GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default GTM;