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

const FRAME_COUNT = 300;
const CONCURRENCY_LIMIT = 24; // 24 parallel GPU decoding workers for fast loading

function getFrameUrl(index) {
  const paddedIndex = String(index).padStart(3, '0');
  return `/images/ezgif-frame-${paddedIndex}.jpg`;
}

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');
  const bitmapsRef = useRef(new Array(FRAME_COUNT));

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    let loadedCount = 0;

    async function loadFrame(index) {
      const url = getFrameUrl(index);
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const bitmap = await createImageBitmap(blob, {
          resizeQuality: 'high'
        });
        bitmapsRef.current[index - 1] = bitmap;
      } catch (e) {
        console.error(`Error loading frame ${index}:`, e);
      }

      loadedCount++;
      const pct = Math.floor((loadedCount / FRAME_COUNT) * 100);
      setProgress(pct);
    }

    async function loadAllFramesConcurrently() {
      const queue = Array.from({ length: FRAME_COUNT }, (_, i) => i + 1);

      async function worker() {
        while (queue.length > 0) {
          const frameIndex = queue.shift();
          if (frameIndex) {
            await loadFrame(frameIndex);
          }
        }
      }

      const workers = Array.from({ length: CONCURRENCY_LIMIT }, () => worker());
      await Promise.all(workers);

      // 100% of 300 frames pre-decoded in GPU VRAM -> Smooth reveal
      setIsLoaded(true);
    }

    loadAllFramesConcurrently();
  }, []);

  return (
    <main id="home">
      <Preloader progress={progress} isLoaded={isLoaded} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollCanvas bitmapsRef={bitmapsRef} frameCount={FRAME_COUNT} isLoaded={isLoaded} />
      <SolutionsSection />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
