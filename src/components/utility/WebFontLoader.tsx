'use client';

import { useEffect } from 'react';

const WebFontLoader = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    script.onload = () => {
      if (window.WebFont) {
        window.WebFont.load({
          google: {
            families: [
              "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
            ]
          }
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return null;
};

export default WebFontLoader;
