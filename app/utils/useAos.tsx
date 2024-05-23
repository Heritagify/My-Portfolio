"use client";
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { AosOptions } from 'aos';
import AOS from 'aos';

export const useAos = () => {
  const [AOS, setAOS] = useState<any | null>(null);


  useEffect(() => {
    const importAOS = async () => {
      try {
        const aosModule = await import('aos');
        setAOS(aosModule.default);
        aosModule.default.init({
          once: true,
          duration: 1000,
          delay: 100,
        } as AosOptions);
      } catch (error) {
        console.error('Failed to load AOS:', error);
      }
    };

    importAOS();
  }, []);

  useEffect(() => {
    return () => {
      if (AOS) {
        AOS.refresh();
      }
    };
  }, [AOS]);

  return null;
};



