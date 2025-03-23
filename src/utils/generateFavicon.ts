
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
  
  const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
  if (link) {
    link.type = 'image/svg+xml';
    link.href = url;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.type = 'image/svg+xml';
    newLink.href = url;
    document.head.appendChild(newLink);
  }
};
