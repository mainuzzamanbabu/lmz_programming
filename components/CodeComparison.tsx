
import React, { useState } from 'react';
import { CodeSnippet, ProgrammingLanguage } from '../types';

interface CodeComparisonProps {
  snippets: CodeSnippet[];
}

const CodeComparison: React.FC<CodeComparisonProps> = ({ snippets }) => {
  const [selectedLang, setSelectedLang] = useState<ProgrammingLanguage>('javascript');

  const activeSnippet = snippets.find((s) => s.language === selectedLang) || snippets[0];

  return (
    <div className="flex flex-col w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
      <div className="flex bg-slate-800 px-4 py-2 space-x-4 border-b border-slate-700">
        <button
          onClick={() => setSelectedLang('javascript')}
          className={`text-sm font-semibold transition-colors px-3 py-1 rounded-md ${
            selectedLang === 'javascript' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => setSelectedLang('python')}
          className={`text-sm font-semibold transition-colors px-3 py-1 rounded-md ${
            selectedLang === 'python' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Python
        </button>
      </div>

      <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-auto">
        <pre className="text-indigo-300">
          <code>{activeSnippet.code}</code>
        </pre>
      </div>

      <div className="p-4 bg-slate-800/50 border-t border-slate-700">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How it works:</h4>
        <p className="text-sm text-slate-300 italic">
          "{activeSnippet.explanation}"
        </p>
      </div>
    </div>
  );
};

export default CodeComparison;
