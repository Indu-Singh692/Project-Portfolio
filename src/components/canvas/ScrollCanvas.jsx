import React, { useEffect, useRef } from 'react';
import ScrollTextOverlay from './ScrollTextOverlay';
import './ScrollCanvas.css';

export default function ScrollCanvas({ bitmapsRef, frameCount = 300, isLoaded }) {
  const canvasRef = useRef(null);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);

  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Find exact bitmap or nearest decoded fallback bitmap
    let bmp = bitmapsRef.current[index];
    if (!bmp && bitmapsRef.current.length > 0) {
      for (let offset = 1; offset < frameCount; offset++) {
        if (index - offset >= 0 && bitmapsRef.current[index - offset]) {
          bmp = bitmapsRef.current[index - offset];
          break;
        }
        if (index + offset < frameCount && bitmapsRef.current[index + offset]) {
          bmp = bitmapsRef.current[index + offset];
          break;
        }
      }
    }
    if (!bmp) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = bmp.width;
    const imgHeight = bmp.height;

    // Highest quality bi-cubic image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const canvasAspect = canvasWidth / canvasHeight;
    const imgAspect = imgWidth / imgHeight;

    let drawWidth, drawHeight;

    // Full Screen Cover Mode: Completely fills 100% of viewport edge-to-edge
    if (canvasAspect > imgAspect) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgAspect;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgAspect;
    }

    // Exact integer coordinates eliminate sub-pixel blurring
    drawWidth = Math.round(drawWidth);
    drawHeight = Math.round(drawHeight);
    const offsetX = Math.round((canvasWidth - drawWidth) / 2);
    const offsetY = Math.round((canvasHeight - drawHeight) / 2);

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(bmp, offsetX, offsetY, drawWidth, drawHeight);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);

    if (isLoaded) {
      renderFrame(Math.round(currentFrameRef.current));
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (maxScroll <= 0) return;

    const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
    targetFrameRef.current = scrollFraction * (frameCount - 1);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoaded, frameCount]);

  useEffect(() => {
    if (!isLoaded) return;

    handleScroll();
    currentFrameRef.current = targetFrameRef.current;
    renderFrame(Math.round(currentFrameRef.current));

    const animate = () => {
      const ease = 0.15;
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * ease;

      const frameToDraw = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      renderFrame(frameToDraw);
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isLoaded, frameCount]);

  return (
    <div className="scroll-container">
      <canvas ref={canvasRef} id="scroll-canvas" />
      <div className="dark-canvas-overlay" />
      <ScrollTextOverlay />
    </div>
  );
}
