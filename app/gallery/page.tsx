'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
      <GallerySection />
      <Footer />
    </div>
  );
}