
import React, { useState, useEffect } from 'react';

interface DrfVisualizerProps {
  type: 'drf-intro' | 'drf-serializers' | 'drf-views' | 'drf-urls' | 'drf-school';
}

const DrfVisualizer: React.FC<DrfVisualizerProps> = ({ type }) => {
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStep(p => (p + 1) % 6), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { setStep(0); setActiveTab(0); }, [type]);

  const renderVisual = () => {
    switch (type) {
      case 'drf-intro':
        return (
          <div className="flex items-center justify-center h-48 space-x-4 px-4">
            <div className={`text-center p-3 rounded-2xl border-2 transition-all duration-700 ${step % 3 === 0 ? 'bg-orange-50 border-orange-400 scale-110 shadow-lg' : 'bg-white border-slate-200 opacity-60'}`}>
              <div className="text-3xl mb-1">🍽️</div>
              <div className="text-[10px] font-black text-slate-700">Django</div>
              <div className="text-[8px] text-slate-400 mt-1">HTML Pages</div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`text-lg transition-all duration-500 ${step % 3 === 1 ? 'scale-125 text-teal-500' : 'text-slate-300'}`}>+ DRF</div>
              <div className="text-2xl">→</div>
            </div>
            <div className={`text-center p-3 rounded-2xl border-2 transition-all duration-700 ${step % 3 === 2 ? 'bg-teal-50 border-teal-400 scale-110 shadow-lg' : 'bg-white border-slate-200 opacity-60'}`}>
              <div className="text-3xl mb-1">📦</div>
              <div className="text-[10px] font-black text-slate-700">DRF API</div>
              <div className="text-[8px] text-slate-400 mt-1">JSON Data</div>
            </div>
            <div className="flex flex-col items-center space-y-1 ml-2">
              {['⚛️ React', '📱 Mobile', '🖥️ Other'].map((client, i) => (
                <div key={client} className={`text-[8px] font-bold px-2 py-1 rounded-lg transition-all duration-500 ${step % 3 === 2 ? 'bg-teal-100 text-teal-700 scale-105' : 'bg-slate-100 text-slate-400'}`}>
                  {client}
                </div>
              ))}
            </div>
          </div>
        );

      case 'drf-serializers':
        return (
          <div className="p-4 space-y-3">
            <div className={`bg-white rounded-xl p-3 border transition-all duration-500 ${step % 4 < 2 ? 'border-indigo-400 shadow-md' : 'border-slate-200'}`}>
              <div className="text-[10px] font-bold text-indigo-500 mb-1">🐍 Python Object</div>
              <div className="font-mono text-[10px] text-slate-700">Student(name="Alice", grade="10th")</div>
            </div>
            <div className="flex justify-center">
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-500 ${step % 4 === 1 || step % 4 === 3 ? 'bg-amber-100 border border-amber-300 scale-110' : 'bg-slate-100'}`}>
                <span className="text-xs">🔄</span>
                <span className="text-[9px] font-bold text-slate-600">Serializer</span>
              </div>
            </div>
            <div className={`bg-slate-900 rounded-xl p-3 transition-all duration-500 ${step % 4 >= 2 ? 'shadow-lg shadow-teal-500/20 scale-[1.02]' : ''}`}>
              <div className="text-[10px] font-bold text-teal-400 mb-1">📦 JSON</div>
              <div className="font-mono text-[10px] text-green-400">{'{"name": "Alice", "grade": "10th"}'}</div>
            </div>
          </div>
        );

      case 'drf-views': {
        const levels = [
          { name: '@api_view', lines: '15 lines', color: 'bg-blue-500' },
          { name: 'APIView', lines: '12 lines', color: 'bg-indigo-500' },
          { name: 'ViewSet', lines: '3 lines', color: 'bg-teal-500' },
        ];
        return (
          <div className="p-4 space-y-3">
            <div className="text-[10px] font-bold text-center text-slate-400 mb-2">Power Level →</div>
            {levels.map((level, i) => (
              <div key={level.name} className={`flex items-center space-x-3 p-2 rounded-xl transition-all duration-500 ${step % 3 === i ? 'bg-white border-2 border-teal-400 scale-[1.03] shadow-md' : 'bg-white/50 border border-slate-200'}`}>
                <div className={`w-8 h-8 ${level.color} rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-700">{level.name}</div>
                  <div className="text-[9px] text-slate-400">{level.lines}</div>
                </div>
                <div className="flex space-x-0.5">
                  {Array(i + 1).fill(0).map((_, j) => (
                    <div key={j} className={`w-2 h-2 rounded-full ${step % 3 === i ? 'bg-teal-400' : 'bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }

      case 'drf-urls': {
        const endpoints = [
          { method: 'GET', path: '/api/students/', desc: 'List' },
          { method: 'POST', path: '/api/students/', desc: 'Create' },
          { method: 'GET', path: '/api/students/1/', desc: 'Detail' },
          { method: 'PUT', path: '/api/students/1/', desc: 'Update' },
          { method: 'DELETE', path: '/api/students/1/', desc: 'Delete' },
        ];
        const methodColors: Record<string, string> = {
          GET: 'bg-green-500',
          POST: 'bg-blue-500',
          PUT: 'bg-amber-500',
          DELETE: 'bg-red-500',
        };
        return (
          <div className="p-4">
            <div className={`text-center mb-3 p-2 rounded-xl transition-all duration-500 ${step % 2 === 0 ? 'bg-teal-50 border border-teal-200' : 'bg-white'}`}>
              <div className="text-[9px] font-bold text-teal-600">router.register('students', StudentViewSet)</div>
            </div>
            <div className="text-center text-lg mb-2">⬇️ Auto-generates</div>
            <div className="space-y-1">
              {endpoints.map((ep, i) => (
                <div key={i} className={`flex items-center space-x-2 p-1.5 rounded-lg transition-all duration-500 ${step % 5 === i ? 'bg-white border border-teal-300 shadow-sm scale-[1.02]' : 'bg-white/50'}`}>
                  <span className={`${methodColors[ep.method]} text-white text-[8px] font-bold px-1.5 py-0.5 rounded`}>{ep.method}</span>
                  <span className="font-mono text-[9px] text-slate-700 flex-1">{ep.path}</span>
                  <span className="text-[8px] text-slate-400">{ep.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'drf-school': {
        const pipeline = [
          { icon: '📊', label: 'Model', file: 'models.py', color: 'border-emerald-400 bg-emerald-50' },
          { icon: '🔄', label: 'Serializer', file: 'serializers.py', color: 'border-amber-400 bg-amber-50' },
          { icon: '🤖', label: 'ViewSet', file: 'views.py', color: 'border-indigo-400 bg-indigo-50' },
          { icon: '🗺️', label: 'Router', file: 'urls.py', color: 'border-teal-400 bg-teal-50' },
        ];
        return (
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              {pipeline.map((p, i) => (
                <React.Fragment key={p.label}>
                  <div className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all duration-500 ${step % 4 === i ? `${p.color} scale-110 shadow-md` : 'bg-white border-slate-200 opacity-50'}`}>
                    <div className="text-xl mb-0.5">{p.icon}</div>
                    <div className="text-[9px] font-black">{p.label}</div>
                    <div className="text-[7px] font-mono text-slate-400">{p.file}</div>
                  </div>
                  {i < 3 && <div className={`text-sm transition-colors duration-500 ${step % 4 > i ? 'text-teal-500' : 'text-slate-300'}`}>→</div>}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-center space-x-2">
              {['Student', 'Teacher', 'Subject', 'Class'].map((model, i) => (
                <div key={model} className={`px-2 py-1 rounded-lg text-[8px] font-bold transition-all duration-500 ${step % 4 === 0 ? 'bg-teal-100 text-teal-700 scale-105' : 'bg-slate-100 text-slate-500'}`}>
                  🏫 {model}
                </div>
              ))}
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-slate-50 rounded-3xl p-4 border-2 border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] flex items-center justify-center min-h-[200px]">
      {renderVisual()}
    </div>
  );
};

export default DrfVisualizer;
