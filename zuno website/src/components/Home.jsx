import React from 'react';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import AppDownload from '../components/AppDownload';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemStatement />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <AppDownload />
    </div>
  );
}
