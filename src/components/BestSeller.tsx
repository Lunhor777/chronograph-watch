import React from 'react';
import { Star, Trophy, Truck } from 'lucide-react';

const BestSeller = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium">Best Seller</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Customer Favourite
          </h2>
          <p className="text-xl text-slate-400">
            Our most popular timepiece, loved by thousands
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5 rounded-2xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-xl blur-xl"></div>
                <img 
                  src="/WhatsApp Image 2025-07-31 at 22.55.06 (1).jpeg" 
                  alt="Best Selling Sports Chronograph Watch" 
                  className="relative z-10 w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg border-2 border-white/20 backdrop-blur-sm">
                  Best Seller
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                  <span className="text-slate-400 ml-2">(1,247 reviews)</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  Sports Chronograph Watch
                </h3>
                <p className="text-amber-400 font-semibold mb-4">Model: SCW-2024-A1</p>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Our flagship timepiece combines precision Swiss movement with contemporary design. 
                  Features include water resistance, scratch-resistant sapphire crystal, and premium leather strap.
                </p>

                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                  <span className="text-4xl font-bold text-amber-400">£55</span>
                  <span className="text-2xl text-slate-500 line-through">£89</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    Save £34
                  </span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">Swiss Movement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">Water Resistant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">Sapphire Crystal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300">Premium Leather</span>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Truck className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Free Next-Day Delivery</span>
                  </div>
                </div>

                <a 
                  href="https://pay.lunhor.shop/pro-d902da63-6dc7-47c9-be05-146190f28efc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-4 rounded-lg font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-amber-400/25 text-center"
                >
                  Buy Now - Free Delivery
                </a>

                <p className="text-slate-400 text-sm mt-4 text-center lg:text-left">
                  ⚡ Limited time offer • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;