import React, { useEffect, useState } from 'react';

// Keeps remote Cashify assets stable across carousel changes and prevents broken-image icons.
export default function SafeImage({ src, alt = '', className = '', loading = 'lazy', fallback = '/assets/cashify-logo.svg', ...props }) {
  const [current, setCurrent] = useState(src || fallback);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setCurrent(src || fallback);
    setTriedFallback(false);
  }, [src, fallback]);

  const handleError = () => {
    if (!triedFallback && current !== fallback) {
      setTriedFallback(true);
      setCurrent(fallback);
    }
  };

  return <img src={current || fallback} alt={alt} className={className} loading={loading} decoding="async" onError={handleError} {...props}/>;
}
