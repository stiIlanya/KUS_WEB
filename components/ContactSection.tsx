'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah dikirim.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161E54]/90 via-[#1e2870]/85 to-[#161E54]/90"></div>
          <div className="absolute inset-0 bg-[#161E54]/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Contact us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            PT Karya Usaha Sinergi is ready to provide the right solution according to your needs
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in touch
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                PT Karya Usaha Sinergi siap melayani kebutuhan instalasi listrik Anda dengan solusi terbaik dan profesional.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Head Office */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Jalan Cempaka Wangi No 22<br />
                      Jakarta - Indonesia
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-sm text-gray-600">hello@yourdomain.ltd</p>
                    <p className="text-sm text-gray-600">hello@yourdomain.ltd</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-sm text-gray-600">Phone : +6221.2002.2012</p>
                    <p className="text-sm text-gray-600">Fax : +6221.2002.2013</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Follow our social media</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3 p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50"
                    />
                  </div>
                </div>

                {/* Phone and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 resize-none bg-gray-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#161E54] to-[#2a3470] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#1e2870] hover:to-[#161E54] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full h-[500px] relative">
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.015198410543!2d106.75074703746296!3d-6.5841207614861545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c538931fd7f7%3A0xf550d7ae4a67f435!2sPT.%20KARYA%20USAHA%20SINERGI!5e0!3m2!1sen!2sus!4v1770018111251!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[0.3]"
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;