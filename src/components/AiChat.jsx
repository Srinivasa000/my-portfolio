import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Sparkles, X, Terminal, Bot, CornerDownLeft } from 'lucide-react';

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "System initialized. Greetings, recruiter. I am Srinivasa's autonomous digital representation. Ask me about his projects, coding stack, availability, or academic experience at Woxsen University. How can I assist your search today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const chips = [
    { label: '📂 Featured Projects', query: 'Tell me about your top projects.' },
    { label: '💼 Availability Status', query: 'Are you looking for internships or jobs?' },
    { label: '⚙️ Core Tech Stack', query: 'What programming languages and frameworks do you use?' },
    { label: '🎓 Education & GPA', query: 'Where do you study and what is your focus?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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

    // Simulate AI response calculation
    setTimeout(() => {
      let botResponse = '';
      const query = text.toLowerCase();

      if (query.includes('project') || query.includes('reconstruction') || query.includes('screening') || query.includes('ocr')) {
        botResponse = "Srinivasa has delivered 3 major AI/ML engineering pipelines: \n\n" +
          "1. **2D to 3D X-ray Reconstruction:** Leverages MiDaS monocular depth estimation to transform standard 2D clinical scans into navigable 3D meshes (OBJ/point clouds) with Streamlit. Boosted depth detail by 27%.\n\n" +
          "2. **Intelligent Resume screening:** Uses SentenceTransformers (BERT models) & SpaCy NLP to automatically score and rank resumes contextually, slashing corporate HR pre-screening time by 60%.\n\n" +
          "3. **Bank Forms OCR Automation:** OpenCV preprocessing & Tesseract extraction pipeline automating form classification and text ingestion with 92% field accuracy.";
      } else if (query.includes('intern') || query.includes('job') || query.includes('hiring') || query.includes('availability') || query.includes('role')) {
        botResponse = "Srinivasa is actively seeking **AI & ML Engineering internships and full-time junior positions**! He is currently in the B.Tech class of 2026. He previously completed a remote Data Science internship at **Proxenix** (Jun-Jul 2025), where he improved model metrics by 80% and optimized pipelines to cut cleaning duration by 75%. He is highly motivated and ready to add immediate value to your team.";
      } else if (query.includes('tech') || query.includes('stack') || query.includes('language') || query.includes('framework') || query.includes('tool')) {
        botResponse = "Here is Srinivasa's primary developer toolkit:\n\n" +
          "• **Languages:** Python (highly proficient), SQL, C++\n" +
          "• **Frameworks:** PyTorch, TensorFlow, scikit-learn, OpenCV, FastAPI\n" +
          "• **NLP & LLMs:** Hugging Face Transformers, SentenceTransformers, SpaCy, RAG Pipelines\n" +
          "• **Tools & DevOps:** Docker, Git, Streamlit, Jupyter Notebooks, VS Code";
      } else if (query.includes('education') || query.includes('study') || query.includes('gpa') || query.includes('woxsen') || query.includes('university')) {
        botResponse = "Srinivasa is pursuing his **B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning** at **Woxsen University** in Hyderabad, India (Graduating in 2026). His coursework includes Neural Networks, Computer Vision, NLP, Advanced Mathematics, and Agile Software Methodologies.";
      } else if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
        botResponse = "Hello! I am online. Ask me anything about Srinivasa's coding projects, hackathon awards, Woxsen university courses, or internship experience at Proxenix.";
      } else {
        botResponse = "Intelligent analysis complete. While I'm simulated, I can tell you that Srinivasa has rich experience building **Computer Vision meshes, NLP embedding scoring pipelines, and bank document OCR extractors**. \n\nYou can reach out to him directly at **srinivasaraomaddikunta131@gmail.com** or call him at **+91 91002 44580** to schedule a direct interview. He would love to connect!";
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
    }, 1500);
  };

  return (
    <>
      {/* ─── DEDICATED ACT SECTION ─── */}
      <section id="assistant" className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto border-t border-surface-border/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Col: Explainer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-indigo-400"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono">Act VII</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
              Interactive AI <br />
              <span className="font-serif italic font-light text-slate-300">Recruiter Console</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans font-light">
              Skip standard resume screening. Query Srinivasa’s custom holographic chatbot directly to receive real-time answers about his certifications, availability, hackathons, and technical frameworks.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>STATUS: STABLE EMULATION</span>
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 font-outfit font-semibold text-xs md:text-sm tracking-wider rounded transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.05)] w-fit"
              >
                Launch Float Console <Sparkles className="w-4 h-4 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* Right Col: Standard UI Embed */}
          <div className="lg:col-span-7 glass-panel rounded-xl overflow-hidden border-surface-border/80 flex flex-col h-[520px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative">
            {/* Console Header */}
            <div className="bg-obsidian-950 px-6 py-4 border-b border-surface-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-indigo-400 font-bold">
                  <Terminal className="w-4 h-4" /> srinivasa.ai_agent v1.0
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                [Secure Connection]
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-obsidian-950/20">
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
              
              {/* Typing indicator */}
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

            {/* In-chat Chips list */}
            <div className="px-6 py-3 border-t border-surface-border bg-obsidian-950/40 overflow-x-auto flex gap-2.5 scrollbar-thin">
              {chips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.query)}
                  className="whitespace-nowrap px-3 py-1.5 bg-surface hover:bg-obsidian-900 border border-surface-border hover:border-indigo-500/30 text-slate-400 hover:text-indigo-300 font-mono text-[10px] uppercase tracking-wider rounded transition-all duration-300"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="bg-obsidian-950 border-t border-surface-border px-6 py-4 flex gap-3 items-center"
            >
              <input
                type="text"
                placeholder="Ask me something about Srinivasa..."
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

      {/* ─── FLOATING OVERLAY VIEWPORT WIDGET (AnimatePresence) ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian-950/80 backdrop-blur-sm flex items-end md:items-center justify-center p-4 md:p-6"
          >
            {/* Modal Drawer */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="w-full max-w-xl bg-surface border border-surface-border rounded-xl overflow-hidden flex flex-col h-[560px] shadow-[0_15px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Header */}
              <div className="bg-obsidian-950 px-6 py-4.5 border-b border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                  <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-indigo-400 font-bold">
                    <Terminal className="w-4 h-4" /> srinivasa.ai_console
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
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-obsidian-950/10">
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
                <div ref={scrollToBottom} />
              </div>

              {/* Suggestions */}
              <div className="px-6 py-3 border-t border-surface-border bg-obsidian-950/40 overflow-x-auto flex gap-2.5">
                {chips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip.query)}
                    className="whitespace-nowrap px-3 py-1.5 bg-surface hover:bg-obsidian-900 border border-surface-border hover:border-indigo-500/30 text-slate-400 hover:text-indigo-300 font-mono text-[10px] uppercase tracking-wider rounded transition-all duration-300"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="bg-obsidian-950 border-t border-surface-border px-6 py-4.5 flex gap-3 items-center"
              >
                <input
                  type="text"
                  placeholder="Ask me something about Srinivasa..."
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
