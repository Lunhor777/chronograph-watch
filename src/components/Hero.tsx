import React from 'react';
import { Star, Truck, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Premium Collection</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Luxury Timepieces
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Redefined
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Discover our exclusive collection of premium sports chronograph watches. 
              Crafted for the modern gentleman who values precision, style, and excellence.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">5-Star Rated</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-amber-400/25"
              >
                Shop Collection
              </button>
            </div>
          </div>

          {/* Right Content - Featured Product */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-xl blur-xl"></div>
              <img 
                src="/WhatsApp Image 2025-07-31 at 22.55.06 (1).jpeg" 
                alt="Sports Chronograph Watch" 
                className="relative z-10 w-full h-96 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;