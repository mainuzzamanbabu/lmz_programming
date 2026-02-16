
import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  label?: string;
  explanation?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, label, explanation }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700 group">
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          {label && <span className="ml-3 text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase bg-slate-700/50 px-2 py-0.5 rounded">{language}</span>
          <button
            onClick={handleCopy}
            className="text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-slate-700"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
        <code className="text-indigo-300 font-mono">{code}</code>
      </pre>
      {explanation && (
        <div className="px-5 py-4 bg-slate-800/50 border-t border-slate-700">
          <p className="text-sm text-slate-400 italic leading-relaxed">
            <span className="text-indigo-400 font-bold not-italic mr-1">💡</span>
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
