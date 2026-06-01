import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, Bot, Sparkles, X, ChevronRight } from 'lucide-react';

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Robotic systems online. Greeting coordinates received. I am Srinivasa's automated 3D Resume Bot. I hold his complete academic record, internship achievements, hackathon medals, and software development history. Click a query coordinate or ask a custom question!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      emotion: 'greet',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState('idle'); // idle, thinking, happy, success, speaking
  const messagesEndRef = useRef(null);
  const modalMessagesEndRef = useRef(null);
  const isFirstRender = useRef(true);

  const chips = [
    { label: '💼 Proxenix Internship', query: 'What did you do during your Proxenix Data Science internship?' },
    { label: '📂 3D Medical Projects', query: 'Tell me about the X-ray 2D to 3D Mesh Reconstruction project.' },
    { label: '🧠 NLP & Automation Projects', query: 'What NLP resume ranking and bank OCR automations have you built?' },
    { label: '🎓 Woxsen Education & GPA', query: 'Tell me about your B.Tech CSE details at Woxsen University.' },
    { label: '⚙️ Core Tech Stack', query: 'What programming languages and developer frameworks do you know?' },
    { label: '🏆 Hackathon Achievements', query: 'Have you won any programming competitions or hackathons?' },
    { label: '⚡ Availability Status', query: 'Are you available for jobs or internships starting in 2026?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToBottom();
    if (isOpen) {
      modalMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Handle bot's automatic blinking and idle state changes
  useEffect(() => {
    if (isTyping) {
      setCurrentEmotion('thinking');
    } else if (messages[messages.length - 1]?.sender === 'bot') {
      setCurrentEmotion('speaking');
      const timer = setTimeout(() => setCurrentEmotion('idle'), 4000);
      return () => clearTimeout(timer);
    } else {
      setCurrentEmotion('idle');
    }
  }, [isTyping, messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMsg = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    // Answer evaluation engine preloaded with real resume data
    setTimeout(() => {
      let botResponse = '';
      const query = text.toLowerCase();

      if (query.includes('proxenix') || query.includes('intern') || query.includes('experience') || query.includes('work')) {
        botResponse = "Srinivasa completed a remote **Data Science Internship at Proxenix** (Jun 2025 – Jul 2025). During this tenure, he achieved outstanding results:\n\n" +
          "• **Pipeline Optimization:** Redesigned preprocessing and data-cleaning streams, slashing data-cleaning time by **75%**.\n" +
          "• **Model Fine-Tuning:** Developed and tuned machine learning parameters, boosting model performance metrics by **80%**.\n" +
          "• **Annotation Workflows:** Improved annotation procedures, expanding overall label throughput by **50%**.";
      } else if (query.includes('3d') || query.includes('x-ray') || query.includes('mesh') || query.includes('reconstruction') || query.includes('midas')) {
        botResponse = "Srinivasa engineered a highly specialized **2D to 3D X-ray Reconstruction Pipeline**:\n\n" +
          "• **The Engine:** Implemented monocular depth estimation using the **MiDaS** deep neural framework.\n" +
          "• **3D viewport:** Formulates depth matrices from flat 2D medical images, converting them into navigable 3D meshes (OBJ point clouds).\n" +
          "• **The Visualizer:** Developed an interactive **Streamlit** viewport allowing real-time mesh rotation, zoom, and biological density analysis.\n" +
          "• **The Impact:** Gained a **27% reconstruction accuracy boost** over standard baselines with a rendering latency of **<1.2s**.";
      } else if (query.includes('nlp') || query.includes('resume') || query.includes('ocr') || query.includes('bank') || query.includes('spacy') || query.includes('tesseract')) {
        botResponse = "Srinivasa has engineered two key NLP and document intelligence pipelines:\n\n" +
          "1. **Intelligent Resume Screening & Candidate Ranker:** Leveraged SentenceTransformers (BERT models) and SpaCy text parsing to score candidate context relevance against job parameters, accelerating HR pre-screening velocity by **60%**.\n\n" +
          "2. **Bank Forms OCR & Document Automation:** Deployed multi-threaded OpenCV filter processing and Tesseract engines to clean scanned paper forms (checks, deposits, applications). Achieved a **92% OCR field accuracy** and **95% classification routing precision**, reducing administrative workloads by **50-60%**.";
      } else if (query.includes('education') || query.includes('woxsen') || query.includes('university') || query.includes('study') || query.includes('gpa')) {
        botResponse = "Srinivasa is pursuing a **Bachelor of Technology (B.Tech) in Computer Science Engineering** specializing in **Artificial Intelligence and Machine Learning** at **Woxsen University** in Hyderabad, India (Class of 2022 – 2026).\n\nHis core curriculum and research center on Deep Neural Networks, Natural Language Processing, Computer Vision, Statistics, and Agile Software methodologies.";
      } else if (query.includes('tech') || query.includes('stack') || query.includes('language') || query.includes('framework') || query.includes('tool') || query.includes('skill')) {
        botResponse = "Here is Srinivasa's verified technical developer arsenal:\n\n" +
          "• **Languages:** Python (Highly proficient), SQL, C++\n" +
          "• **Frameworks:** PyTorch, TensorFlow, scikit-learn, OpenCV, FastAPI\n" +
          "• **Data Science:** SpaCy, SentenceTransformers, NLP pipelines, RAG frameworks\n" +
          "• **Tools & Platforms:** Git, Docker, Streamlit, Hugging Face, Jupyter, VS Code";
      } else if (query.includes('hackathon') || query.includes('clash') || query.includes('vortex') || query.includes('competition') || query.includes('award') || query.includes('achievement')) {
        botResponse = "Srinivasa actively competes in high-stakes programming tournaments:\n\n" +
          "• 🏆 **CodeClash (VIT Vellore):** Placed as a **Top 10 Finalist** competing against over 500+ programmers.\n" +
          "• 🎯 **TechVortex (Symbiosis Pune):** Finalist, building computational prototypes.\n" +
          "• ✦ **Quant Quest (IIIT Nagpur) & Socialis Impulsum (IIT Madras):** Active participant in quantitative modeling and social impact design.";
      } else if (query.includes('availability') || query.includes('internship') || query.includes('job') || query.includes('hiring') || query.includes('hire') || query.includes('role')) {
        botResponse = "Srinivasa is **actively looking for AI/ML Engineering internships and full-time roles starting in 2026**! He is ready to relocate or work in high-pace development environments. He brings verified hands-on skills in computer vision rendering, BERT embeddings, FastAPI backend servers, and Docker packaging.\n\nCoordinates to hire him directly:\n• Email: **srinivasaraomaddikunta131@gmail.com**\n• Phone: **+91 91002 44580**";
      } else if (query.includes('cert') || query.includes('tata') || query.includes('stanford') || query.includes('michigan')) {
        botResponse = "Srinivasa holds 4 major professional credentials:\n\n" +
          "1. **Tata Data Analytics Virtual Experience** (Forage) - 2024\n" +
          "2. **Machine Learning** (Stanford University Online) - 2024\n" +
          "3. **Applied Data Science with Python** (University of Michigan) - 2023\n" +
          "4. **Python for Everybody** (University of Michigan) - 2023";
      } else if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
        botResponse = "System active. Hello, guest! I am Srinivasa's automated robot representative. Ask me about his Proxenix internship work, Woxsen university studies, or his custom 3D Medical CV/NLP projects!";
      } else {
        botResponse = "Query analyzed. I do not have a pre-loaded coordinate for that specific question, but I can tell you that Srinivasa has verified, end-to-end expertise deploying **PyTorch models, BERT text embeddings, Streamlit viewports, OpenCV filters, and Docker APIs**.\n\nYou can reach out to him directly at **srinivasaraomaddikunta131@gmail.com** or call **+91 91002 44580** to ask him in person. He is ready to answer!";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* ─── DEDICATED ACT SECTION ─── */}
      <section id="resume-bot" className="w-full border-t border-surface-border/30 py-24 md:py-32 bg-obsidian-950/10">
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Col: Interactive Robot Avatar Screen */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="text-left w-full space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-indigo-400"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono">Act VII</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
                Robo-Srinivasa <br />
                <span className="font-serif italic font-light text-slate-300">Resume Bot</span>
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-sans font-light">
                Interact directly with my 3D animated robotic console. It is preloaded with my complete verified CV database to give you instant, precise answers about my qualifications.
              </p>
            </div>

            {/* Glowing SVG Animated Robot Avatar Panel */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl glass-panel border border-surface-border/80 flex items-center justify-center overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.3)] group select-none">
              
              {/* Futuristic holographic soundwaves */}
              <div className="absolute inset-0 bg-radial-gradient opacity-10" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
              
              {/* Dynamic status line scanner */}
              {isTyping && (
                <motion.div
                  className="absolute left-0 w-full h-[1px] bg-indigo-400/50 shadow-[0_0_8px_#6366f1] z-20"
                  animate={{ top: ['10%', '90%', '10%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}

              {/* Animated SVG Robot Face */}
              <motion.svg
                className="w-40 h-40 md:w-48 md:h-48 z-10"
                viewBox="0 0 100 100"
              >
                {/* Glowing Digital Antenna */}
                <line x1="50" y1="20" x2="50" y2="10" stroke="#1b1b2e" strokeWidth="2.5" />
                <motion.circle
                  cx="50"
                  cy="10"
                  r="3.5"
                  fill="#6366f1"
                  animate={{
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.25, 1],
                    fill: currentEmotion === 'thinking' ? '#f43f5e' : currentEmotion === 'speaking' ? '#10b981' : '#6366f1',
                  }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Metallic Head Outer Frame */}
                <rect x="20" y="20" width="60" height="60" rx="12" fill="#0b0b14" stroke="#1b1b2e" strokeWidth="2.5" />
                
                {/* Glowing Digital Screen Face */}
                <rect x="25" y="25" width="50" height="40" rx="6" fill="#030306" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" />

                {/* Animated Glowing Robot Eyes */}
                {/* Left Eye */}
                <motion.circle
                  cx="40"
                  cy="40"
                  r={currentEmotion === 'thinking' ? 2 : currentEmotion === 'speaking' ? 3.5 : 4}
                  fill={currentEmotion === 'thinking' ? '#f43f5e' : '#6366f1'}
                  animate={
                    currentEmotion === 'thinking'
                      ? { scaleY: [1, 0.1, 1], scale: [1, 1.2, 1] }
                      : { scaleY: [1, 1, 0.05, 1, 1] }
                  }
                  transition={{
                    duration: currentEmotion === 'thinking' ? 0.8 : 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: currentEmotion === 'thinking' ? 0 : 2
                  }}
                  style={{ transformOrigin: '40px 40px' }}
                />
                
                {/* Right Eye */}
                <motion.circle
                  cx="60"
                  cy="40"
                  r={currentEmotion === 'thinking' ? 2 : currentEmotion === 'speaking' ? 3.5 : 4}
                  fill={currentEmotion === 'thinking' ? '#f43f5e' : '#6366f1'}
                  animate={
                    currentEmotion === 'thinking'
                      ? { scaleY: [1, 0.1, 1], scale: [1, 1.2, 1] }
                      : { scaleY: [1, 1, 0.05, 1, 1] }
                  }
                  transition={{
                    duration: currentEmotion === 'thinking' ? 0.8 : 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: currentEmotion === 'thinking' ? 0 : 2,
                    delay: 0.1
                  }}
                  style={{ transformOrigin: '60px 40px' }}
                />

                {/* Animated Equalizer Wave Mouth */}
                {currentEmotion === 'speaking' ? (
                  // Bouncing waveform bars when speaking
                  <g transform="translate(35, 52)">
                    {[0, 1, 2, 3, 4, 3, 2, 1, 0].map((val, idx) => (
                      <motion.line
                        key={idx}
                        x1={idx * 3.5}
                        y1={5}
                        x2={idx * 3.5}
                        y2={11}
                        stroke="#10b981"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        animate={{ y2: [11, 11 - val * 1.5, 11] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: idx * 0.05 }}
                      />
                    ))}
                  </g>
                ) : currentEmotion === 'thinking' ? (
                  // Loading dots when thinking
                  <g transform="translate(42, 55)">
                    <circle cx="2" cy="3" r="1.2" fill="#f43f5e" className="animate-ping" style={{ animationDelay: '0ms' }} />
                    <circle cx="8" cy="3" r="1.2" fill="#f43f5e" className="animate-ping" style={{ animationDelay: '200ms' }} />
                    <circle cx="14" cy="3" r="1.2" fill="#f43f5e" className="animate-ping" style={{ animationDelay: '400ms' }} />
                  </g>
                ) : (
                  // Calm breathing mouth bar when idle
                  <motion.line
                    x1="38"
                    y1="56"
                    x2="62"
                    y2="56"
                    stroke="#6366f1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    animate={{ scaleX: [1, 0.9, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: '50px 56px' }}
                  />
                )}

                {/* Neck */}
                <rect x="45" y="80" width="10" height="8" fill="#1b1b2e" />
                {/* Collar/Base */}
                <path d="M35,88 L65,88 L70,95 L30,95 Z" fill="#0b0b14" stroke="#1b1b2e" strokeWidth="1.5" />
              </motion.svg>

              {/* Holographic Console Status Badge Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                <span className={`w-2 h-2 rounded-full ${isTyping ? 'bg-rose-400 animate-pulse' : currentEmotion === 'speaking' ? 'bg-emerald-400 animate-bounce' : 'bg-indigo-500 animate-pulse'}`} />
                <span>
                  {isTyping ? 'SYSTEM_COMPUTING...' : currentEmotion === 'speaking' ? 'TRANSMITTING_AUDIO...' : 'SYS_STANDBY'}
                </span>
              </div>
              
              <button
                onClick={() => setIsOpen(true)}
                className="absolute bottom-4 right-4 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded font-mono text-[9px] uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-all duration-300"
              >
                Expand Bot
              </button>
            </div>
          </div>

          {/* Right Col: Console Interface Embed */}
          <div className="lg:col-span-7 glass-panel rounded-xl overflow-hidden border-surface-border/80 flex flex-col h-[520px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative font-sans">
            
            {/* Header bar */}
            <div className="bg-obsidian-950 px-6 py-4 border-b border-surface-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-indigo-400 font-bold">
                  <Terminal className="w-4 h-4" /> srinivasa.robo_v2.0
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                [Resume Intelligence Interface]
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-obsidian-950/20 scrollbar-thin">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded px-4 py-3 text-xs md:text-sm border leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600/15 border-indigo-500/20 text-slate-100 font-sans font-light'
                        : 'bg-surface border-surface-border text-slate-300 font-sans font-light whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                    <div className="text-[9px] font-mono text-slate-500 text-right mt-1.5">{msg.time}</div>
                  </div>
                </div>
              ))}
              
              {/* Loading thinking animation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface border border-surface-border rounded px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Resume Query Chips list */}
            <div className="px-6 py-3 border-t border-surface-border bg-obsidian-950/40 overflow-x-auto flex gap-2.5 scrollbar-none select-none">
              {chips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.query)}
                  className="whitespace-nowrap px-3.5 py-2 bg-surface hover:bg-obsidian-900 border border-surface-border hover:border-indigo-500/30 text-slate-400 hover:text-indigo-300 font-mono text-[9px] uppercase tracking-wider rounded transition-all duration-300 flex items-center gap-1"
                >
                  <span>{chip.label}</span>
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400" />
                </button>
              ))}
            </div>

            {/* Text Input Footer Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="bg-obsidian-950 border-t border-surface-border px-6 py-4 flex gap-3 items-center"
            >
              <input
                type="text"
                placeholder="Ask me a question about Srinivasa's resume..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-surface border border-surface-border rounded px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 font-sans focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-colors duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FULL SCREEN POPUP DRAWER (AnimatePresence) ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian-950/80 backdrop-blur-sm flex items-end md:items-center justify-center p-4 md:p-6"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="w-full max-w-xl bg-surface border border-surface-border rounded-xl overflow-hidden flex flex-col h-[560px] shadow-[0_15px_50px_rgba(0,0,0,0.5)] font-sans"
            >
              {/* Header */}
              <div className="bg-obsidian-950 px-6 py-4.5 border-b border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                  <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-indigo-400 font-bold">
                    <Terminal className="w-4 h-4" /> srinivasa.robo_expanded
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-obsidian-900 border border-surface-border hover:text-rose-400 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-obsidian-950/10 scrollbar-thin">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded px-4 py-3 text-xs md:text-sm border leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600/15 border-indigo-500/20 text-slate-100 font-sans font-light'
                          : 'bg-surface border-surface-border text-slate-300 font-sans font-light whitespace-pre-line'
                      }`}
                    >
                      {msg.text}
                      <div className="text-[9px] font-mono text-slate-500 text-right mt-1.5">{msg.time}</div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-surface border border-surface-border rounded px-4 py-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}
                <div ref={modalMessagesEndRef} />
              </div>

              {/* SUGGESTION CHIPS */}
              <div className="px-6 py-3 border-t border-surface-border bg-obsidian-950/40 overflow-x-auto flex gap-2.5 scrollbar-none select-none">
                {chips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip.query)}
                    className="whitespace-nowrap px-3.5 py-2 bg-surface hover:bg-obsidian-900 border border-surface-border hover:border-indigo-500/30 text-slate-400 hover:text-indigo-300 font-mono text-[9px] uppercase tracking-wider rounded transition-all duration-300"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* INPUT BAR */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="bg-obsidian-950 border-t border-surface-border px-6 py-4.5 flex gap-3 items-center"
              >
                <input
                  type="text"
                  placeholder="Ask me a question about Srinivasa's resume..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 bg-surface border border-surface-border rounded px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 font-sans focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-colors duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
