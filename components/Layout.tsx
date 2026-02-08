
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-indigo-200 shadow-lg">
              C
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CodeVisual Academy
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Curriculum</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Practice</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Resources</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-indigo-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 CodeVisual Academy. Built for beginners with love.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
