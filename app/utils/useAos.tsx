"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAos = () => {
  useEffect(() => {
    AOS.init({
        once: true, // Animation should happen only once
        duration: 1000, // Animation duration (ms)
        delay: 100, // Values from 0 to 3000, with step 50ms
      });

    return () => {
      AOS.refresh();
    };
  }, []);
  
  return null
};