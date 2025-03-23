
import { Briefcase } from 'lucide-react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Generate SVG favicon with briefcase icon
export const generateFavicon = () => {
  const iconSvg = ReactDOMServer.renderToString(
    React.createElement(Briefcase, {
      color: '#3b82f6', // Blue color to match your theme
      size: 32,
      strokeWidth: 2,
    })
  );

  const svgBlob = new Blob([iconSvg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgBlob);
  
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
};
