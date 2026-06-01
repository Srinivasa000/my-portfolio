import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Trophy, Cpu } from 'lucide-react';

export default function Story() {
  const chapters = [
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      title: 'Chapter I: The Sparks of Genesis',
      subtitle: 'Early Beginnings & Sparking Curiosity',
      content:
        'Growing up, computers were not just tools but portals to endless creation. What started as simple execution scripts quickly evolved into a burning question: How can we teach code to perceive, think, and react? This curiosity led me to pursue Computer Science Engineering, seeking the bridge between logic and automated cognition.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-rose-400" />,
      title: 'Chapter II: The Woxsen Forge',
      subtitle: 'Dive into Academic Rigor & AI Focus',
      content:
        'Entering Woxsen University, I focused explicitly on Artificial Intelligence and Machine Learning. The classroom was a launchpad, but the codebases were my laboratory. I dove headfirst into deep neural networks, monocular depth estimation frameworks, and natural language transformers, seeking real-world applications for abstract academic proofs.',
    },
    {
      icon: <Trophy className="w-5 h-5 text-indigo-400" />,
      title: 'Chapter III: Testing the Metal',
      subtitle: 'Proxenix Internship & Real-World Demands',
      content:
        'During my Data Science Internship at Proxenix, theory met production reality. Tasked with optimizing noisy, uncurated data, I restructured preprocessing pipelines, slashing cleaning duration by 75%. Tuning and deploying complex models yielded an 80% improvement in model performance. This experience proved that AI is only as good as its deployment pipeline.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-rose-400" />,
      title: 'Chapter IV: The Core Mission',
      subtitle: 'Looking Forward to High-Impact Systems',
      content:
        'My current mission is to build robust, ethical, and high-performance intelligent interfaces. I thrive on the boundary between AI research and full-stack software development. Whether developing monocular depth meshes for medical diagnosis or automating massive bank OCR pipelines, I strive to make complex systems highly performant and incredibly intuitive.',
    },
  ];

  return (
    <section id="story" className="w-full border-t border-surface-border/30 py-24 md:py-32 bg-obsidian-950/10">
      <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Title Panel */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-rose-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-rose-400 font-mono">Act II</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
            The Journey <br />
            <span className="font-serif italic font-light text-slate-300">Of Creation</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every breakthrough is forged from iterative failures. Here is the narrative story of how I transitioned from a curious student into a dedicated developer of intelligent, production-ready systems.
          </p>
          <div className="hidden lg:block w-full h-[1px] bg-surface-border/50 pt-4" />
        </div>

        {/* Right Side: Chapters Timeline */}
        <div className="lg:col-span-8 space-y-6">
          {chapters.map((chapter, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-lg relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-indigo-500 to-rose-400" />
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-obsidian-900/60 rounded border border-surface-border group-hover:border-indigo-500/20 transition-colors duration-300">
                  {chapter.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-indigo-400">
                    {chapter.subtitle}
                  </div>
                  <h3 className="text-lg md:text-xl font-outfit font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {chapter.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed pt-2 font-sans font-light">
                    {chapter.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
