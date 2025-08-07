import React from 'react';
import { Clock, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Clock className="w-8 h-8 text-amber-400" />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-sm"></div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Lunhor
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Crafting exceptional timepieces for the modern gentleman. 
              Where Swiss precision meets contemporary design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#collection" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Collection</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Care Instructions</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Returns & Exchanges</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Warranty</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Track Your Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">123 Regent Street</p>
                  <p className="text-slate-400">London, W1B 4HA</p>
                  <p className="text-slate-400">United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-slate-400">+44 20 7123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-slate-400">hello@lunhor.co.uk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Lunhor. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-6 text-slate-500 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>UK Registered</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;