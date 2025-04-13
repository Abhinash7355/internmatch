
import { useRef, useEffect, useState } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

// Enhanced animation hook to handle intersection observer for scroll animations
export function useAnimation(options: AnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    once = true
  } = options;
  
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              entry.target.classList.add('animate-in');
              if (once) {
                observer.unobserve(entry.target);
              }
            }, delay);
          } else if (!once) {
            setIsVisible(false);
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, delay, once]);
  
  return { ref, isVisible };
}
