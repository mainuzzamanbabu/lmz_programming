
import React, { useState, useEffect } from 'react';

interface VisualizerProps {
  type: 'variable' | 'loop' | 'conditional' | 'array' | 'function' | 'object' | 'error' | 'string' | 'boolean' | 'io' | 'class' | 'inheritance' | 'encapsulation' | 'polymorphism';
}

const Visualizer: React.FC<VisualizerProps> = ({ type }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const renderVisual = () => {
    switch (type) {
      case 'variable':
        return (
          <div className="flex flex-col items-center justify-center h-48 space-y-4">
            <div className="relative">
              <div className="w-32 h-32 border-4 border-dashed border-indigo-300 rounded-lg flex items-center justify-center bg-white shadow-sm">
                <span className="text-5xl transition-all duration-500 transform scale-110">
                  {activeStep % 2 === 0 ? '🍎' : '🍌'}
                </span>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 px-3 py-1 text-[10px] font-bold text-white border border-indigo-500 rounded-full shadow-lg">
                MY_FRUIT
              </div>
            </div>
          </div>
        );
      case 'string':
        return (
          <div className="flex items-center justify-center h-48 space-x-1">
            {['H', 'E', 'L', 'L', 'O'].map((char, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full bg-indigo-100 border-2 border-indigo-400 flex items-center justify-center font-bold text-indigo-700 transition-all duration-500 ${
                  activeStep === i % 4 ? 'scale-125 -translate-y-2 bg-indigo-200' : ''
                }`}
              >
                {char}
              </div>
            ))}
          </div>
        );
      case 'boolean':
        return (
          <div className="flex flex-col items-center justify-center h-48">
            <div className={`w-16 h-24 rounded-2xl border-2 border-slate-300 p-2 flex flex-col items-center transition-colors duration-500 ${activeStep % 2 === 0 ? 'bg-amber-100' : 'bg-slate-200'}`}>
               <div className={`w-10 h-10 rounded-full shadow-md transition-all duration-500 ${activeStep % 2 === 0 ? 'bg-amber-400 -translate-y-0' : 'bg-slate-400 translate-y-8'}`}></div>
            </div>
            <div className="mt-4 font-mono font-bold text-lg">
              {activeStep % 2 === 0 ? 'TRUE / ON' : 'FALSE / OFF'}
            </div>
          </div>
        );
      case 'io':
        return (
          <div className="flex items-center justify-center h-48 space-x-6">
             <div className={`flex flex-col items-center transition-all duration-500 ${activeStep % 2 === 0 ? 'scale-110 -translate-x-2' : 'opacity-40'}`}>
               <div className="text-4xl">📨</div>
               <span className="text-[10px] font-bold mt-2">INPUT</span>
             </div>
             <div className="w-12 h-[2px] bg-slate-200 relative">
               <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full transition-all duration-1000 ${activeStep % 2 === 0 ? 'left-0' : 'left-full'}`}></div>
             </div>
             <div className={`flex flex-col items-center transition-all duration-500 ${activeStep % 2 !== 0 ? 'scale-110 translate-x-2' : 'opacity-40'}`}>
               <div className="text-4xl">🧾</div>
               <span className="text-[10px] font-bold mt-2">OUTPUT</span>
             </div>
          </div>
        );
      case 'class':
        return (
          <div className="flex flex-col items-center justify-center h-48 space-y-4">
             <div className="w-24 h-16 border-2 border-indigo-600 bg-indigo-50 rounded flex items-center justify-center relative">
                <span className="text-[10px] font-bold text-indigo-700">BLUEPRINT</span>
                <div className="absolute -bottom-10 flex space-x-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className={`w-6 h-6 bg-white border border-slate-300 rounded shadow-sm transition-all duration-700 ${activeStep >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}></div>
                   ))}
                </div>
             </div>
          </div>
        );
      case 'inheritance':
        return (
          <div className="flex flex-col items-center justify-center h-48">
             <div className="w-16 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white text-[10px] mb-4">PARENT</div>
             <div className="w-[2px] h-6 bg-slate-300 mb-2"></div>
             <div className="flex space-x-4">
                <div className={`w-12 h-8 bg-indigo-500 rounded-md flex items-center justify-center text-white text-[8px] transition-all duration-500 ${activeStep % 2 === 0 ? 'scale-110 translate-y-1' : ''}`}>CHILD A</div>
                <div className={`w-12 h-8 bg-indigo-500 rounded-md flex items-center justify-center text-white text-[8px] transition-all duration-500 ${activeStep % 2 !== 0 ? 'scale-110 translate-y-1' : ''}`}>CHILD B</div>
             </div>
          </div>
        );
      case 'encapsulation':
        return (
          <div className="flex items-center justify-center h-48">
             <div className="relative w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-4 border-slate-200 overflow-hidden">
                <div className={`absolute inset-0 bg-indigo-500/20 transition-transform duration-1000 ${activeStep % 2 === 0 ? 'scale-100' : 'scale-0'}`}></div>
                <div className="text-3xl z-10">💎</div>
                <div className={`absolute bottom-0 w-full h-8 bg-slate-800 flex items-center justify-center transition-transform duration-500 ${activeStep % 2 === 0 ? 'translate-y-0' : 'translate-y-full'}`}>
                   <span className="text-[8px] text-white font-bold">PRIVATE</span>
                </div>
             </div>
          </div>
        );
      case 'polymorphism':
        return (
          <div className="flex items-center justify-center h-48 space-x-6">
             <div className="text-3xl">🎮</div>
             <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg border-2 border-red-600 active:scale-95 transition-transform">
                   <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold mt-2">PLAY()</span>
             </div>
             <div className="text-3xl transition-all duration-500 transform" style={{ opacity: activeStep % 2 === 0 ? 1 : 0.2 }}>{activeStep % 2 === 0 ? '🎵' : '🎬'}</div>
          </div>
        );
      case 'loop':
        return (
          <div className="flex items-center justify-center h-48 space-x-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 border-2 ${
                  activeStep === i ? 'bg-orange-500 border-orange-600 text-white scale-125 shadow-lg' : 'bg-white border-slate-200 text-slate-400'
                }`}
              >
                {i + 1}
              </div>
            ))}
            <div className="text-3xl animate-spin-slow ml-4">🔁</div>
          </div>
        );
      case 'conditional':
        return (
          <div className="flex flex-col items-center justify-center h-48">
             <div className="mb-6 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-mono flex items-center">
               <span className="text-green-400 mr-2">if</span> (condition)
             </div>
            <div className="flex space-x-12 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-200 -z-10"></div>
              <div className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-500 ${activeStep % 2 === 0 ? 'bg-green-50 border-green-400 scale-110 shadow-md' : 'bg-white border-transparent opacity-40'}`}>
                <div className="text-3xl">✅</div>
                <div className="text-[10px] font-bold text-green-700 mt-2">TRUE PATH</div>
              </div>
              <div className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-500 ${activeStep % 2 !== 0 ? 'bg-red-50 border-red-400 scale-110 shadow-md' : 'bg-white border-transparent opacity-40'}`}>
                <div className="text-3xl">❌</div>
                <div className="text-[10px] font-bold text-red-700 mt-2">ELSE PATH</div>
              </div>
            </div>
          </div>
        );
      case 'array':
        return (
          <div className="flex items-center justify-center h-48 space-x-2 overflow-hidden">
            <div className="text-3xl animate-pulse">🚂</div>
            {['💎', '💰', '🎁', '🎈'].map((item, i) => (
              <div key={i} className={`flex flex-col items-center transition-all duration-500 ${activeStep === i ? 'scale-110 -translate-y-1' : ''}`}>
                <div className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center text-2xl bg-white ${activeStep === i ? 'border-indigo-500 shadow-lg' : 'border-slate-200'}`}>
                  {item}
                </div>
                <span className="text-[10px] font-mono mt-1 font-bold text-slate-400">[{i}]</span>
              </div>
            ))}
          </div>
        );
      case 'object':
        return (
          <div className="w-48 h-48 bg-white border-2 border-indigo-200 rounded-2xl p-4 flex flex-col shadow-sm">
             <div className="flex items-center space-x-2 mb-3 border-b pb-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">ID</div>
                <span className="text-xs font-bold text-slate-700">USER PROFILE</span>
             </div>
             <div className="space-y-2">
                <div className={`h-6 bg-slate-100 rounded px-2 flex items-center justify-between transition-colors ${activeStep === 0 ? 'bg-indigo-50 border border-indigo-200' : ''}`}>
                   <span className="text-[10px] text-slate-500 font-mono">name:</span>
                   <span className="text-[10px] font-bold">"Bob"</span>
                </div>
                <div className={`h-6 bg-slate-100 rounded px-2 flex items-center justify-between transition-colors ${activeStep === 1 ? 'bg-indigo-50 border border-indigo-200' : ''}`}>
                   <span className="text-[10px] text-slate-500 font-mono">age:</span>
                   <span className="text-[10px] font-bold">25</span>
                </div>
                <div className={`h-6 bg-slate-100 rounded px-2 flex items-center justify-between transition-colors ${activeStep === 2 ? 'bg-indigo-50 border border-indigo-200' : ''}`}>
                   <span className="text-[10px] text-slate-500 font-mono">city:</span>
                   <span className="text-[10px] font-bold">"London"</span>
                </div>
             </div>
          </div>
        );
      case 'function':
        return (
          <div className="flex items-center justify-center h-48 space-x-4">
            <div className={`text-4xl transition-all duration-700 ${activeStep === 0 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>🍊</div>
            <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl border-2 border-slate-700">
              <div className="absolute inset-0 bg-indigo-500 opacity-20 animate-pulse"></div>
              <div className="z-10 text-center">
                 <div className="text-[10px] text-indigo-400 font-mono">def</div>
                 <div className="text-[8px] text-white font-mono leading-tight">JUICER(fruit)<br/>return juice</div>
              </div>
            </div>
            <div className={`text-4xl transition-all duration-700 ${activeStep >= 2 ? 'translate-x-0 opacity-100 scale-125' : '-translate-x-20 opacity-0'}`}>🥤</div>
          </div>
        );
      case 'error':
        return (
          <div className="flex flex-col items-center justify-center h-48 relative">
             <div className={`text-5xl transition-all duration-500 ${activeStep % 2 === 0 ? 'translate-y-0' : 'translate-y-12 opacity-0'}`}>💻</div>
             <div className={`absolute bottom-4 flex items-center bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl transition-all duration-500 ${activeStep % 2 !== 0 ? 'scale-110 opacity-100' : 'scale-0 opacity-0'}`}>
                <span className="mr-2">🪂</span> CAUGHT ERROR!
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-slate-50 rounded-3xl p-6 border-2 border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] flex items-center justify-center min-h-[200px]">
      {renderVisual()}
    </div>
  );
};

export default Visualizer;
