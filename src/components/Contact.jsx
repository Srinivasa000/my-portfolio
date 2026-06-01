import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ShieldCheck, Check, Lock, Unlock, X } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', org: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEncryptionModal, setShowEncryptionModal] = useState(false);
  const [rawBodyText, setRawBodyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    const bodyText = 
      `==========================================\n` +
      ` SECURE TRANSMISSION HANDSHAKE RECEIVED  \n` +
      `==========================================\n\n` +
      `• Sender Name: ${formState.name}\n` +
      `• Organization: ${formState.org || 'Not Specified'}\n` +
      `• Email Coordinate: ${formState.email}\n\n` +
      `------------------------------------------\n` +
      ` MESSAGE PAYLOAD:\n` +
      `------------------------------------------\n\n` +
      `${formState.message}\n\n` +
      `==========================================\n` +
      ` End of secure coordinate transmission. \n` +
      `==========================================`;

    setRawBodyText(bodyText);

    // Simulate encryption and handshake before launching approval box
    setTimeout(() => {
      setIsSubmitting(false);
      setShowEncryptionModal(true);
    }, 1000);
  };

  const handleConfirmSend = () => {
    const recipient = 'srinivasaraomaddikunta131@gmail.com';
    const subject = encodeURIComponent(`Secure Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(rawBodyText);

    // Direct browser-based Gmail Compose redirect
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Trigger standard local mail client redirect
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Simultaneously open prefilled webmail compose in a new tab for seamless fallback
    window.open(gmailComposeUrl, '_blank');

    setShowEncryptionModal(false);
    setIsSubmitted(true);

    // Reset form states
    setFormState({ name: '', org: '', email: '', message: '' });

    // Reset success status after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="w-full border-t border-surface-border/30 py-24 md:py-32 bg-obsidian-950/10">
      <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Col: Availability, Info & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-rose-400"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-rose-400 font-mono">Act VIII</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
              Establish <br />
              <span className="font-serif italic font-light text-slate-300">Connection</span>
            </h2>

            {/* Glowing Availability Status Ticker */}
            <div className="p-4 bg-obsidian-900/60 border border-surface-border rounded flex items-center gap-3 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                ACTIVE & AVAILABLE FOR 2026 SUMMER INTERNSHIPS
              </span>
            </div>

            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed font-sans max-w-sm">
              I am currently looking for artificial intelligence and machine learning opportunities. Feel free to initiate a connection for code collaborations, research, or potential roles.
            </p>
          </div>

          {/* Core Info Cards */}
          <div className="space-y-3">
            <a
              href="mailto:srinivasaraomaddikunta131@gmail.com"
              className="flex items-center gap-4 p-4 bg-obsidian-900/40 hover:bg-surface border border-surface-border rounded-lg group transition-all duration-300"
            >
              <div className="p-2 bg-obsidian-950 rounded border border-surface-border group-hover:border-indigo-500/20 text-slate-400 group-hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block">Email Inquiries</span>
                <span className="text-xs md:text-sm font-outfit font-bold text-white tracking-wide group-hover:text-indigo-200 transition-colors">
                  srinivasaraomaddikunta131@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+919100244580"
              className="flex items-center gap-4 p-4 bg-obsidian-900/40 hover:bg-surface border border-surface-border rounded-lg group transition-all duration-300"
            >
              <div className="p-2 bg-obsidian-950 rounded border border-surface-border group-hover:border-indigo-500/20 text-slate-400 group-hover:text-indigo-400 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block">Secure Mobile</span>
                <span className="text-xs md:text-sm font-outfit font-bold text-white tracking-wide group-hover:text-indigo-200 transition-colors">
                  +91 91002 44580
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-obsidian-900/40 border border-surface-border rounded-lg">
              <div className="p-2 bg-obsidian-950 rounded border border-surface-border text-slate-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block">Geographic Location</span>
                <span className="text-xs md:text-sm font-outfit font-bold text-white tracking-wide">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons row */}
          <div className="flex gap-3 pt-4">
            <a
              href="https://linkedin.com/in/srinivasaraomaddikunta/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-obsidian-950 hover:bg-indigo-600/10 border border-surface-border hover:border-indigo-500/30 text-slate-400 hover:text-indigo-300 rounded transition-all duration-300"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Srinivasa000"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-obsidian-950 hover:bg-rose-600/10 border border-surface-border hover:border-rose-500/30 text-slate-400 hover:text-rose-300 rounded transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Col: High-End Contact Form */}
        <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-xl border-surface-border/80 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500">Local Encrypted Terminal Transmission</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Your Identifier / Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruiter / Collaborator"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-obsidian-950 border border-surface-border focus:border-indigo-500/50 rounded px-4 py-3 text-xs md:text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Organization */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Organization / Company</label>
                <input
                  type="text"
                  placeholder="e.g. Google Labs / Woxsen Labs"
                  value={formState.org}
                  onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                  className="w-full bg-obsidian-950 border border-surface-border focus:border-indigo-500/50 rounded px-4 py-3 text-xs md:text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Email Coordinate</label>
              <input
                type="email"
                required
                placeholder="e.g. recruiter@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-obsidian-950 border border-surface-border focus:border-indigo-500/50 rounded px-4 py-3 text-xs md:text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Message Payload</label>
              <textarea
                required
                rows={5}
                placeholder="Write your transmission payload..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-obsidian-950 border border-surface-border focus:border-indigo-500/50 rounded px-4 py-3 text-xs md:text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Action Buttons with AnimatePresence Feedback */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900/30 disabled:border-indigo-950 text-white disabled:text-slate-400 font-outfit font-semibold text-xs md:text-sm tracking-wider rounded border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border border-t-transparent border-white animate-spin"></span>
                    <span>ENCRYPTING & TRANSMITTING...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>TRANSMISSION SUCCESSFUL</span>
                  </>
                ) : (
                  <>
                    <span>SEND SECURE MESSAGE</span>
                    <Send className="w-4 h-4 text-indigo-200" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* In-place submission success visual drawer */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded flex items-start gap-3"
              >
                <div className="p-1 bg-emerald-500/20 rounded text-emerald-400 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">PAYLOAD SECURED</span>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    Connection coordinates received successfully. Srinivasa will respond to your coordinates within 24 standard business hours. Thank you.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ─── LOCAL ENCRYPTED TRANSMISSION MODAL ─── */}
      <AnimatePresence>
        {showEncryptionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-obsidian-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-surface border border-surface-border rounded-xl p-6 shadow-[0_15px_50px_rgba(0,0,0,0.6)] space-y-6 font-sans text-left relative overflow-hidden"
            >
              {/* Glowing header line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-rose-400" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Lock className="w-5 h-5 text-indigo-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-bold">
                    Terminal Handshake Box
                  </span>
                </div>
                <button
                  onClick={() => setShowEncryptionModal(false)}
                  className="p-1 hover:bg-obsidian-950 border border-surface-border hover:text-rose-400 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-outfit font-extrabold text-white">
                  Local Encrypted Message Payload
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans font-light">
                  Your message coordinates have been locally prepared and compiled into a secure handshake payload. Click <strong className="text-indigo-300">"Confirm & Send"</strong> to open your mail client and send it directly to Srinivasa's inbox!
                </p>
              </div>

              {/* Encryption Code Display Panel */}
              <div className="p-4 bg-obsidian-950 rounded border border-surface-border/80 font-mono text-[10px] text-slate-300 max-h-56 overflow-y-auto whitespace-pre leading-relaxed select-all">
                {rawBodyText}
              </div>

              <div className="p-3.5 bg-indigo-600/5 border border-indigo-500/10 rounded flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-[9px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  HANDSHAKE STATUS: PENDING_USER_AUTHORIZATION
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowEncryptionModal(false)}
                  className="flex-1 px-4 py-2.5 bg-obsidian-900 border border-surface-border text-slate-400 hover:text-white rounded font-outfit font-semibold text-xs tracking-wider transition-colors duration-300"
                >
                  ABORT
                </button>
                <button
                  onClick={handleConfirmSend}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded font-outfit font-semibold text-xs tracking-wider border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] transition-all duration-300"
                >
                  <span>CONFIRM & SEND</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
