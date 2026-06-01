import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractivePointer() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for actual mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the trailing halo ring
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 35 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 35 });

  useEffect(() => {
    // Detect touch device
    const touchQuery = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(touchQuery.matches);
    
    const handleTouchChange = (e) => setIsTouchDevice(e.matches);
    touchQuery.addEventListener('change', handleTouchChange);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Event delegation to check if mouse is hovering over interactive components
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target is a link, button, input, textarea, or has a specific attribute
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[data-hover="true"]') ||
        target.classList.contains('interactive-element');

      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      touchQuery.removeEventListener('change', handleTouchChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouchDevice || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* ─── TRAILING RING (SPRING-BASED HALO) ─── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-indigo-400/40 bg-indigo-500/5 mix-blend-screen shadow-[0_0_12px_rgba(99,102,241,0.2)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 44 : 24,
          height: hovered ? 44 : 24,
        }}
        animate={{
          scale: hovered ? 1.25 : 1,
          borderColor: hovered ? 'rgba(244, 63, 94, 0.6)' : 'rgba(99, 102, 241, 0.4)',
          backgroundColor: hovered ? 'rgba(244, 63, 94, 0.08)' : 'rgba(99, 102, 241, 0.03)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />

      {/* ─── SHARP PRECISION CENTER DOT ─── */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full z-50 bg-indigo-400 shadow-[0_0_8px_#6366f1]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 0.75 : 1,
          backgroundColor: hovered ? '#f43f5e' : '#6366f1',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
