
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Visualizer from '../components/Visualizer';
import CodeComparison from '../components/CodeComparison';
import { CURRICULUM } from '../constants';
import { Concept } from '../types';

const ProgrammingPage: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<Concept>(CURRICULUM.concepts[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeConcept]);

  const activeIndex = CURRICULUM.concepts.findIndex(c => c.id === activeConcept.id);
  const progress = Math.round(((activeIndex + 1) / CURRICULUM.concepts.length) * 100);
  const messages = [
    "You're just getting started! 🌱",
    "Keep going, you're doing great! 🔥",
    "Halfway there! Amazing progress! 🚀",
    "Almost a pro! Keep pushing! 💪",
    "You're mastering this! 🎯"
  ];
  const motivationalMessage = messages[Math.min(Math.floor(progress / 25), messages.length - 1)];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-indigo-200 shadow-lg">
                M
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Learn with MZ
              </h1>
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-bold text-slate-500">🐍 Programming</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/backend" className="text-sm font-medium text-slate-400 hover:text-teal-600 transition">Backend →</Link>
            <Link to="/django" className="text-sm font-medium text-slate-400 hover:text-orange-600 transition">Django →</Link>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}>
            <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-slate-900 mb-4">🐍 Programming</h3>
              {CURRICULUM.concepts.map((concept, index) => (
                <button
                  key={concept.id}
                  onClick={() => { setActiveConcept(concept); setIsSidebarOpen(false); }}
                  className={`w-full text-left py-3 px-4 rounded-xl mb-1 transition-all text-sm ${
                    activeConcept.id === concept.id
                      ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  <span className="font-mono text-xs text-slate-400 mr-2">{String(index + 1).padStart(2, '0')}</span>
                  {concept.title.split(':')[0]}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-start">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-2 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 pb-8 custom-scrollbar">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400">Progress</span>
                <span className="text-xs font-bold text-indigo-600">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{motivationalMessage}</p>
            </div>
            {CURRICULUM.concepts.map((concept, index) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept)}
                className={`w-full text-left py-3 px-4 rounded-2xl transition-all duration-300 ${
                  activeConcept.id === concept.id
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-bold shadow-sm border border-indigo-100 scale-[1.02]'
                    : index < activeIndex
                    ? 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    activeConcept.id === concept.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                      : index < activeIndex
                      ? 'bg-green-100 text-green-600'
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    {index < activeIndex ? '✓' : String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-tight">{concept.title.split(':')[0]}</span>
                </div>
              </button>
            ))}
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-bl-[5rem] opacity-50"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-12">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold ring-1 ring-indigo-200">
                      Lesson {activeIndex + 1} of {CURRICULUM.concepts.length}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1]">
                    {activeConcept.title}
                  </h2>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    {activeConcept.shortDescription}
                  </p>
                </div>
                <div className="w-full md:w-80">
                  <Visualizer type={activeConcept.visualType} />
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col transition-all hover:shadow-md">
                <div className="text-4xl mb-4">{activeConcept.metaphor.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{activeConcept.metaphor.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{activeConcept.metaphor.description}</p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Real-World Uses</h4>
                  <ul className="space-y-2">
                    {activeConcept.useCases.map((uc, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-slate-600">
                        <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 text-xs flex items-center justify-center font-bold">{i + 1}</span>
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className="flex flex-col h-full">
                <CodeComparison snippets={activeConcept.snippets} />
              </section>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['💡 Pro Tip', '🎯 Key Insight', '🚀 Next Step'].map((tip, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <h4 className="text-sm font-black text-slate-900 mb-2">{tip}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {i === 0 && `Understanding ${activeConcept.title.split(':')[0].toLowerCase()} is key to writing clean, maintainable code.`}
                    {i === 1 && `The metaphor of "${activeConcept.metaphor.title}" helps you remember how this concept works in practice.`}
                    {i === 2 && activeIndex < CURRICULUM.concepts.length - 1 ? `Next: ${CURRICULUM.concepts[activeIndex + 1].title.split(':')[0]}` : 'You\'ve completed all concepts! Try the Backend section next →'}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-slate-400 border-t border-slate-200">
        © 2026 Learn with MZ — Interactive Programming Curriculum
      </footer>
    </div>
  );
};

export default ProgrammingPage;
