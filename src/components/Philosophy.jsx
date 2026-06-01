import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Heart, Anchor } from 'lucide-react';

export default function Philosophy() {
  const values = [
    {
      number: '01',
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      title: 'Simplification Over Complexity',
      description:
        'True sophistication in machine learning lies not in stacking infinite neural layers, but in architectural elegance and clean feature mappings. I engineer models to be highly performant, lightweight, and easily deployable.',
    },
    {
      number: '02',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      title: 'Human-Centered Intelligent Design',
      description:
        'Intelligent systems are empty computations if they do not serve human operators. Whether reconstructing X-rays or screening resume profiles, I build with user empathy, fast rendering latency, and intuitive interfaces.',
    },
    {
      number: '03',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: 'Ethical & Accessible Engineering',
      description:
        'AI must be explainable, transparent, and fair. I prioritize data integrity, strict preprocessing parameters, and consistent metrics to ensure automated decisions remain balanced, secure, and fully auditable.',
    },
    {
      number: '04',
      icon: <Anchor className="w-5 h-5 text-rose-400" />,
      title: 'Active Learning & Constant Iteration',
      description:
        'The boundaries of deep learning expand daily. I stay grounded by constantly testing novel models, participating in rigorous hackathons, acquiring certifications, and iteratively refining pipelines.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto border-t border-surface-border/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Bold Philosophy Billboard */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-indigo-400"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono">Act VI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
            Core Ideals & <br />
            <span className="font-serif italic font-light text-slate-300">Work Philosophy</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans font-light">
            I believe that artificial intelligence is the ultimate utility for amplifying human potential. 
            My engineering values guide how I clean data, structure nodes, deploy APIs, and collaborate inside teams.
          </p>
          <div className="p-5 bg-obsidian-900/60 rounded border border-surface-border/80 flex items-start gap-4">
            <div className="text-lg font-serif italic text-indigo-400 flex-shrink-0">“</div>
            <p className="text-xs italic text-slate-400 leading-relaxed font-sans">
              Algorithms should not just compute. They should illuminate paths, automate stress, and rebuild possibilities.
            </p>
          </div>
        </div>

        {/* Right Side: Ideals Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
            >
              {/* Floating index */}
              <span className="absolute top-4 right-4 font-serif italic text-3xl text-slate-800/50 group-hover:text-indigo-500/10 transition-colors duration-300">
                {val.number}
              </span>
              
              <div className="space-y-4">
                <div className="p-2.5 bg-obsidian-900/60 rounded border border-surface-border group-hover:border-indigo-500/20 transition-colors duration-300 w-fit">
                  {val.icon}
                </div>
                <h3 className="text-sm md:text-base font-outfit font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans font-light">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
