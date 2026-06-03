import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import StorySection from './components/StorySection.jsx';
import OfferSection from './components/OfferSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import NewsletterFooter from './components/NewsletterFooter.jsx';
import useScrollReveal from './useScrollReveal.js';

export default function App() {
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
