import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  const orbVariants = {
    animate1: {
      x: [0, 40, -20, 0],
      y: [0, -50, 30, 0],
      scale: [1, 1.1, 0.95, 1],
      transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
    },
    animate2: {
      x: [0, -30, 50, 0],
      y: [0, 40, -40, 0],
      scale: [1, 0.9, 1.15, 1],
      transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-16 overflow-hidden cinematic-grid"
    >
      {/* Drifting Glowing Ambient Orbs */}
      <motion.div
        variants={orbVariants}
        animate="animate1"
        className="absolute right-[10%] top-[20%] w-80 md:w-[450px] h-80 md:h-[450px] rounded-full glow-orb"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
      />
      <motion.div
        variants={orbVariants}
        animate="animate2"
        className="absolute left-[10%] bottom-[15%] w-96 md:w-[500px] h-96 md:h-[500px] rounded-full glow-orb"
        style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-left"
        >
          {/* Subheader Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-indigo-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> AI & ML Engineer · CSE Undergraduate
            </span>
          </motion.div>

          {/* Epic Cinematic Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-outfit font-extrabold tracking-tighter leading-[0.9] text-white"
          >
            Srinivasa <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-rose-400">Rao</span> <br className="hidden sm:inline" />
            <span className="font-serif italic font-light text-slate-300">Maddikunta</span>
          </motion.h1>

          {/* Emotional Narrative Intro */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-slate-400 text-sm md:text-base md:leading-relaxed font-sans font-light"
          >
            Computer Science undergraduate at{' '}
            <strong className="text-indigo-300 font-medium font-outfit">Woxsen University</strong>. 
            I engineer intelligent algorithms that translate abstract computational science into human-centered impacts — 
            from <span className="text-rose-400">2D medical X-ray 3D reconstructions</span> to complex{' '}
            <span className="text-indigo-400">NLP screening networks</span> and automated systems.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-outfit font-semibold text-xs md:text-sm tracking-wider rounded border border-indigo-500/20 shadow-[0_0_25px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] transition-all duration-300"
            >
              Explore Success Stories <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-obsidian-900/60 hover:bg-surface border border-surface-border text-slate-300 hover:text-white font-outfit font-semibold text-xs md:text-sm tracking-wider rounded transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/Srinivasa000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-obsidian-900/60 hover:bg-surface border border-surface-border text-slate-300 hover:text-white font-outfit font-semibold text-xs md:text-sm tracking-wider rounded transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4" /> GitHub ↗
            </a>
          </motion.div>

          {/* Performance Stats Panel */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-8 border-t border-surface-border/50"
          >
            <div>
              <div className="text-3xl md:text-5xl font-outfit font-extrabold text-white">
                3<span className="text-indigo-400">+</span>
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono">
                Production Apps
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-outfit font-extrabold text-white">
                4<span className="text-rose-400">+</span>
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono">
                Certifications
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-outfit font-extrabold text-indigo-400">
                80<span className="text-slate-300">%</span>
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono">
                Pipeline Optimization
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-outfit font-extrabold text-rose-400">
                92<span className="text-slate-300">%</span>
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono">
                OCR Accuracy
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
