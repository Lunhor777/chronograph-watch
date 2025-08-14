import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Sports Chronograph Watch",
      model: "SCW-2024-A1",
      price: 55,
      originalPrice: 89,
      image: "/WhatsApp Image 2025-07-31 at 22.55.06 (1).jpeg",
      rating: 4.9,
      reviews: 127,
      paymentLink: "https://pay.lunhor.shop/pro-d902da63-6dc7-47c9-be05-146190f28efc"
    },
    {
      id: 2,
      name: "Elite Chronograph Watch",
      model: "ECW-2024-B2",
      price: 55,
      originalPrice: 89,
      image: "/WhatsApp Image 2025-07-31 at 22.55.07 (1).jpeg",
      rating: 4.8,
      reviews: 89,
      paymentLink: "https://pay.lunhor.shop/r/29yfkX67z02L106OdHOH"
    },
    {
      id: 3,
      name: "Professional Chronograph Watch",
      model: "PCW-2024-C3",
      price: 55,
      originalPrice: 89,
      image: "/WhatsApp Image 2025-07-31 at 22.55.07 (2).jpeg",
      rating: 4.9,
      reviews: 156,
      paymentLink: "https://pay.lunhor.shop/r/214i05717fgfM4zUl"
    },
    {
      id: 4,
      name: "Executive Chronograph Watch",
      model: "XCW-2024-D4",
      price: 55,
      originalPrice: 89,
      image: "/WhatsApp Image 2025-07-31 at 22.55.06.jpeg",
      rating: 5.0,
      reviews: 203,
      paymentLink: "https://pay.lunhor.shop/r/96AQIDhP36d10e0jT4"
    },
    {
      id: 5,
      name: "Premium Chronograph Watch",
      model: "PCW-2024-E5",
      price: 55,
      originalPrice: 89,
      image: "/WhatsApp Image 2025-07-31 at 22.55.07 (3).jpeg",
      rating: 4.9,
      reviews: 178,
      paymentLink: "https://pay.lunhor.shop/r/9480u142ksX917Mn5M"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="collection" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover timepieces that blend traditional craftsmanship with modern innovation
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative mb-6">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-slate-400 mb-3">Model: {product.model}</p>
                      
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-slate-600'}`} 
                          />
                        ))}
                        <span className="text-slate-400 ml-2">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-amber-400">£{product.price}</span>
                        <span className="text-slate-500 line-through">£{product.originalPrice}</span>
                      </div>
                      
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 mb-4">
                        <span className="text-green-400 font-semibold">✓ Free Delivery</span>
                      </div>
                      
                      <a 
                        href={product.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-3 rounded-lg font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-200 transform hover:scale-105 text-center"
                      >
                        Buy Now - Free Delivery
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-white p-3 rounded-full hover:bg-slate-700 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-white p-3 rounded-full hover:bg-slate-700 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-amber-400' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
