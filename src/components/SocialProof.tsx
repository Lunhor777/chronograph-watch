import React from 'react';
import { Star, Users, Award, Shield } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "James Mitchell",
      location: "London, UK",
      rating: 5,
      comment: "Absolutely stunning watch! The quality exceeded my expectations. Delivery was incredibly fast and the packaging was premium.",
      verified: true
    },
    {
      name: "David Thompson",
      location: "Manchester, UK",
      rating: 5,
      comment: "Perfect timepiece for business meetings. The chronograph functions work flawlessly and it looks incredibly sophisticated.",
      verified: true
    },
    {
      name: "Robert Clarke",
      location: "Birmingham, UK",
      rating: 5,
      comment: "Best purchase I've made this year. The watch feels premium and the customer service was exceptional. Highly recommend!",
      verified: true
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Customers" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Award, value: "99%", label: "Satisfaction Rate" },
    { icon: Shield, value: "2 Years", label: "Warranty" }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-400">
            Join thousands of satisfied customers across the UK
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.location}</div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center space-x-1 text-green-400 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-slate-300">Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-slate-300">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300">Trusted by 50K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;