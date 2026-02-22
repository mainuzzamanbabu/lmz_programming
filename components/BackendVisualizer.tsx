
import React, { useState, useEffect } from 'react';

interface BackendVisualizerProps {
  type: 'client-server' | 'http-methods' | 'status-codes' | 'database' | 'sessions' | 'framework-compare';
}

const BackendVisualizer: React.FC<BackendVisualizerProps> = ({ type }) => {
  const [step, setStep] = useState(0);
  const [dbFilter, setDbFilter] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => setStep(p => (p + 1) % 6), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { setStep(0); setDbFilter('all'); }, [type]);

  const renderVisual = () => {
    switch (type) {
      case 'client-server':
        return (
          <div className="relative flex items-center justify-between px-6 h-52">
            <div className="text-center z-10">
              <div className="text-5xl mb-2">💻</div>
              <h4 className="font-black text-sm text-slate-700">Client</h4>
              <p className="text-[10px] text-slate-500">Browser</p>
            </div>
            <div className="absolute top-1/2 left-[15%] right-[15%] h-1 bg-slate-200 -translate-y-1/2 rounded-full">
              <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-all duration-1000 ease-in-out ${
                step % 3 === 0 ? 'left-0 bg-orange-500' : step % 3 === 1 ? 'left-[45%] bg-amber-500' : 'left-[90%] bg-teal-500'
              }`} />
            </div>
            <div className="text-center z-10">
              <div className="text-5xl mb-2">🖥️</div>
              <h4 className="font-black text-sm text-slate-700">Server</h4>
              <p className="text-[10px] text-slate-500">Django</p>
              <div className={`text-[10px] font-mono mt-1 font-bold ${step % 3 === 1 ? 'text-orange-500 animate-pulse' : step % 3 === 2 ? 'text-teal-500' : 'text-slate-400'}`}>
                {step % 3 === 1 ? 'Processing...' : step % 3 === 2 ? '200 OK ✓' : 'Waiting...'}
              </div>
            </div>
            <div className="text-center z-10">
              <div className="text-5xl mb-2">🗄️</div>
              <h4 className="font-black text-sm text-slate-700">Database</h4>
              <p className="text-[10px] text-slate-500">Storage</p>
            </div>
          </div>
        );

      case 'http-methods':
        const methods = [
          { name: 'GET', color: 'bg-green-100 border-green-400 text-green-700', icon: '👁️', desc: 'Read' },
          { name: 'POST', color: 'bg-blue-100 border-blue-400 text-blue-700', icon: '📝', desc: 'Create' },
          { name: 'PUT', color: 'bg-amber-100 border-amber-400 text-amber-700', icon: '✏️', desc: 'Replace' },
          { name: 'DELETE', color: 'bg-red-100 border-red-400 text-red-700', icon: '🗑️', desc: 'Remove' },
        ];
        return (
          <div className="grid grid-cols-2 gap-3 p-4">
            {methods.map((m, i) => (
              <div key={m.name} className={`flex items-center space-x-3 p-3 rounded-2xl border-2 transition-all duration-500 ${m.color} ${step % 4 === i ? 'scale-105 shadow-lg -translate-y-1' : 'opacity-70'}`}>
                <span className="text-2xl">{m.icon}</span>
                <div>
                  <div className="font-black text-sm">{m.name}</div>
                  <div className="text-[10px] font-bold">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'status-codes':
        const codes = [
          { range: '2xx', label: 'Success', color: 'bg-green-500', icon: '✅', example: '200 OK' },
          { range: '3xx', label: 'Redirect', color: 'bg-blue-500', icon: '↗️', example: '301 Moved' },
          { range: '4xx', label: 'Client Err', color: 'bg-orange-500', icon: '⚠️', example: '404 Not Found' },
          { range: '5xx', label: 'Server Err', color: 'bg-red-500', icon: '🔥', example: '500 Error' },
        ];
        return (
          <div className="flex items-end justify-center space-x-3 h-48 pb-4">
            {codes.map((c, i) => (
              <div key={c.range} className={`flex flex-col items-center transition-all duration-500 ${step % 4 === i ? 'scale-110' : 'opacity-50'}`}>
                <span className="text-2xl mb-2">{c.icon}</span>
                <div className={`w-14 rounded-t-xl ${c.color} transition-all duration-500 flex items-end justify-center pb-2`}
                     style={{ height: step % 4 === i ? '100px' : '60px' }}>
                  <span className="text-white font-black text-xs">{c.range}</span>
                </div>
                <div className="text-[9px] font-bold text-slate-500 mt-1 text-center">{c.label}</div>
                {step % 4 === i && <div className="text-[8px] font-mono text-slate-400 mt-0.5">{c.example}</div>}
              </div>
            ))}
          </div>
        );

      case 'database': {
        const allData = [
          { id: 1, name: 'Alice', course: 'Python', score: 88 },
          { id: 2, name: 'Bob', course: 'Django', score: 92 },
          { id: 3, name: 'Charlie', course: 'HTML', score: 75 },
          { id: 4, name: 'Diana', course: 'Python', score: 95 },
        ];
        const filtered = dbFilter === 'all' ? allData : dbFilter === 'python' ? allData.filter(d => d.course === 'Python') : allData.filter(d => d.score > 90);
        const sqlQuery = dbFilter === 'all' ? 'SELECT * FROM Students;' : dbFilter === 'python' ? "SELECT * FROM Students WHERE course = 'Python';" : 'SELECT * FROM Students WHERE score > 90;';
        return (
          <div className="p-4 space-y-3">
            <div className="flex gap-2 mb-3">
              <button onClick={() => setDbFilter('all')} className={`px-3 py-1 text-xs font-bold rounded-lg transition ${dbFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>All</button>
              <button onClick={() => setDbFilter('python')} className={`px-3 py-1 text-xs font-bold rounded-lg transition ${dbFilter === 'python' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>Python Only</button>
              <button onClick={() => setDbFilter('high')} className={`px-3 py-1 text-xs font-bold rounded-lg transition ${dbFilter === 'high' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}>Score &gt; 90</button>
            </div>
            <table className="w-full text-xs">
              <thead><tr className="bg-slate-50">
                <th className="p-2 text-left font-bold text-slate-500">ID</th>
                <th className="p-2 text-left font-bold text-slate-500">Name</th>
                <th className="p-2 text-left font-bold text-slate-500">Course</th>
                <th className="p-2 text-left font-bold text-slate-500">Score</th>
              </tr></thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-2 font-mono text-slate-400">{r.id}</td>
                    <td className="p-2 font-medium text-slate-700">{r.name}</td>
                    <td className="p-2"><span className="bg-slate-200 px-2 py-0.5 rounded text-[10px]">{r.course}</span></td>
                    <td className={`p-2 font-bold ${r.score > 90 ? 'text-green-600' : 'text-slate-600'}`}>{r.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-slate-900 text-green-400 p-2 rounded-lg font-mono text-[10px]">
              <span className="text-slate-500"># SQL: </span>{sqlQuery}
            </div>
          </div>
        );
      }

      case 'sessions':
        return (
          <div className="flex items-center justify-between px-6 h-48">
            <div className="text-center">
              <div className="text-4xl mb-1">🎫</div>
              <div className="text-[10px] font-bold text-slate-600">Login</div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-700 ${step % 3 === 0 ? 'bg-orange-100 border-2 border-orange-400 scale-110' : 'bg-slate-100'}`}>
                {step % 3 === 0 ? '🔑' : '→'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-1">🍪</div>
              <div className="text-[10px] font-bold text-slate-600">Cookie Set</div>
              <div className={`text-[8px] font-mono mt-1 transition-all duration-500 ${step % 3 === 1 ? 'text-teal-500 font-bold scale-110' : 'text-slate-400'}`}>
                session_id=abc123
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-700 ${step % 3 === 1 ? 'bg-teal-100 border-2 border-teal-400 scale-110' : 'bg-slate-100'}`}>
                {step % 3 === 1 ? '📤' : '→'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-1">✅</div>
              <div className="text-[10px] font-bold text-slate-600">Welcome Back!</div>
              <div className={`text-[8px] font-mono mt-1 transition-all duration-500 ${step % 3 === 2 ? 'text-indigo-500 font-bold' : 'text-slate-400'}`}>
                {step % 3 === 2 ? 'User #42' : '...'}
              </div>
            </div>
          </div>
        );

      case 'framework-compare':
        const scores = { django: [9, 9, 8, 10, 10], raw: [4, 3, 5, 3, 2] };
        const labels = ['Security', 'Speed', 'Scale', 'DB', 'Tools'];
        return (
          <div className="p-4 space-y-3">
            {labels.map((label, i) => (
              <div key={label} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-600">
                  <span>{label}</span>
                  <span className="text-indigo-600">{scores.django[i]}/10</span>
                </div>
                <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full bg-indigo-500 rounded-full transition-all duration-1000`}
                       style={{ width: `${(scores.django[i] / 10) * 100}%` }}>
                  </div>
                  <div className={`absolute top-0 left-0 h-full bg-slate-300 rounded-full transition-all duration-1000 opacity-40`}
                       style={{ width: `${(scores.raw[i] / 10) * 100}%` }}>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-4 text-[10px] mt-2">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-indigo-500 rounded-sm"></div><span className="font-bold text-slate-600">Django</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-300 rounded-sm"></div><span className="font-bold text-slate-500">Raw Python</span></div>
            </div>
          </div>
        );

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

export default BackendVisualizer;
