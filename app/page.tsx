'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Settings, Phone, Clock, Users, Shield, Award, CheckCircle, Lightbulb, Cloud, ArrowRight, Star, TrendingUp } from 'lucide-react';

// ========================
// DATA
// ========================
const servicesData = [
  {
    icon: Settings,
    title: "Instalasi Listrik Gedung & Industri",
    description: "Layanan instalasi sistem kelistrikan lengkap untuk gedung komersial, pabrik, dan fasilitas industri dengan standar keamanan tertinggi dan efisiensi optimal.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Panel Listrik & Distribusi Daya",
    description: "Pemasangan dan konfigurasi panel distribusi, LVMDP, dan sistem proteksi untuk memastikan distribusi daya yang aman, stabil, dan efisien.",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: Cloud,
    title: "Maintenance & Troubleshooting",
    description: "Perawatan berkala dan perbaikan sistem kelistrikan untuk mencegah downtime dan memastikan operasional berjalan lancar tanpa gangguan.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Instalasi Penerangan",
    description: "Sistem pencahayaan modern dan efisien untuk berbagai kebutuhan, dari penerangan umum hingga pencahayaan khusus industri.",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: Shield,
    title: "Sistem Grounding & Penangkal Petir",
    description: "Instalasi sistem pembumian dan proteksi petir untuk melindungi bangunan dan peralatan dari bahaya listrik dan sambaran petir.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Konsultasi & Audit Kelistrikan",
    description: "Layanan konsultasi profesional dan audit sistem kelistrikan untuk optimalisasi performa, efisiensi energi, dan kepatuhan standar.",
    gradient: "from-blue-600 to-blue-700"
  }
];

const featuresData = [
  {
    number: "01",
    title: "Tenaga Ahli & Bersertifikat",
    description: "Tim teknisi kami memiliki sertifikasi resmi dan pengalaman bertahun-tahun dalam instalasi kelistrikan untuk berbagai jenis proyek."
  },
  {
    number: "02",
    title: "Standar Keselamatan Tinggi",
    description: "Setiap proyek dikerjakan dengan mengikuti standar keselamatan nasional dan internasional untuk hasil yang aman dan terpercaya."
  },
  {
    number: "03",
    title: "Pengerjaan Tepat Waktu",
    description: "Kami berkomitmen menyelesaikan setiap proyek sesuai timeline yang telah disepakati dengan klien tanpa mengorbankan kualitas."
  },
  {
    number: "04",
    title: "Kualitas Material Terbaik",
    description: "Menggunakan material dan komponen berkualitas tinggi dari brand terpercaya untuk hasil optimal dan tahan lama."
  },
  {
    number: "05",
    title: "Dukungan Teknis Berkelanjutan",
    description: "Layanan konsultasi dan dukungan teknis tersedia untuk memastikan sistem Anda beroperasi sempurna dan efisien."
  },
  {
    number: "06",
    title: "Garansi Pekerjaan",
    description: "Semua pekerjaan dilindungi garansi untuk memberikan ketenangan pikiran dan jaminan kualitas jangka panjang."
  }
];

const statsData = [
  { value: 10, label: "Years of Experience", suffix: "+" },
  { value: 150, label: "Projects Completed", suffix: "+" },
  { value: 50, label: "Clients", suffix: "+" },
  { value: 30, label: "Professional Team", suffix: "+" }
];

// ========================
// HOOKS
// ========================
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};


// ========================
// NAVBAR COMPONENT
// ========================
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About Us', 'Services', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:block">
              PT Karya Usaha Sinergi
            </span>
            <span className="text-lg font-bold text-gray-900 sm:hidden">
              KUS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
              <span className="relative z-10 font-medium text-sm">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium mt-2">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ========================
