'use client';

import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { value: 10, label: "Years of Experience", suffix: "+" },
  { value: 150, label: "Projects Completed", suffix: "+" },
  { value: 20, label: "Clients", suffix: "+" },
  { value: 20, label: "Professional Team", suffix: "+" }
];

const useCounter = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === undefined) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(end * progress));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
};

interface StatItemProps {
  stat: {
    value: number;
    label: string;
    suffix: string;
  };
  isVisible: boolean;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ stat, isVisible, index }) => {
  const count = useCounter(stat.value, 2000, isVisible);

  return (
    <div 
      className={`flex items-center gap-6 group cursor-pointer transform transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative">
        <div className="w-5 h-5 bg-gradient-to-br from-white to-slate-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-white/20"></div>
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
      </div>
      <div className="flex-1">
        <div className="text-5xl font-bold bg-gradient-to-r from-white via-slate-300 to-slate-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block">
          {count}{stat.suffix}
        </div>
        <div className="text-white/80 font-medium mt-1 text-lg">
          {stat.label}
        </div>
        <div className="h-[2px] bg-gradient-to-r from-white/60 to-transparent w-0 group-hover:w-full transition-all duration-700 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

interface MainCircleCounterProps {
  value: number;
  start: boolean;
}

const MainCircleCounter: React.FC<MainCircleCounterProps> = ({ value, start }) => {
  const count = useCounter(value, 2000, start);
  return <>{count}</>;
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [mounted, setMounted] = useState(false);
  interface Particle {
    top: string;
    left: string;
    delay: string;
    duration: string;
  }

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);
    const newParticles: Particle[] = [...Array(10)].map((_, i) => ({
      top: `${10 + Math.random() * 80}%`,
      left: `${-5 + Math.random() * 110}%`,
      delay: `${i * 0.4}s`,
      duration: `${5 + Math.random() * 3}s`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section ref={ref} className="m-8 rounded-2xl py-24 relative overflow-hidden bg-[#161E54]">
      {/* Background Navy Gradient #161E54 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#161E54] via-[#1a2363] to-[#0d1233] animate-gradient-shift"></div>
      
      {/* Overlay Glow Efek Cahaya Biru Lembut */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 via-transparent to-transparent animate-gradient-x"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-indigo-500/10 via-transparent to-transparent animate-gradient-y"></div>
      </div>

      {/* Orbs Cahaya Putih/Silver */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-[120px] opacity-30 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-slate-300/5 rounded-full blur-[100px] opacity-20 animate-pulse-slower pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Sisi Kiri - Lingkaran Besar Silver */}
          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-white/5 opacity-40 blur-3xl group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white via-slate-200 to-slate-400 flex items-center justify-center shadow-2xl shadow-black/40 transform transition-all duration-1000 ${
                isVisible ? 'scale-100 rotate-0' : 'scale-75 -rotate-12 opacity-0'
              } group-hover:scale-105`}>
                <div className="text-center text-[#161E54] relative z-10">
                  <div className="text-7xl md:text-8xl font-black mb-1 tracking-tighter drop-shadow-sm">
                    {mounted ? <MainCircleCounter value={statsData[0].value} start={isVisible} /> : '0'}
                    {statsData[0].suffix}
                  </div>
                  <div className="text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
                    {statsData[0].label}
                  </div>
                </div>
                
                <div className="absolute inset-4 rounded-full border border-white/30 animate-spin-slow"></div>
                <div className="absolute inset-8 rounded-full border-2 border-white/10 animate-pulse-slow"></div>
              </div>

              {mounted && particles.map((p, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white/60 rounded-full animate-float shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  style={{
                    top: p.top,
                    left: p.left,
                    animationDelay: p.delay,
                    animationDuration: p.duration
                  }}
                ></div>
              ))}

              <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                <div className="absolute -top-4 left-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50 -translate-x-1/2"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {statsData.slice(1).map((stat, index) => (
              <StatItem key={index} stat={stat} isVisible={isVisible} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(20px); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-shift { background-size: 200% 200%; animation: gradient-shift 12s ease infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-shift 15s ease-in-out infinite; }
        .animate-gradient-y { animation: gradient-shift 20s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default StatsSection;