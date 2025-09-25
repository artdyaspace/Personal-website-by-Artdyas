import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import MouseSplashEffect from './components/MouseSplashEffect';
import BlobCursor from './components/BlobCursor';

export type ActiveSection = 'home' | 'about' | 'projects' | 'contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'about', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as ActiveSection);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // A section is active when 50% of it is visible
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#070A13] text-white overflow-x-hidden relative">
      <BlobCursor 
        blobType="blob"
        fillColor="#9747FF"
        trailCount={3}
        sizes={[15, 25, 35]}
        innerSizes={[6, 12, 18]}
        opacities={[0.9, 0.6, 0.3]}
        shadowColor="rgba(151, 71, 255, 0.4)"
        shadowBlur={8}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.4}
        zIndex={100}
      />
      <MouseSplashEffect />
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
