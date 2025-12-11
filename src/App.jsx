import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

/**
 * Scrolls to top of page on route change
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Reusable wrapper for pages that need consistent styling
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {boolean} props.showStars - Whether to show the stars canvas background
 * @param {boolean} props.compact - Whether to use compact layout (fits viewport without scroll)
 */
const PageWrapper = ({ children, showStars = false, compact = false }) => {
  return (
    <div className={`relative z-0 pt-16 ${compact ? 'h-screen overflow-hidden' : ''}`}>
      {children}
      {showStars && <StarsCanvas />}
    </div>
  );
};

// Home page - Hero section with About and Projects
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Tech /> */}
      <Works />
    </>
  );
};

// Work/Experience page - Shows work experience timeline
const WorkPage = () => {
  return (
    <PageWrapper>
      <div className="sm:px-16 px-6 max-w-7xl mx-auto pt-40">
        <Experience />
      </div>
    </PageWrapper>
  );
};

// Contact page - Contact form
const ContactPage = () => {
  return (
    <PageWrapper>
      <div className="sm:px-16 px-6 max-w-7xl mx-auto">
        <Contact />
      </div>
    </PageWrapper>
  );
};

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <div className="relative z-0 bg-primary min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
