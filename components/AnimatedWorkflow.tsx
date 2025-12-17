import React from 'react';
import { motion } from 'motion/react';
import { Bot, Database, Zap, CheckCircle } from 'lucide-react';

const AnimatedWorkflow: React.FC = () => {
  return (
    <div className="w-full h-[240px] max-w-[1100px] mx-auto flex items-center justify-center relative p-5 rounded-xl">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.06]"></div>
      </div>

      <div className="flex items-center justify-between w-full relative z-10">
        
        {/* Step 1: Data Input */}
        <div className="flex flex-col items-center justify-center w-32 h-24 gap-2 bg-white/90 backdrop-blur-[6px] border border-[#E7ECF7] rounded-[14px] shadow-sm hover:shadow-md transition-all duration-300 z-10">
          <Database className="w-5 h-5 text-slate-600" />
          <span className="text-xs font-semibold text-slate-700 tracking-wide">Data Input</span>
        </div>

        {/* Connection 1 */}
        <div className="h-[2px] flex-1 bg-slate-100 relative overflow-hidden mx-2 rounded-full">
            <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-[#22D3EE] shadow-[0_0_8px_#7DE3F7]"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0 }}
            />
        </div>

        {/* Step 2: AI Agent 1 */}
        <div className="flex flex-col items-center justify-center w-32 h-24 gap-2 bg-white/90 backdrop-blur-[6px] border border-[#E7ECF7] rounded-[14px] shadow-sm hover:shadow-md transition-all duration-300 z-10">
            <Bot className="w-5 h-5 text-slate-600" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">AI Agent 1</span>
        </div>

        {/* Connection 2 */}
        <div className="h-[2px] flex-1 bg-slate-100 relative overflow-hidden mx-2 rounded-full">
            <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-[#22D3EE] shadow-[0_0_8px_#7DE3F7]"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
        </div>

        {/* Step 3: AI Agent 2 */}
        <div className="flex flex-col items-center justify-center w-32 h-24 gap-2 bg-white/90 backdrop-blur-[6px] border border-[#E7ECF7] rounded-[14px] shadow-sm hover:shadow-md transition-all duration-300 z-10">
            <Bot className="w-5 h-5 text-slate-600" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">AI Agent 2</span>
        </div>

        {/* Connection 3 */}
        <div className="h-[2px] flex-1 bg-slate-100 relative overflow-hidden mx-2 rounded-full">
            <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-[#22D3EE] shadow-[0_0_8px_#7DE3F7]"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.0 }}
            />
        </div>

        {/* Step 4: Automation */}
        <div className="flex flex-col items-center justify-center w-32 h-24 gap-2 bg-white/90 backdrop-blur-[6px] border border-[#E7ECF7] rounded-[14px] shadow-sm hover:shadow-md transition-all duration-300 z-10">
          <Zap className="w-5 h-5 text-slate-600" />
          <span className="text-xs font-semibold text-slate-700 tracking-wide">Automation</span>
        </div>

        {/* Connection 4 */}
        <div className="h-[2px] flex-1 bg-slate-100 relative overflow-hidden mx-2 rounded-full">
            <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-[#22D3EE] shadow-[0_0_8px_#7DE3F7]"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
            />
        </div>

        {/* Step 5: Output */}
        <div className="flex flex-col items-center justify-center w-32 h-24 gap-2 bg-white/90 backdrop-blur-[6px] border border-[#E7ECF7] rounded-[14px] shadow-sm hover:shadow-md transition-all duration-300 z-10">
          <CheckCircle className="w-5 h-5 text-slate-600" />
          <span className="text-xs font-semibold text-slate-700 tracking-wide">Output</span>
        </div>

      </div>
    </div>
  );
};

export default AnimatedWorkflow;
