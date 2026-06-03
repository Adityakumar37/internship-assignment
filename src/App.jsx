import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import StorySection from './components/StorySection.jsx';
import OfferSection from './components/OfferSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import NewsletterFooter from './components/NewsletterFooter.jsx';
import useScrollReveal from './useScrollReveal.js';

import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Ensure we always start at the top and on the root path
    window.scrollTo(0, 0);
    if (window.location.pathname !== '/') {
      window.history.replaceState(null, '', '/');
    }
  }, []);
  useScrollReveal();


  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <OfferSection />
        <Testimonials />
      </main>
      <NewsletterFooter />
    </>
  );
}
