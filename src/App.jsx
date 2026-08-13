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
const DESKTOP_FRAME_COUNT = 90; // 90 keyframes + smooth canvas interpolation = 60FPS
const MOBILE_FRAME_COUNT = 25;  // 25 keyframes on mobile for instant load
const URGENT_INITIAL_FRAMES = 3; // First 3 frames decode in <0.1s to dismiss preloader instantly
const CONCURRENCY_LIMIT = 12;

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
    const isMobile = activeFrameCount <= MOBILE_FRAME_COUNT;
    bitmapsRef.current = new Array(activeFrameCount);

    const targetWidth = isMobile ? 640 : 1280;

    async function loadSingleFrame(stepIndex) {
      const actualIndex = getActualFrameIndex(stepIndex, activeFrameCount);
      const paddedIndex = String(actualIndex).padStart(3, '0');
      const url = `/images/ezgif-frame-${paddedIndex}.jpg`;

      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const bitmap = await createImageBitmap(blob, {
          resizeWidth: targetWidth,
          resizeQuality: 'medium'
        });
        bitmapsRef.current[stepIndex] = bitmap;
      } catch (e) {
        console.error(`Error decoding frame ${actualIndex}:`, e);
      }

      loadedCount++;
      const pct = Math.floor((loadedCount / activeFrameCount) * 100);
      setProgress(pct);

      // Dismiss preloader as soon as urgent initial frames are ready (<0.1s)
      if (loadedCount >= URGENT_INITIAL_FRAMES) {
        setIsLoaded(true);
      }
    }

    async function progressiveLoadEngine() {
      // Phase 1: Urgent Load First 3 Keyframes (<0.1s)
      const urgentIndices = Array.from({ length: Math.min(URGENT_INITIAL_FRAMES, activeFrameCount) }, (_, i) => i);
      await Promise.all(urgentIndices.map(idx => loadSingleFrame(idx)));

      // Phase 2: Non-blocking background decode queue
      const remainingQueue = Array.from(
        { length: activeFrameCount - URGENT_INITIAL_FRAMES }, 
        (_, i) => i + URGENT_INITIAL_FRAMES
      );

      async function worker() {
        while (remainingQueue.length > 0) {
          const stepIndex = remainingQueue.shift();
          if (stepIndex !== undefined) {
            await loadSingleFrame(stepIndex);
          }
        }
      }

      const workers = Array.from({ length: CONCURRENCY_LIMIT }, () => worker());
      await Promise.all(workers);
    }

    progressiveLoadEngine();
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
