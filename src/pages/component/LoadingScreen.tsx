import React, { useState, useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import LoadingAnimation from './LoadingAnimation';

import './component.less'

const LoadingScreen = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const contentRef: any = useRef(null);

  useEffect(() => {
    // 模拟加载过程（实际项目中可替换为真实加载逻辑）
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setLoading(false);
            if (contentRef.current) contentRef.current.classList.add('opacity-100');
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
          <LoadingAnimation />
          
          {/* 进度条 */}
          <div className="absolute bottom-16 w-4/5 max-w-md">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-center mt-2 text-sm text-gray-400">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-16 pb-12">
          <div ref={contentRef} className="opacity-0 transition-opacity duration-1000">
            {children}  {/* 加载完成后显示的自定义内容 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
  