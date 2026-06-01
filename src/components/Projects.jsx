import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, X, Cpu, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      id: 'xray',
      number: '01',
      title: 'X-ray 2D to 3D Reconstruction Pipeline',
      badge: 'Computer Vision & Depth Estimation',
      shortDesc: 'A depth-driven monocular reconstruction engine converting standard 2D clinical X-ray images into navigable 3D meshes and point clouds with real-time viewport manipulation.',
      challenge: 'Medical 2D X-rays lack depth information, requiring expensive CT scans for 3D spatial assessment. Recovering structural depth from single-plane monocular images is mathematically ill-posed due to overlapping tissues.',
      process: 'Developed an intensive depth recovery model using the MiDaS monocular estimation framework. We engineered custom processing filters to handle biological density values, mapped depth matrices into 3D Cartesian coordinates, and leveraged an interactive Streamlit engine built on Open3D/Three.js.',
      solution: 'Created an end-to-end pipeline that transforms 2D JPEG/PNG medical inputs into structural 3D point clouds and downloadable OBJ meshes. The system permits surgeons to rotate, zoom, and measure anatomies in simulated 3D space.',
      results: [
        '27% reconstruction accuracy improvement over baseline monocular estimators.',
        'Zero-latency mesh export (<1.2s local rendering speeds).',
        '100+ fully-navigable 3D medical models generated and verified.',
      ],
      tech: ['Python', 'MiDaS', 'PyTorch', 'Open3D', 'Streamlit', 'OpenCV'],
      liveLink: 'https://github.com/Srinivasa000',
      githubLink: 'https://github.com/Srinivasa000',
      gradient: 'from-indigo-600/20 via-indigo-900/10 to-obsidian-950',
      textColor: 'text-indigo-400',
      borderColor: 'group-hover:border-indigo-500/30',
    },
    {
      id: 'resume',
      number: '02',
      title: 'Intelligent Resume Screening & Candidate Ranker',
      badge: 'NLP & Semantic Matching',
      shortDesc: 'An enterprise-grade AI decision support system executing semantic text-embedding matches and categorization to pre-screen, score, and rank applicant resumes.',
      challenge: 'Recruiters spend hundreds of hours manually sorting through thousands of mismatched PDF profiles. Keyword search filters fail because they miss synonym relations and overall project contextual meaning.',
      process: 'Designed a text preprocessing and parsing pipeline using SpaCy. Implemented feature extraction using TF-IDF and SentenceTransformers (BERT-based). Built a categorization model that evaluates semantic similarity scores between candidate bios and job descriptions.',
      solution: 'Constructed an automated decision dashboard that scores resumes dynamically. Candidates are ranked based on a consistent multidimensional relevance metric, sorting matches and highlighting key technical highlights.',
      results: [
        'Automated scoring engine handles massive screening volume in seconds.',
        'Established consistent, objective candidate evaluation parameters.',
        'Boosted HR hiring efficiency, shrinking initial filter workloads by 60%.',
      ],
      tech: ['Python', 'SpaCy', 'SentenceTransformers', 'scikit-learn', 'FastAPI', 'Pandas'],
      liveLink: 'https://github.com/Srinivasa000',
      githubLink: 'https://github.com/Srinivasa000',
      gradient: 'from-rose-600/20 via-rose-900/10 to-obsidian-950',
      textColor: 'text-rose-400',
      borderColor: 'group-hover:border-rose-500/30',
    },
    {
      id: 'ocr',
      number: '03',
      title: 'Bank Forms Automation (OCR & Routing)',
      badge: 'Document Intelligence & OCR',
      shortDesc: 'An intelligent document processing framework combining computer vision preprocessing, OCR extraction, and text categorization to automate bank form routing.',
      challenge: 'Scanning and classifying paper-based banking forms (loans, deposits, checks) involves sluggish manual verification, high input error rates, and delayed request processing times.',
      process: 'Built custom OpenCV preprocessing routines (deskewing, binarization, noise thresholding) to improve scanned text quality. Ran multi-threaded Tesseract OCR engines for high-volume ingestion and utilized supervised classification models to categorize forms.',
      solution: 'Developed an automated bank form ingestion system that extracts handwritten/printed text from scanned PDF bank documents, cleans fields, and automatically routes forms to respective departments.',
      results: [
        '92% OCR text field accuracy achieved under poor contrast scans.',
        '95% document routing and classification precision.',
        'Reduced manual administrative workload by 50-60%.',
      ],
      tech: ['Python', 'OpenCV', 'Tesseract OCR', 'scikit-learn', 'PyPDF2', 'Docker'],
      liveLink: 'https://github.com/Srinivasa000',
      githubLink: 'https://github.com/Srinivasa000',
      gradient: 'from-emerald-600/20 via-emerald-900/10 to-obsidian-950',
      textColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/30',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto border-t border-surface-border/30">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2">
          <span className="h-[1px] w-6 bg-rose-400"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-rose-400 font-mono">Act IV</span>
          <span className="h-[1px] w-6 bg-rose-400"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
          Featured Success <br />
          <span className="font-serif italic font-light text-slate-300">Stories & Code</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Explore real-world engineering case studies showcasing problem deconstruction, technical pipelines, and business outcomes.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`group glass-panel rounded-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch relative border-surface-border/60 hover:border-indigo-500/20 transition-all duration-500 ${proj.borderColor}`}
          >
            {/* Soft Ambient Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-60`} />

            {/* Left Col: Details */}
            <div className="relative z-10 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Badge & Number */}
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] md:text-xs font-mono font-medium uppercase tracking-widest ${proj.textColor} bg-obsidian-950/60 px-3 py-1 rounded border border-surface-border`}>
                    {proj.badge}
                  </span>
                  <span className="font-serif italic font-light text-slate-700 group-hover:text-indigo-500/20 text-4xl md:text-5xl transition-colors duration-500">
                    {proj.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-outfit font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">
                  {proj.title}
                </h3>

                {/* Short Desc */}
                <p className="text-slate-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                  {proj.shortDesc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono text-slate-400 bg-surface/50 border border-surface-border/80 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 font-outfit font-semibold text-xs md:text-xs tracking-wider rounded transition-all duration-300"
                >
                  View Case Study <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-obsidian-900/60 hover:bg-surface border border-surface-border text-slate-400 hover:text-white font-outfit font-semibold text-xs tracking-wider rounded transition-all duration-300"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Code Repo
                </a>
              </div>
            </div>

            {/* Right Col: Visual Card Mock */}
            <div className="relative z-10 w-full md:w-80 lg:w-96 min-h-[180px] md:min-h-auto rounded-lg overflow-hidden flex items-center justify-center bg-obsidian-950/80 border border-surface-border/60 group-hover:border-indigo-500/15 transition-all duration-500">
              <div className="absolute inset-0 bg-radial-gradient opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 80%)' }} />
              
              {/* Abstract Engineering Graphics */}
              <div className="text-center p-6 space-y-4">
                <Cpu className={`w-10 h-10 mx-auto ${proj.textColor} animate-pulse-slow`} />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Pipeline Target</div>
                  <div className="text-xs font-outfit font-bold text-white tracking-wide">{proj.title.split(' ')[0]} Engine</div>
                </div>
                {/* Mini Stat display */}
                <div className="bg-obsidian-900/60 border border-surface-border px-3 py-1.5 rounded inline-flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">{proj.results[0].split(' ')[0]} IMPROVEMENT</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Full Screen Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-obsidian-950/95 backdrop-blur-md flex justify-end"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="w-full max-w-2xl bg-surface border-l border-surface-border min-h-screen p-6 md:p-12 overflow-y-auto space-y-8 flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Header Actions */}
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400">Project Case Study</span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-obsidian-900 border border-surface-border hover:border-rose-500/20 hover:text-rose-400 rounded transition-colors duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Case Study Title */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{selectedProject.badge}</div>
                  <h3 className="text-2xl md:text-3xl font-outfit font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="h-[1px] w-full bg-surface-border/50" />

                {/* Challenge & Process & Solution sections */}
                <div className="space-y-6">
                  {/* The Problem / Challenge */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> The Challenge
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* The Process */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" /> Pipeline & Engineering Process
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                      {selectedProject.process}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The Implemented Solution
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Measured Results */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" /> Measured Business Impact
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.results.map((res, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-surface-border/50" />

                {/* Tech Stack list */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Technologies Implemented</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-slate-300 bg-obsidian-950 border border-surface-border px-3 py-1.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-4 pt-8 mt-12 border-t border-surface-border/30">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-outfit font-semibold text-xs md:text-sm tracking-wider rounded transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                >
                  View Deployment <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian-900 border border-surface-border text-slate-400 hover:text-white font-outfit font-semibold text-xs md:text-sm tracking-wider rounded transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4" /> Repository
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
