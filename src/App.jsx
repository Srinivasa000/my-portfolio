import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, Terminal } from 'lucide-react';
import Hero from './components/Hero';
import Story from './components/Story';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Philosophy from './components/Philosophy';
import AiChat from './components/AiChat';
import Contact from './components/Contact';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'about' },
    { href: '#story', label: 'story' },
    { href: '#skills', label: 'expertise' },
    { href: '#projects', label: 'work' },
    { href: '#experience', label: 'milestones' },
    { href: '#assistant', label: 'assistant' },
    { href: '#contact', label: 'contact' },
  ];

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen relative font-sans">

      {/* ─── STICKY NAVIGATION BAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-obsidian-950/85 backdrop-blur-md py-4.5 border-surface-border/80'
            : 'bg-transparent py-6.5 border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#about"
            className="flex items-center gap-2 font-outfit font-extrabold text-lg md:text-xl tracking-tight text-white select-none group"
          >
            <span className="p-1.5 bg-indigo-600/10 rounded border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors duration-300">
              <Terminal className="w-4 h-4 text-indigo-400" />
            </span>
            <span>SR</span>
            <span className="text-rose-400 group-hover:text-indigo-400 transition-colors duration-300">.</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-obsidian-900 border border-surface-border text-slate-300 hover:text-white rounded transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-obsidian-950/98 backdrop-blur-md flex flex-col justify-center p-8 lg:hidden">
          <ul className="space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-outfit font-extrabold text-2xl tracking-wide text-slate-300 hover:text-indigo-400 transition-colors"
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ─── MAIN PORTFOLIO SECTIONS (ACTS) ─── */}
      <main className="relative z-10">
        <Hero />
        <Story />
        <Skills />
        <Projects />
        <Timeline />
        <Philosophy />
        <AiChat />
        <Contact />
      </main>

      {/* ─── MINIMAL ELEGANT FOOTER ─── */}
      <footer className="border-t border-surface-border/50 bg-obsidian-950 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-outfit font-extrabold text-sm text-white tracking-wide">
              Srinivasa Rao Maddikunta
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              AI & ML Engineer · Hyderabad, India
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href="#about"
              className="font-mono text-[10px] uppercase tracking-wider text-slate-500 hover:text-indigo-400 transition-colors"
            >
              Back to Top
            </a>
            <a
              href="mailto:srinivasaraomaddikunta131@gmail.com"
              className="font-mono text-[10px] uppercase tracking-wider text-slate-500 hover:text-indigo-400 transition-colors"
            >
              Email coordinate
            </a>
          </div>

          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center md:text-right">
            Designed & built with absolute care · 2026
          </div>
        </div>
      </footer>

      {/* Floating Scroll Top Trigger */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-105"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
