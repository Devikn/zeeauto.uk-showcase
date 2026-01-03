import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      <Helmet>
        <title>ZeeAuto.uk | Luxury Car Customizations West London</title>
        <meta
          name="description"
          content="Premium automotive customization in West London. Ambient lighting, starlights, remapping, audio upgrades, and more. Transform your car into a masterpiece with ZeeAuto.uk."
        />
        <meta
          name="keywords"
          content="luxury car customization, ambient lighting, starlight headliner, car remapping, audio upgrades, West London, car modifications, ZeeAuto"
        />
        <meta property="og:title" content="ZeeAuto.uk | Luxury Car Customizations" />
        <meta
          property="og:description"
          content="Transform your car into a masterpiece with premium automotive customization services in West London."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://zeeauto.uk" />
      </Helmet>

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
