import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import BestSeller from './components/BestSeller';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <ProductCarousel />
      <BestSeller />
      <SocialProof />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;