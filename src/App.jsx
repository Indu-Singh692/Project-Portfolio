import React, { useState, useEffect, useRef } from 'react';
import Preloader from './components/common/Preloader';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollCanvas from './components/canvas/ScrollCanvas';
import SolutionsSection from './components/sections/SolutionsSection';
import WorkSection from './components/sections/WorkSection';
import AboutSection from './components/sections/AboutSection';
import ProcessSection from './components/sections/ProcessSection';
import ContactSection from './components/sections/ContactSection';

const TOTAL_SOURCE_FRAMES = 300;
const DESKTOP_FRAME_COUNT = 200; // 200 frames on Desktop for ultra smooth 60FPS
const MOBILE_FRAME_COUNT = 38;    // 38 keyframes on Mobile for <1 second instant load
const CONCURRENCY_LIMIT = 24;

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [frameCount, setFrameCount] = useState(() => 
    typeof window !== 'undefined' && window.innerWidth < 640 ? MOBILE_FRAME_COUNT : DESKTOP_FRAME_COUNT
  );
  
  const bitmapsRef = useRef([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Map step index [0..frameCount - 1] to actual source frame index [1..300]
  const getActualFrameIndex = (step, totalSteps) => {
    if (totalSteps <= 1) return 1;
    const ratio = step / (totalSteps - 1);
    return Math.min(TOTAL_SOURCE_FRAMES, Math.max(1, Math.round(ratio * (TOTAL_SOURCE_FRAMES - 1)) + 1));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    let loadedCount = 0;
    const activeFrameCount = frameCount;
    bitmapsRef.current = new Array(activeFrameCount);

    async function loadFrame(stepIndex) {
      const actualIndex = getActualFrameIndex(stepIndex, activeFrameCount);
      const paddedIndex = String(actualIndex).padStart(3, '0');
      const url = `/images/ezgif-frame-${paddedIndex}.jpg`;

      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const bitmap = await createImageBitmap(blob, {
          resizeQuality: activeFrameCount <= MOBILE_FRAME_COUNT ? 'medium' : 'high'
        });
        bitmapsRef.current[stepIndex] = bitmap;
      } catch (e) {
        console.error(`Error loading frame ${actualIndex}:`, e);
      }

      loadedCount++;
      const pct = Math.floor((loadedCount / activeFrameCount) * 100);
      setProgress(pct);
    }

    async function loadAllFramesConcurrently() {
      const queue = Array.from({ length: activeFrameCount }, (_, i) => i);

      async function worker() {
        while (queue.length > 0) {
          const stepIndex = queue.shift();
          if (stepIndex !== undefined) {
            await loadFrame(stepIndex);
          }
        }
      }

      const workers = Array.from({ length: CONCURRENCY_LIMIT }, () => worker());
      await Promise.all(workers);

      // Fast pre-decoded reveal
      setIsLoaded(true);
    }

    loadAllFramesConcurrently();
  }, [frameCount]);

  return (
    <main id="home">
      <Preloader progress={progress} isLoaded={isLoaded} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollCanvas bitmapsRef={bitmapsRef} frameCount={frameCount} isLoaded={isLoaded} />
      <SolutionsSection />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
