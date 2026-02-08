
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Visualizer from './components/Visualizer';
import CodeComparison from './components/CodeComparison';
import { CURRICULUM } from './constants';
import { Concept } from './types';

const App: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<Concept>(CURRICULUM.concepts[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top when concept changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeConcept]);

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-8 relative items-start">
        {/* Mobile Concept Selector */}
        <div className="lg:hidden mb-6 sticky top-[72px] z-40">
           <button 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="w-full bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex items-center justify-between font-bold text-slate-700"
           >
             <div className="flex items-center space-x-3">
               <span>{activeConcept.metaphor.icon}</span>
               <span>{activeConcept.title.split(':')[0]}</span>
             </div>
             <span className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`}>▼</span>
           </button>
           
           {isSidebarOpen && (
             <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
               {CURRICULUM.concepts.map((concept) => (
                 <button
                   key={concept.id}
                   onClick={() => {
                     setActiveConcept(concept);
                     setIsSidebarOpen(false);
                   }}
                   className={`w-full text-left px-6 py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 flex items-center space-x-4 ${
                     activeConcept.id === concept.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
                   }`}
                 >
                   <span className="text-xl">{concept.metaphor.icon}</span>
                   <span className="font-semibold">{concept.title.split(':')[0]}</span>
                 </button>
               ))}
             </div>
           )}
        </div>

        {/* Sidebar Navigation - Desktop */}
        <aside className="hidden lg:block lg:col-span-3 space-y-2 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 pb-8 custom-scrollbar">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest px-4 mb-6 sticky top-0 bg-[#f8fafc] py-2 z-10">
            Learning Path
          </h2>
          <div className="space-y-1">
            {CURRICULUM.concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept)}
                className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-3 group ${
                  activeConcept.id === concept.id
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1'
                    : 'hover:bg-indigo-50 text-slate-600 hover:text-indigo-600'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-colors ${
                   activeConcept.id === concept.id ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-indigo-100'
                }`}>
                  {concept.metaphor.icon}
                </div>
                <span className="font-bold text-sm">{concept.title.split(':')[0]}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-slate-900 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500 opacity-20 rounded-full blur-2xl"></div>
             <h3 className="font-black text-lg mb-3">Masterclass</h3>
             <p className="text-xs opacity-70 leading-relaxed mb-4">
               You are currently learning the fundamental building blocks of modern software.
             </p>
             <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-1000" 
                  style={{ width: `${((CURRICULUM.concepts.indexOf(activeConcept) + 1) / CURRICULUM.concepts.length) * 100}%` }}
                ></div>
             </div>
             <p className="text-[10px] mt-2 font-bold text-indigo-400 uppercase">Progress: {Math.round(((CURRICULUM.concepts.indexOf(activeConcept) + 1) / CURRICULUM.concepts.length) * 100)}%</p>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 xl:col-span-9 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Lesson {CURRICULUM.concepts.indexOf(activeConcept) + 1}
                  </span>
                  <div className="h-[1px] w-8 bg-slate-200"></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Concept</span>
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
            {/* Metaphor Section */}
            <section className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col transition-all hover:shadow-md">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-indigo-100">
                  {activeConcept.metaphor.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{activeConcept.metaphor.title}</h3>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">The Metaphor</span>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-1">
                {activeConcept.metaphor.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Practical Applications</h4>
                <div className="grid grid-cols-1 gap-3">
                  {activeConcept.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-sm font-bold text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-transform hover:translate-x-1 cursor-default">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Code Comparison Section */}
            <section className="flex flex-col h-full">
               <CodeComparison snippets={activeConcept.snippets} />
            </section>
          </div>
          
          {/* Pro Tips / Motivation */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
               </div>
               <h3 className="text-2xl font-black mb-4">Think like a Developer 💡</h3>
               <p className="text-indigo-100 text-lg leading-relaxed font-medium">
                 Programming isn't just about syntax. It's about problem solving. Treat every error as a mystery to solve, and every concept as a new tool in your belt.
               </p>
            </div>
            
            <div className="bg-amber-100 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center border-2 border-amber-200">
               <div className="text-5xl mb-4">🏆</div>
               <h4 className="font-black text-amber-900 text-lg mb-2">Keep Going!</h4>
               <p className="text-amber-800 text-sm font-medium">You've explored {activeConcept.id}! Ready for more?</p>
               <button 
                 onClick={() => {
                   const nextIdx = (CURRICULUM.concepts.indexOf(activeConcept) + 1) % CURRICULUM.concepts.length;
                   setActiveConcept(CURRICULUM.concepts[nextIdx]);
                 }}
                 className="mt-6 px-6 py-2 bg-amber-900 text-white rounded-full font-bold text-sm hover:scale-105 transition-transform"
               >
                 Next Concept →
               </button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default App;
