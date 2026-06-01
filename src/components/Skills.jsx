import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Trophy, Users, ShieldAlert } from 'lucide-react';

export default function Skills() {
  const categories = [
    { id: 'dev', label: 'Development', icon: <Code2 className="w-4 h-4" />, color: 'from-indigo-500 to-indigo-700' },
    { id: 'design', label: 'Design', icon: <Palette className="w-4 h-4" />, color: 'from-rose-500 to-rose-700' },
    { id: 'strat', label: 'Strategy', icon: <ShieldAlert className="w-4 h-4" />, color: 'from-teal-500 to-teal-700' },
    { id: 'comm', label: 'Communication', icon: <Trophy className="w-4 h-4" />, color: 'from-amber-500 to-amber-700' },
    { id: 'leader', label: 'Leadership', icon: <Users className="w-4 h-4" />, color: 'from-pink-500 to-pink-700' },
  ];

  const skills = [
    // Development Skills
    { name: 'Python & SQL & C++', category: 'dev', percentage: 95 },
    { name: 'PyTorch & TensorFlow', category: 'dev', percentage: 90 },
    { name: 'scikit-learn & pandas', category: 'dev', percentage: 92 },
    { name: 'Hugging Face Transformers', category: 'dev', percentage: 88 },
    { name: 'OpenCV & Computer Vision', category: 'dev', percentage: 85 },
    { name: 'FastAPI & REST APIs', category: 'dev', percentage: 82 },
    
    // Design Skills
    { name: 'Interactive UI Architecture', category: 'design', percentage: 80 },
    { name: 'Visual Hierarchy & Layouts', category: 'design', percentage: 85 },
    { name: 'Prototyping & Flowcharts', category: 'design', percentage: 78 },
    { name: 'Typography & Design Systems', category: 'design', percentage: 82 },
    
    // Strategy Skills
    { name: 'Model Deployment Pipelines', category: 'strat', percentage: 88 },
    { name: 'Data Pipeline Tuning & Optim', category: 'strat', percentage: 92 },
    { name: 'Feature Engineering Architecture', category: 'strat', percentage: 90 },
    { name: 'Production RAG Deployment', category: 'strat', percentage: 85 },
    
    // Communication Skills
    { name: 'Technical Writing', category: 'comm', percentage: 86 },
    { name: 'Research Paper Analysis', category: 'comm', percentage: 90 },
    { name: 'Client & Stakeholder Demos', category: 'comm', percentage: 84 },
    { name: 'Concept Deconstruction', category: 'comm', percentage: 88 },
    
    // Leadership Skills
    { name: 'Hackathon Project Steering', category: 'leader', percentage: 85 },
    { name: 'Peer Mentoring & Code Review', category: 'leader', percentage: 80 },
    { name: 'Cross-functional Collaboration', category: 'leader', percentage: 88 },
    { name: 'Agile Project Tracking', category: 'leader', percentage: 82 },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto border-t border-surface-border/30">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2">
          <span className="h-[1px] w-6 bg-indigo-400"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono">Act III</span>
          <span className="h-[1px] w-6 bg-indigo-400"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
          Expertise & <br />
          <span className="font-serif italic font-light text-slate-300">Technical Arsenal</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Curated disciplines spanning computational development, product design, engineering strategy, and functional leadership.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <button
          onClick={() => setActiveCategory('all')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded font-outfit font-medium text-xs tracking-wider border transition-all duration-300 ${
            activeCategory === 'all'
              ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
              : 'bg-obsidian-900/60 border-surface-border text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          Show All
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded font-outfit font-medium text-xs tracking-wider border transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                : 'bg-obsidian-900/60 border-surface-border text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSkills.map((skill, idx) => {
          const catInfo = categories.find(c => c.id === skill.category) || { color: 'from-indigo-500 to-rose-500', label: 'Skill' };
          
          return (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={skill.name}
              className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-indigo-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-outfit font-bold text-white tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Interactive Animated Progress Bar */}
                <div className="h-1.5 w-full bg-obsidian-950 rounded-full overflow-hidden border border-surface-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                    className={`h-full bg-gradient-to-r ${catInfo.color}`}
                  />
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  <span>{catInfo.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-400 font-bold">
                    Mastered
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
