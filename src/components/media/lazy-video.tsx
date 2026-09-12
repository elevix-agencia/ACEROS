'use client';

import { useEffect, useRef, useState } from 'react';

type LazyVideoProps = {
  src: string;
  className?: string;
  ariaLabel: string;
};

export function LazyVideo({ src, className, ariaLabel }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const optimizedSrc =
    src.includes('res.cloudinary.com') &&
    src.includes('/video/upload/') &&
    !src.includes('/video/upload/q_') &&
    !src.includes('/video/upload/f_')
      ? src.replace('/video/upload/', '/video/upload/f_auto,q_auto:eco/')
      : src;

  return (
    <div ref={containerRef} className="h-full w-full bg-slate-200">
      {shouldLoad ? (
        <video
          src={optimizedSrc}
          className={className}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-label={ariaLabel}
        />
      ) : null}
    </div>
  );
}
