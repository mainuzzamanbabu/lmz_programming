
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DjangoVisualizer from '../components/DjangoVisualizer';
import CodeBlock from '../components/CodeBlock';
import { DJANGO_CURRICULUM } from '../data/djangoConcepts';
import { DjangoConcept } from '../types';

const DjangoPage: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<DjangoConcept>(DJANGO_CURRICULUM.concepts[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeConcept]);

  const activeIndex = DJANGO_CURRICULUM.concepts.findIndex(c => c.id === activeConcept.id);
  const progress = Math.round(((activeIndex + 1) / DJANGO_CURRICULUM.concepts.length) * 100);

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
            <span className="text-sm font-bold text-orange-600">🎯 Django</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/programming" className="text-sm font-medium text-slate-400 hover:text-indigo-600 transition">← Programming</Link>
            <Link to="/backend" className="text-sm font-medium text-slate-400 hover:text-teal-600 transition">← Backend</Link>
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
        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}>
            <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-slate-900 mb-4">🎯 Django</h3>
              {DJANGO_CURRICULUM.concepts.map((concept, index) => (
                <button
                  key={concept.id}
                  onClick={() => { setActiveConcept(concept); setIsSidebarOpen(false); }}
                  className={`w-full text-left py-3 px-4 rounded-xl mb-1 transition-all text-sm ${
                    activeConcept.id === concept.id
                      ? 'bg-orange-50 text-orange-700 font-bold border border-orange-200'
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
            <Link to="/" className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-indigo-600 mb-4 transition-colors">
              <span>←</span><span>Home</span>
            </Link>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400">Progress</span>
                <span className="text-xs font-bold text-orange-600">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
            {DJANGO_CURRICULUM.concepts.map((concept, index) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept)}
                className={`w-full text-left py-3 px-4 rounded-2xl transition-all duration-300 ${
                  activeConcept.id === concept.id
                    ? 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 font-bold shadow-sm border border-orange-100 scale-[1.02]'
                    : index < activeIndex
                    ? 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    activeConcept.id === concept.id
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
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
          <div className="lg:col-span-9 space-y-8">
            {/* Hero */}
            <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-100 to-red-50 rounded-bl-[5rem] opacity-50"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-12">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold ring-1 ring-orange-200">
                      Lesson {activeIndex + 1} of {DJANGO_CURRICULUM.concepts.length}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-[1.1]">
                    {activeConcept.title}
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    {activeConcept.shortDescription}
                  </p>
                </div>
                <div className="w-full md:w-80">
                  <DjangoVisualizer type={activeConcept.visualType} />
                </div>
              </div>
            </section>

            {/* Metaphor + Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{activeConcept.metaphor.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">🧩 {activeConcept.metaphor.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{activeConcept.metaphor.description}</p>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 italic">
                  <span className="font-bold not-italic text-slate-500">💡 Hint:</span> {activeConcept.interactiveHint}
                </div>
              </section>

              <section className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-black text-slate-900 mb-4">📌 Key Points</h3>
                <ul className="space-y-3">
                  {activeConcept.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-600">
                      <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Deep Dive */}
            <section className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-6">📖 Deep Dive</h3>
              <div className="space-y-4">
                {activeConcept.content.map((paragraph, i) => (
                  <p key={i} className="text-sm text-slate-600 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Code Examples */}
            {activeConcept.codeExamples && activeConcept.codeExamples.length > 0 && (
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 px-1">💻 Code Examples</h3>
                <div className={`grid gap-6 ${activeConcept.codeExamples.length > 2 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {activeConcept.codeExamples.map((ex, i) => (
                    <CodeBlock key={i} code={ex.code} language={ex.language} label={ex.label} explanation={ex.explanation} />
                  ))}
                </div>
              </section>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => activeIndex > 0 && setActiveConcept(DJANGO_CURRICULUM.concepts[activeIndex - 1])}
                disabled={activeIndex === 0}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
                  activeIndex > 0 ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <span>←</span><span>Previous</span>
              </button>
              <button
                onClick={() => activeIndex < DJANGO_CURRICULUM.concepts.length - 1 && setActiveConcept(DJANGO_CURRICULUM.concepts[activeIndex + 1])}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
                  activeIndex < DJANGO_CURRICULUM.concepts.length - 1
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-200'
                    : 'opacity-30 cursor-not-allowed'
                }`}
                disabled={activeIndex >= DJANGO_CURRICULUM.concepts.length - 1}
              >
                <span>Next</span><span>→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-slate-400 border-t border-slate-200">
        © 2026 Learn with MZ — Interactive Programming Curriculum
      </footer>
    </div>
  );
};

export default DjangoPage;