// HERO SECTION COMPONENT
// ========================
const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop"
          alt="Electrical Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-blue-900/50"></div>
      </div>

     
      
      

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8 animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-white animate-slideDown">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Professional Electrical Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Solusi Instalasi Listrik Profesional untuk
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Bisnis dan Industri
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            PT Karya Usaha Sinergi menyediakan layanan instalasi dan perawatan sistem kelistrikan dengan standar keselamatan tinggi untuk berbagai kebutuhan industri dan komersial.
          </p>

          {/* CTA Buttons */}
          <div className="mb-20 flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hubungi Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button className="group relative border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden backdrop-blur-sm hover:border-white transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Lihat Layanan
                <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

         
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// ========================
// FLOATING DIVIDER
// ========================
const FloatingDivider: React.FC = () => {
  return (
    <div className="relative h-32 -mt-16 mb-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Center Circle */}
          <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          {/* Orbiting Elements */}
         
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

// ========================
// SERVICES SECTION COMPONENT
// ========================
const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="services">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              AREAS WHAT WE SERVE
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                {/* Decorative Circle */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              See All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// ========================
// WHY CHOOSE US COMPONENT
// ========================
const WhyChooseUs: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <Award className="w-4 h-4 text-blue-600" />
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              SOME REASONS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`space-y-4 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <span className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {feature.number}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========================
// STATS SECTION COMPONENT
// ========================
const StatsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Big Circle */}
          <div className="relative flex justify-center">
            <div className="relative group">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main Circle */}
              <div className={`relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center shadow-2xl transform transition-all duration-1000 ${
                isVisible ? 'scale-100 rotate-0' : 'scale-50 -rotate-45'
              }`}>
                <div className="text-center text-white relative z-10">
                  <div className="text-8xl font-bold mb-2">
                    {isVisible ? statsData[0].value : 0}
                    {statsData[0].suffix}
                  </div>
                  <div className="text-xl font-semibold text-blue-100">
                    {statsData[0].label}
                  </div>
                </div>

                {/* Inner Glow */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>

              {/* Decorative Arc */}
              <div className="absolute -left-20 top-0 w-40 h-80 opacity-30">
                <svg viewBox="0 0 100 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 80 0 Q 20 100 80 200"
                    fill="none"
                    stroke="url(#arcGradient)"
                    strokeWidth="40"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-blue-400 rounded-full animate-float opacity-60"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${-10 + Math.random() * 120}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats List */}
          <div className="space-y-10">
            {statsData.slice(1).map((stat, index) => (
              <StatItem key={index} stat={stat} isVisible={isVisible} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const StatItem: React.FC<{ stat: typeof statsData[0]; isVisible: boolean; index: number }> = ({ stat, isVisible, index }) => {
  const count = useCounter(stat.value, 2000, isVisible);

  return (
    <div 
      className={`flex items-center gap-6 group cursor-pointer transform transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative">
        <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
      </div>
      <div className="flex-1">
        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
          {count}{stat.suffix}
        </div>
        <div className="text-gray-700 font-semibold mt-2 text-lg">
          {stat.label}
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-600 to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

// ========================
// CTA SECTION COMPONENT
// ========================
const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
      
      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'movePattern 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 animate-bounce">
            <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeInUp">
            Percayakan Instalasi Listrik Anda kepada
            <span className="block mt-2 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Hubungi PT Karya Usaha Sinergi untuk solusi kelistrikan yang aman dan andal.
          </p>

          {/* CTA Button */}
          <div className="pt-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="group relative bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Hubungi Kami Sekarang
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-blue-100 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
              <Phone className="w-5 h-5" />
              <span className="font-medium">1-800-777-1234</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
              <Clock className="w-5 h-5" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes movePattern {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// ========================
// FOOTER COMPONENT
// ========================
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-white text-lg">PT KUS</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Solusi instalasi listrik profesional untuk bisnis dan industri dengan standar keselamatan tinggi.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, i) => (
                <div key={i} className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              {['Instalasi Listrik', 'Panel Listrik', 'Maintenance', 'Grounding System', 'Audit Kelistrikan'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg relative inline-block">
              Company
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Our Team', 'Projects', 'Careers', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">1-800-777-1234</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-medium text-white">Support</div>
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">24/7 Available</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <Users className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">info@kus.co.id</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 PT Karya Usaha Sinergi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ========================
// MAIN APP COMPONENT
// ========================
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FloatingDivider />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;