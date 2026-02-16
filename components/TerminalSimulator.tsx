
import React, { useState } from 'react';

interface Command {
  cmd: string;
  output: string;
}

interface TerminalSimulatorProps {
  commands: Command[];
  title?: string;
}

const TerminalSimulator: React.FC<TerminalSimulatorProps> = ({ commands, title = 'Terminal' }) => {
  const [history, setHistory] = useState<{ type: 'cmd' | 'output'; text: string }[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const runNext = () => {
    if (currentStep >= commands.length) return;
    const cmd = commands[currentStep];
    setHistory(prev => [
      ...prev,
      { type: 'cmd', text: cmd.cmd },
      { type: 'output', text: cmd.output }
    ]);
    setCurrentStep(prev => prev + 1);
  };

  const reset = () => {
    setHistory([]);
    setCurrentStep(0);
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-slate-400 font-mono">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm min-h-[180px] max-h-[300px] overflow-y-auto text-slate-300 space-y-1">
        {history.length === 0 && (
          <div className="text-slate-500 text-xs">Click the buttons below to run commands...</div>
        )}
        {history.map((item, i) => (
          <div key={i} className={item.type === 'cmd' ? 'text-yellow-400' : 'text-slate-400 pl-4 whitespace-pre-wrap'}>
            {item.type === 'cmd' ? (
              <><span className="text-green-400">user@pc:~$ </span>{item.text}</>
            ) : (
              item.text
            )}
          </div>
        ))}
        {currentStep < commands.length && (
          <div className="text-green-400 animate-pulse">user@pc:~$ ▌</div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 p-4 bg-slate-800/50 border-t border-slate-700">
        {commands.map((cmd, idx) => (
          <button
            key={idx}
            onClick={runNext}
            disabled={idx !== currentStep}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              idx < currentStep
                ? 'bg-green-900/30 text-green-400 border border-green-800 cursor-not-allowed'
                : idx === currentStep
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 hover:scale-105'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            {idx < currentStep ? `✓ Step ${idx + 1}` : `Step ${idx + 1}: ${cmd.cmd.split(' ').slice(0, 3).join(' ')}...`}
          </button>
        ))}
        {currentStep > 0 && (
          <button onClick={reset} className="px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors underline">
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default TerminalSimulator;
