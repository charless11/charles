import React, { useState, useEffect, useRef } from 'react';
import './index.less';

interface NavItem {
  id: string;
  content: string;
}

const navItems: NavItem[] = [
  { id: 'JS', content: 'JS' },
  { id: 'Algorithm', content: '算法' },
  { id: 'TS', content: 'TS' },
  { id: 'Front', content: '前端' },
  { id: 'Browser', content: '浏览器' },
  { id: 'React', content: 'React' },
];

const AdvancedNavigation = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement }>({});

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;
        
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6, rootMargin: '0px 0px -50% 0px' }
    );

    Object.values(sectionRefs.current).forEach(section => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}

  return (
    <div className="nav-container">
        {
            navItems.map((item)=>{
                return (
                    <div key={item.id} onClick={()=>{scrollToSection(item.id)}} className='btn'>
                        {item.content}
                    </div>
                )
            })
        }
    </div>
  );
};

export default AdvancedNavigation;