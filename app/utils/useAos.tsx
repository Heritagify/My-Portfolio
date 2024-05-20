"use client";
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

export const useAos = () => {
  const [AOS, setAOS] = useState(null);

  useEffect(() => {
    const importAOS = async () => {
      try {
        const aosModule = await import('aos');
        setAOS(aosModule.default);
        aosModule.default.init({
          once: true,
          duration: 1000,
          delay: 100,
        });
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