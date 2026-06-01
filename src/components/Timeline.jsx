import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Star } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      date: 'Jun 2025 – Jul 2025',
      type: 'intern',
      icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
      title: 'Data Science Intern',
      organization: 'Proxenix · Remote',
      details: [
        'Optimized critical data preprocessing pipelines, shrinking cleaning workflows by 75%.',
        'Tuned machine learning parameters, resulting in an 80% key metric performance boost.',
        'Redesigned annotation workflows to escalate annotation throughput by 50%.',
      ],
      tag: 'Experience',
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      date: '2024',
      type: 'achievement',
      icon: <Award className="w-4 h-4 text-rose-400" />,
      title: 'Stanford ML & Tata Data Analytics',
      organization: 'Stanford Online / Forage Academy',
      details: [
        'Completed Stanford University’s Machine Learning Certification, cementing foundations in deep learning, SVMs, and neural theory.',
        'Finished the Tata Data Analytics Virtual Experience, building analytics visualizations and business insights.',
        'Top 10 Finalist at CodeClash (VIT Vellore) competing against 500+ programmers.',
      ],
      tag: 'Certifications & Awards',
      tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    },
    {
      date: '2023',
      type: 'education',
      icon: <Star className="w-4 h-4 text-teal-400" />,
      title: 'Michigan Python & TechVortex Finalist',
      organization: 'University of Michigan / Symbiosis Pune',
      details: [
        'Acquired certifications in Applied Data Science with Python and Python for Everybody.',
        'Finalist at TechVortex Hackathon (Pune), developing computational prototypes.',
        'Began deep research into Monocular depth estimation and convolutional feature mappings.',
      ],
      tag: 'Learning Paths',
      tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
    {
      date: '2022 – 2026',
      type: 'education',
      icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
      title: 'B.Tech in Computer Science (AI & ML)',
      organization: 'Woxsen University · Hyderabad, India',
      details: [
        'Core focus on Neural Networks, Natural Language Processing, Computer Vision, and Software Engineering.',
        'Maintained a stellar academic record while actively steering CSE technical workgroups.',
        'Developed foundational interest in monocular depth estimation and advanced OCR mechanics.',
      ],
      tag: 'Education',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto border-t border-surface-border/30">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2">
          <span className="h-[1px] w-6 bg-indigo-400"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono">Act V</span>
          <span className="h-[1px] w-6 bg-indigo-400"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
          Milestone Timeline <br />
          <span className="font-serif italic font-light text-slate-300">Of Academic & Industry Growth</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          A chronological journey summarizing key turning points, education, technical achievements, and industrial experience.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Timeline Items */}
        <div className="space-y-12">
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                
                {/* ─── MOBILE VIEW (md:hidden) ─── */}
                <div className="flex md:hidden items-start w-full relative pl-8">
                  {/* Left Spine line on mobile */}
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-surface-border/80" />
                  
                  {/* Node icon */}
                  <div className="absolute left-1 top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border border-surface-border flex items-center justify-center shadow-[0_0_8px_rgba(99,102,241,0.2)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  </div>
                  
                  {/* Static Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="w-full pb-4"
                  >
                    <div className="glass-panel p-5 rounded-lg border-surface-border/60 hover:border-indigo-500/10 transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">{event.date}</span>
                        <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded border ${event.tagColor}`}>
                          {event.tag}
                        </span>
                      </div>
                      <h4 className="text-sm font-outfit font-bold text-white mb-0.5">{event.title}</h4>
                      <p className="text-[10px] font-mono text-indigo-400 mb-3">{event.organization}</p>
                      
                      <ul className="space-y-2 text-slate-400 text-xs font-light">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-2 items-start leading-relaxed text-left">
                            <span className="text-indigo-400 font-mono flex-shrink-0 font-bold">//</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* ─── DESKTOP VIEW (hidden md:flex) ─── */}
                <div className="hidden md:flex items-center justify-between w-full relative">
                  
                  {/* Left Column (Col 1) */}
                  <div className="w-[calc(50%-1.5rem)] flex flex-col justify-center items-end text-right">
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full font-sans"
                      >
                        <div className="glass-panel p-6 rounded-lg border-surface-border/60 hover:border-indigo-500/10 transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.2)] text-left">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">{event.date}</span>
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${event.tagColor}`}>
                              {event.tag}
                            </span>
                          </div>
                          <h4 className="text-sm font-outfit font-bold text-white mb-1">{event.title}</h4>
                          <p className="text-[11px] font-mono text-indigo-400 mb-4">{event.organization}</p>
                          
                          <ul className="space-y-2.5 text-slate-400 text-xs font-light">
                            {event.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex gap-2 items-start leading-relaxed">
                                <span className="text-indigo-400 font-mono flex-shrink-0 font-bold">//</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Central Node & Spine Column (Col 2) */}
                  <div className="w-12 flex flex-col items-center justify-center self-stretch relative">
                    {/* Centered vertical spine connection */}
                    <div className="absolute top-0 bottom-0 w-[1px] bg-surface-border/80" />
                    {/* Centered timeline node icon */}
                    <div className="w-8 h-8 rounded-full bg-obsidian-950 border border-surface-border flex items-center justify-center z-10 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-transform duration-300 hover:scale-110">
                      {event.icon}
                    </div>
                  </div>

                  {/* Right Column (Col 3) */}
                  <div className="w-[calc(50%-1.5rem)] flex flex-col justify-center items-start text-left">
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full font-sans"
                      >
                        <div className="glass-panel p-6 rounded-lg border-surface-border/60 hover:border-indigo-500/10 transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">{event.date}</span>
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${event.tagColor}`}>
                              {event.tag}
                            </span>
                          </div>
                          <h4 className="text-sm font-outfit font-bold text-white mb-1">{event.title}</h4>
                          <p className="text-[11px] font-mono text-indigo-400 mb-4">{event.organization}</p>
                          
                          <ul className="space-y-2.5 text-slate-400 text-xs font-light">
                            {event.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex gap-2 items-start leading-relaxed">
                                <span className="text-indigo-400 font-mono flex-shrink-0 font-bold">//</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
