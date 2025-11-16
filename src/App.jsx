
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>NeptyAI - AI-Powered Network Intelligence Platform</title>
        <meta name="description" content="Transform your network operations with NeptyAI's intelligent automation, predictive analytics, and real-time monitoring. Start your free trial today." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <UseCases />
        <SocialProof />
        <Pricing />
        <AboutUs />
        <FAQ />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
