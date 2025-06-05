
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LiveCaseCounter from '../components/LiveCaseCounter';
import MediationStory from '../components/MediationStory';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <LiveCaseCounter />
      <MediationStory />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
