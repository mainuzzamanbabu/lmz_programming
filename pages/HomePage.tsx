
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const sections = [
    {
      id: 'programming',
      path: '/programming',
      icon: '🐍',
      title: 'Programming Fundamentals',
      description: 'Master the building blocks — variables, loops, functions, objects, and OOP — with animated visualizers and side-by-side code comparisons.',
      topics: 14,
      gradient: 'from-indigo-600 to-purple-700',
      ring: 'ring-indigo-300',
      bg: 'bg-indigo-50',
      iconBg: 'bg-indigo-600',
      hoverShadow: 'hover:shadow-indigo-300/40',
      badge: 'Python + JS',
    },
    {
      id: 'backend',
      path: '/backend',
      icon: '🌐',
      title: 'Backend & Web Engineering',
      description: 'Understand the invisible architecture — client-server, HTTP, databases, sessions, and why frameworks exist — before writing Django code.',
      topics: 8,
      gradient: 'from-teal-600 to-emerald-700',
      ring: 'ring-teal-300',
      bg: 'bg-teal-50',
      iconBg: 'bg-teal-600',
      hoverShadow: 'hover:shadow-teal-300/40',
      badge: 'Foundations',
    },
    {
      id: 'django',
      path: '/django',
      icon: '🎯',
      title: 'Django Framework',
      description: 'Go from zero to hero — MVT architecture, URL routing, templates, ORM, forms, authentication, and deployment with real-world analogies.',
      topics: 13,
      gradient: 'from-orange-500 to-red-600',
      ring: 'ring-orange-300',
      bg: 'bg-orange-50',
      iconBg: 'bg-orange-500',
      hoverShadow: 'hover:shadow-orange-300/40',
      badge: 'Full Stack',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-indigo-200 shadow-lg">
              M
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learn with MZ
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-500">
            {sections.map(s => (
              <Link key={s.id} to={s.path} className="hover:text-indigo-600 transition-colors">{s.title.split(' ')[0]}</Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -skew-y-2 origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-6 ring-2 ring-indigo-200">
              ✨ Interactive Learning Platform
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.08] tracking-tight">
              From<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Zero </span>to
              <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent"> Hero</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl mx-auto">
              Master programming, backend engineering, and Django through interactive visualizations, real-world analogies, and hands-on code.
            </p>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link
              key={section.id}
              to={section.path}
              className={`group relative bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl ${section.hoverShadow} hover:-translate-y-2`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${section.iconBg} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {section.icon}
              </div>

              {/* Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full ${section.bg} text-xs font-bold mb-4`}>
                {section.badge}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {section.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">
                  {section.topics} Topics
                </span>
                <div className={`w-10 h-10 bg-gradient-to-br ${section.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all`}>
                  →
                </div>
              </div>

              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${section.gradient} opacity-[0.05] rounded-bl-[4rem] rounded-tr-[2.5rem]`}></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4">📚 Recommended Learning Path</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              {sections.map((s, i) => (
                <React.Fragment key={s.id}>
                  <Link to={s.path} className="flex items-center space-x-3 bg-white/5 px-5 py-3 rounded-2xl hover:bg-white/10 transition-colors group">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <div className="text-sm font-bold">{s.title}</div>
                      <div className="text-[11px] text-slate-400">{s.topics} lessons</div>
                    </div>
                  </Link>
                  {i < sections.length - 1 && <div className="hidden md:block text-2xl text-slate-600 font-bold">→</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-400 border-t border-slate-200">
        © 2026 Learn with MZ — Interactive Programming Curriculum
      </footer>
    </div>
  );
};

export default HomePage;
