import React, { useState, useEffect } from 'react';
import { Menu, X, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Clock className="w-8 h-8 text-amber-400" />
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-sm"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Lunhor
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#collection" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
              Collection
            </a>
            <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
              About
            </a>
            <a href="#faq" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
              FAQ
            </a>
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-200 transform hover:scale-105">
              Shop Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
            <nav className="px-4 py-4 space-y-4">
              <a href="#collection" className="block text-slate-300 hover:text-amber-400 transition-colors duration-200">
                Collection
              </a>
              <a href="#about" className="block text-slate-300 hover:text-amber-400 transition-colors duration-200">
                About
              </a>
              <a href="#faq" className="block text-slate-300 hover:text-amber-400 transition-colors duration-200">
                FAQ
              </a>
              <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-200">
                Shop Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;