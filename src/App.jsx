import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import { 
  Research, 
  Stories, 
  Campus, 
  Facilities,
  Impact, 
  Faculty, 
  Quote, 
  CTA 
} from './components/Sections';
import Footer from './components/Footer';
import AboutTrident from './pages/AboutTrident';
import DepartmentLibraries from './pages/DepartmentLibraries';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="bg-soft-off-white min-h-screen font-body overflow-x-hidden">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={setCurrentPage} />
            <News />
            <Research />
            <Facilities />
            <Stories />
            <Campus />
            <Impact />
            <Faculty />
            <Quote />
            <CTA />
          </>
        )}
        {currentPage === 'about' && <AboutTrident onNavigate={setCurrentPage} />}
        {currentPage === 'libraries' && <DepartmentLibraries onNavigate={setCurrentPage} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
