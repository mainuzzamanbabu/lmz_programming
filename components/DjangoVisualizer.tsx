
import React, { useState, useEffect } from 'react';

interface DjangoVisualizerProps {
  type: 'virtual-env' | 'getting-started' | 'project-structure' | 'mvt' | 'url-routing' | 'views' | 'dtl' | 'template-inheritance' | 'orm' | 'migrations' | 'forms' | 'crud' | 'relationships' | 'middleware' | 'auth' | 'deployment';
}

const DjangoVisualizer: React.FC<DjangoVisualizerProps> = ({ type }) => {
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStep(p => (p + 1) % 6), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { setStep(0); setActiveTab(0); }, [type]);

  const renderVisual = () => {
    switch (type) {
      case 'virtual-env':
        return (
          <div className="flex items-center justify-center space-x-6 h-48">
            {[
              { name: 'Project A', pkgs: ['Django 4.0', 'Pillow'], color: 'border-blue-400 bg-blue-50' },
              { name: 'Project B', pkgs: ['Django 5.0', 'NumPy'], color: 'border-purple-400 bg-purple-50' },
            ].map((env, i) => (
              <div key={env.name} className={`w-32 border-2 ${env.color} rounded-2xl p-3 transition-all duration-500 ${step % 2 === i ? 'scale-110 shadow-lg -translate-y-2' : 'opacity-60'}`}>
                <div className="text-[10px] font-black text-center mb-2 uppercase tracking-widest">🧰 {env.name}</div>
                {env.pkgs.map(pkg => (
                  <div key={pkg} className="text-[10px] font-mono bg-white/60 px-2 py-1 rounded mb-1 text-center">{pkg}</div>
                ))}
              </div>
            ))}
          </div>
        );

      case 'getting-started': {
        const commands = [
          { cmd: 'python -m venv myenv', icon: '📦', label: 'Create Env' },
          { cmd: 'myenv\\Scripts\\activate', icon: '⚡', label: 'Activate' },
          { cmd: 'pip install django', icon: '🎯', label: 'Install' },
          { cmd: 'django-admin startproject mysite', icon: '🏗️', label: 'Create Project' },
          { cmd: 'python manage.py runserver', icon: '🚀', label: 'Launch!' },
        ];
        return (
          <div className="p-4 space-y-2">
            {commands.map((c, i) => (
              <div key={c.cmd} className={`flex items-center space-x-3 p-2 rounded-xl transition-all duration-500 ${step % 5 === i ? 'bg-orange-50 border border-orange-200 scale-[1.02] shadow-sm' : i < step % 5 ? 'bg-green-50 border border-green-100' : 'bg-white/50'}`}>
                <span className="text-lg">{i < step % 5 ? '✅' : c.icon}</span>
                <div className="flex-1">
                  <span className="font-mono text-xs font-bold text-slate-700">{c.cmd}</span>
                  <div className={`text-[9px] font-bold ${step % 5 === i ? 'text-orange-500' : 'text-slate-400'}`}>{c.label}</div>
                </div>
              </div>
            ))}
          </div>
        );
      }

      case 'project-structure': {
        const files = [
          { name: 'manage.py', icon: '🎮', role: 'Remote Control' },
          { name: 'settings.py', icon: '⚙️', role: 'Control Center' },
          { name: 'urls.py', icon: '🗺️', role: 'Receptionist' },
          { name: 'models.py', icon: '📊', role: 'Data Schema' },
          { name: 'views.py', icon: '🧠', role: 'Business Logic' },
        ];
        return (
          <div className="p-4 space-y-2">
            {files.map((f, i) => (
              <div key={f.name} className={`flex items-center space-x-3 p-2 rounded-xl transition-all duration-500 ${step % 5 === i ? 'bg-orange-50 border border-orange-200 scale-[1.02]' : 'bg-white/50'}`}>
                <span className="text-lg">{f.icon}</span>
                <span className="font-mono text-xs font-bold text-slate-700 w-24">{f.name}</span>
                <span className={`text-[10px] font-bold transition-opacity duration-500 ${step % 5 === i ? 'text-orange-600 opacity-100' : 'text-slate-400 opacity-50'}`}>{f.role}</span>
              </div>
            ))}
          </div>
        );
      }

      case 'mvt': {
        const tabs = [
          { label: 'Model', icon: '�‍🍳', subtitle: 'The Chef', color: 'bg-emerald-500' },
          { label: 'View', icon: '🤵', subtitle: 'The Waiter', color: 'bg-indigo-500' },
          { label: 'URL', icon: '🚪', subtitle: 'The Host', color: 'bg-rose-500' },
          { label: 'Template', icon: '🍽️', subtitle: 'The Plate', color: 'bg-amber-500' },
        ];
        return (
          <div className="p-4 w-full">
            <div className="flex gap-2 mb-4">
              {tabs.map((t, i) => (
                <button key={t.label} onClick={() => setActiveTab(i)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === i ? `${t.color} text-white shadow-lg scale-105` : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                  <div className="text-lg">{t.icon}</div>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 min-h-[120px] flex items-center justify-center">
              {activeTab === 0 && <div className="text-center"><div className="text-sm font-bold text-slate-700 mb-1">models.py</div><div className="text-[10px] text-slate-500">Defines database structure</div><div className="font-mono text-[10px] bg-slate-100 p-2 rounded mt-2">class Student(models.Model): ...</div></div>}
              {activeTab === 1 && <div className="text-center"><div className="text-sm font-bold text-slate-700 mb-1">views.py</div><div className="text-[10px] text-slate-500">Business logic & coordination</div><div className="font-mono text-[10px] bg-slate-100 p-2 rounded mt-2">def student_list(request): ...</div></div>}
              {activeTab === 2 && <div className="text-center w-full"><div className="text-sm font-bold text-slate-700 mb-1">urls.py</div><div className="text-[10px] text-slate-500 mb-2">Routes requests to the right View</div><div className="font-mono text-[10px] bg-slate-100 p-2 rounded text-left space-y-1"><div className="text-rose-600 font-bold"># mysite/urls.py (Project)</div><div>path('students/', <span className="text-indigo-600">include('students.urls')</span>)</div><div className="mt-2 text-rose-600 font-bold"># students/urls.py (App)</div><div>path('', <span className="text-indigo-600">views.student_list</span>)</div></div></div>}
              {activeTab === 3 && <div className="text-center"><div className="text-sm font-bold text-slate-700 mb-1">template.html</div><div className="text-[10px] text-slate-500">HTML + dynamic data</div><div className="font-mono text-[10px] bg-slate-100 p-2 rounded mt-2">{'{{ student.name }}'}</div></div>}
            </div>
          </div>
        );
      }

      case 'url-routing':
        return (
          <div className="flex flex-col items-center justify-center h-48 space-y-4 p-4">
            <div className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-xl">
              <span className="text-green-400 text-xs font-mono">URL:</span>
              <span className="text-sm font-mono">/student/<span className={`transition-colors duration-500 ${step % 2 === 0 ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>42</span>/</span>
            </div>
            <div className="text-2xl animate-bounce">⬇️</div>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl border-2 transition-all duration-500 ${step % 2 === 0 ? 'bg-indigo-50 border-indigo-400' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-xs font-mono">path("student/<span className="text-indigo-600 font-bold">{'<int:id>'}</span>/", views.detail)</span>
            </div>
            <div className="text-[10px] font-bold text-teal-600">✓ Match! id = 42 → views.detail(request, id=42)</div>
          </div>
        );

      case 'views':
        return (
          <div className="flex items-center justify-center h-48 space-x-4 px-4">
            <div className={`flex flex-col items-center transition-all duration-500 ${step % 3 === 0 ? 'scale-110' : 'opacity-40'}`}>
              <div className="text-3xl">📨</div>
              <span className="text-[10px] font-bold mt-1">Request</span>
            </div>
            <div className="text-xl">→</div>
            <div className={`bg-slate-900 rounded-xl p-3 transition-all duration-500 ${step % 3 === 1 ? 'scale-110 shadow-xl shadow-indigo-500/20' : ''}`}>
              <div className="text-[10px] text-indigo-400 font-mono">def view(request):</div>
              <div className="text-[9px] text-slate-400 font-mono">  # process...</div>
              <div className="text-[10px] text-teal-400 font-mono">  return render(...)</div>
            </div>
            <div className="text-xl">→</div>
            <div className={`flex flex-col items-center transition-all duration-500 ${step % 3 === 2 ? 'scale-110' : 'opacity-40'}`}>
              <div className="text-3xl">📄</div>
              <span className="text-[10px] font-bold mt-1">Response</span>
            </div>
          </div>
        );

      case 'dtl':
        return (
          <div className="p-4 space-y-3">
            <div className="bg-white rounded-xl p-3 border border-slate-200">
              <div className="text-[10px] font-bold text-slate-400 mb-1">Template:</div>
              <div className="font-mono text-xs">Hello, <span className="bg-amber-100 px-1 rounded text-amber-700 font-bold">{`{{ user.name }}`}</span>!</div>
            </div>
            <div className="text-center text-lg">⬇️</div>
            <div className={`bg-white rounded-xl p-3 border-2 transition-all duration-500 ${step % 2 === 0 ? 'border-teal-400 bg-teal-50' : 'border-slate-200'}`}>
              <div className="text-[10px] font-bold text-slate-400 mb-1">Output:</div>
              <div className="font-mono text-xs">Hello, <span className="bg-teal-100 px-1 rounded text-teal-700 font-bold">{step % 2 === 0 ? 'Alice' : 'Bob'}</span>!</div>
            </div>
          </div>
        );

      case 'template-inheritance':
        return (
          <div className="flex items-center justify-center space-x-4 h-48 px-4">
            <div className="w-28 h-36 border-4 border-indigo-400 rounded-xl flex flex-col relative bg-white">
              <div className="bg-slate-800 h-6 rounded-t-lg flex items-center justify-center text-[8px] text-white font-bold">NAV</div>
              <div className={`flex-1 border-2 border-dashed border-indigo-300 m-1 rounded flex items-center justify-center transition-all duration-700 ${step % 2 === 0 ? 'bg-blue-50' : 'bg-amber-50'}`}>
                <span className="text-[9px] font-bold text-slate-500">{step % 2 === 0 ? '📄 home.html' : '📄 about.html'}</span>
              </div>
              <div className="bg-slate-300 h-4 rounded-b-lg flex items-center justify-center text-[7px] font-bold text-slate-600">FOOTER</div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 px-2 py-0.5 rounded-full text-[8px] text-white font-bold">base.html</div>
            </div>
          </div>
        );

      case 'orm':
        return (
          <div className="p-4 space-y-3">
            <div className={`bg-white rounded-xl p-3 border transition-all duration-500 ${step % 3 === 0 ? 'border-indigo-400 shadow-md' : 'border-slate-200'}`}>
              <div className="text-[10px] font-bold text-indigo-500 mb-1">🐍 Python</div>
              <div className="font-mono text-xs">Student.objects.filter(score__gt=90)</div>
            </div>
            <div className="flex justify-center text-lg">🔄</div>
            <div className={`bg-slate-900 rounded-xl p-3 transition-all duration-500 ${step % 3 === 1 ? 'shadow-lg shadow-teal-500/20 scale-[1.02]' : ''}`}>
              <div className="text-[10px] font-bold text-teal-400 mb-1">📊 SQL</div>
              <div className="font-mono text-xs text-green-400">SELECT * FROM students WHERE score &gt; 90;</div>
            </div>
          </div>
        );

      case 'migrations':
        const phases = [
          { icon: '📐', label: 'Blueprint', subtitle: 'models.py', active: step % 3 === 0 },
          { icon: '📋', label: 'Instructions', subtitle: 'makemigrations', active: step % 3 === 1 },
          { icon: '🏗️', label: 'Build!', subtitle: 'migrate', active: step % 3 === 2 },
        ];
        return (
          <div className="flex items-center justify-center h-48 space-x-4 px-4">
            {phases.map((p, i) => (
              <React.Fragment key={p.label}>
                <div className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-500 ${p.active ? 'bg-indigo-50 border-2 border-indigo-400 scale-110 shadow-lg' : 'bg-white border border-slate-200 opacity-50'}`}>
                  <div className="text-3xl mb-1">{p.icon}</div>
                  <div className="text-[10px] font-black">{p.label}</div>
                  <div className="text-[8px] font-mono text-slate-400">{p.subtitle}</div>
                </div>
                {i < 2 && <div className={`text-xl transition-all duration-500 ${step % 3 > i ? 'text-indigo-500' : 'text-slate-300'}`}>→</div>}
              </React.Fragment>
            ))}
          </div>
        );

      case 'forms':
        return (
          <div className="flex items-center justify-center h-48 space-x-6 px-4">
            <div className="text-center">
              <div className="text-4xl mb-1">📝</div>
              <div className="text-[10px] font-bold">Form Data</div>
            </div>
            <div className="text-2xl">→</div>
            <div className={`text-center p-4 rounded-2xl border-2 transition-all duration-700 ${step % 2 === 0 ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'}`}>
              <div className="text-4xl mb-1">🛡️</div>
              <div className="text-[10px] font-bold">{step % 2 === 0 ? '✅ Valid!' : '❌ Rejected!'}</div>
              <div className="text-[8px] text-slate-500 mt-1">{step % 2 === 0 ? 'All checks passed' : 'Email invalid'}</div>
            </div>
            <div className="text-2xl">→</div>
            <div className={`text-center transition-opacity duration-500 ${step % 2 === 0 ? 'opacity-100' : 'opacity-30'}`}>
              <div className="text-4xl mb-1">💾</div>
              <div className="text-[10px] font-bold">Saved!</div>
            </div>
          </div>
        );

      case 'crud': {
        const ops = [
          { name: 'Create', icon: '➕', color: 'bg-green-500' },
          { name: 'Read', icon: '👁️', color: 'bg-blue-500' },
          { name: 'Update', icon: '✏️', color: 'bg-amber-500' },
          { name: 'Delete', icon: '🗑️', color: 'bg-red-500' },
        ];
        return (
          <div className="grid grid-cols-4 gap-3 p-4 h-48 items-center">
            {ops.map((op, i) => (
              <div key={op.name} className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-500 ${step % 4 === i ? 'scale-110 shadow-lg' : 'opacity-50'}`}>
                <div className={`w-12 h-12 ${op.color} rounded-xl flex items-center justify-center text-xl text-white shadow-md mb-2`}>
                  {op.icon}
                </div>
                <span className="text-[10px] font-black">{op.name}</span>
              </div>
            ))}
          </div>
        );
      }

      case 'relationships':
        return (
          <div className="flex flex-col items-center justify-center h-48 space-y-3">
            <div className="bg-indigo-100 border-2 border-indigo-400 rounded-xl px-4 py-2 text-center">
              <div className="text-[10px] font-black text-indigo-700">📊 Post</div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-[2px] h-6 bg-indigo-300"></div>
              <span className="text-[8px] font-bold text-slate-400 bg-white px-1">1 : Many</span>
              <div className="w-[2px] h-6 bg-indigo-300"></div>
            </div>
            <div className="flex space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className={`bg-teal-100 border border-teal-400 rounded-lg px-3 py-1 text-[9px] font-bold text-teal-700 transition-all duration-500 ${step % 3 === i - 1 ? 'scale-110 shadow-md -translate-y-1' : ''}`}>
                  💬 Comment {i}
                </div>
              ))}
            </div>
          </div>
        );

      case 'middleware': {
        const layers = ['Security', 'Session', 'CSRF', 'Auth'];
        return (
          <div className="flex flex-col items-center justify-center h-48 space-y-1">
            {layers.map((l, i) => (
              <div key={l} className={`rounded-2xl border-2 flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${
                step % (layers.length + 1) === i ? 'bg-indigo-100 border-indigo-400 text-indigo-700 scale-105 shadow-md' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`} style={{ width: `${180 - i * 20}px`, height: '28px' }}>
                {l} Layer
              </div>
            ))}
            <div className={`w-16 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-[9px] text-white font-bold transition-all duration-500 ${step % (layers.length + 1) === layers.length ? 'scale-110 shadow-xl' : ''}`}>
              View ⚙️
            </div>
          </div>
        );
      }

      case 'auth':
        return (
          <div className="flex items-center justify-center h-48 space-x-6 px-4">
            <div className={`text-center transition-all duration-500 ${step % 3 === 0 ? 'scale-110' : 'opacity-40'}`}>
              <div className="text-4xl">🧑</div>
              <div className="text-[10px] font-bold mt-1">User</div>
            </div>
            <div className={`text-center p-4 rounded-2xl border-2 transition-all duration-700 ${step % 3 === 1 ? 'bg-red-50 border-red-400 shadow-lg' : 'bg-slate-50 border-slate-200'}`}>
              <div className="text-3xl mb-1">{step % 3 === 1 ? '🚧' : '🎭'}</div>
              <div className="text-[10px] font-bold">@login_required</div>
              <div className="text-[8px] text-slate-500">VIP Rope</div>
            </div>
            <div className={`text-center transition-all duration-500 ${step % 3 === 2 ? 'scale-110' : 'opacity-40'}`}>
              <div className="text-4xl">🎉</div>
              <div className="text-[10px] font-bold mt-1">Dashboard</div>
            </div>
          </div>
        );

      case 'deployment': {
        const items = [
          { label: 'DEBUG = False', done: step > 0 },
          { label: 'SECRET_KEY hidden', done: step > 1 },
          { label: 'PostgreSQL DB', done: step > 2 },
          { label: 'Gunicorn + Nginx', done: step > 3 },
        ];
        return (
          <div className="p-4 space-y-2">
            {items.map((item, i) => (
              <div key={item.label} className={`flex items-center space-x-3 p-2 rounded-xl transition-all duration-500 ${item.done ? 'bg-green-50 border border-green-200' : 'bg-white border border-slate-200'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${item.done ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                  {item.done ? '✓' : i + 1}
                </div>
                <span className={`text-xs font-bold ${item.done ? 'text-green-700 line-through' : 'text-slate-600'}`}>{item.label}</span>
              </div>
            ))}
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

export default DjangoVisualizer;
