import React from 'react';

import '../index.less'


const LoadingAnimation = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full z-10 p-4">
      {/* 主圆环 */}
      <div className="w-[clamp(12rem,50vw,20rem)] h-[clamp(12rem,50vw,20rem)] rounded-full border-4 border-primary/50 relative animate-spin-slow mb-8">
        {/* 内部粒子环 */}
        <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-spin-reverse" />
        
        {/* 进度指示器 */}
        <div className="absolute inset-0 rounded-full border-t-4 border-primary animate-spin">
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/50" />
        </div>
        
        {/* 中央核心 */}
        <div className="absolute inset-[clamp(2rem,8vw,3rem)] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="w-[clamp(3rem,12vw,4rem)] h-[clamp(3rem,12vw,4rem)] rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
        </div>
      </div>
      
      {/* 加载文本 */}
      <div className="text-center">
        <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-glow mb-2">
          <span className="text-primary">前端</span>
          <span className="text-secondary">面试</span>
        </h2>
        <p className="text-gray-400 tracking-wider animate-pulse-slow">
          加载中 <span className="inline-block animate-pulse">•</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>•</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>•</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
  