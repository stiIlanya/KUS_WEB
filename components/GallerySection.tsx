'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from 'lucide-react';

// Data galeri - ganti dengan URL gambar Anda
const galleryData = [
  {
    id: 1,
    title: "Instalasi Panel Listrik Pabrik",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    description: "Instalasi panel distribusi 2000A untuk pabrik manufaktur"
  },
  {
    id: 2,
    title: "Sistem Grounding Gedung",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    description: "Pemasangan sistem pembumian gedung perkantoran 10 lantai"
  },
  {
    id: 3,
    title: "Instalasi Penerangan LED",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop",
    description: "Upgrade sistem pencahayaan ke LED efisien energi"
  },
  {
    id: 4,
    title: "Panel LVMDP & Capacitor Bank",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    description: "Instalasi LVMDP 3200A dengan sistem kompensasi daya"
  },
  {
    id: 5,
    title: "Transformator Distribution",
    category: "Power",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    description: "Pemasangan transformator 1600 kVA untuk kompleks industri"
  },
  {
    id: 6,
    title: "Maintenance Rutin Sistem",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    description: "Program perawatan berkala sistem kelistrikan pabrik"
  },
  {
    id: 7,
    title: "Instalasi Genset Backup",
    category: "Power",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    description: "Pemasangan genset 500 kVA dengan sistem ATS"
  },
  {
    id: 8,
    title: "Penangkal Petir External",
    category: "Protection",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    description: "Instalasi sistem proteksi petir Franklin Rod"
  },
  {
    id: 9,
    title: "Instalasi Fire Alarm System",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
    description: "Pemasangan sistem deteksi dan alarm kebakaran"
  }
];

const categories = ["All", "Industrial", "Commercial", "Lighting", "Power", "Maintenance", "Protection", "Safety"];

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredGallery = selectedCategory === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  // Intersection Observer untuk detect saat section terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Trigger animasi cards
            filteredGallery.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 120); // Delay 120ms per card untuk smooth effect
            });
          }
        });
      },
      {
        threshold: 0.1, // Trigger saat 10% section terlihat
        rootMargin: '0px 0px -100px 0px' // Sedikit offset dari bawah
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Reset animasi saat kategori berubah (setelah initial load)
  useEffect(() => {
    if (hasAnimated) {
      setVisibleCards([]);
      filteredGallery.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 80); // Lebih cepat untuk filter change
      });
    }
  }, [selectedCategory]);

  const openLightbox = (item: typeof galleryData[0]) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredGallery.length;
    } else {
      newIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    }
    
    setSelectedImage(filteredGallery[newIndex]);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" 
      id="gallery"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <ImageIcon className="w-4 h-4 text-blue-600" />
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              OUR PROJECTS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lihat berbagai proyek instalasi listrik yang telah kami kerjakan dengan standar kualitas dan keselamatan tertinggi
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transform transition-all duration-700 ease-out ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(item)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-60'
                }`}></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className={`text-sm text-gray-200 transition-all duration-300 ${
                    hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View All Projects
              <Maximize2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl max-h-[85vh] mx-auto px-4 animate-scaleIn">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">
                    {filteredGallery.findIndex(item => item.id === selectedImage.id) + 1} / {filteredGallery.length}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;