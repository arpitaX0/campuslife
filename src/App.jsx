import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import { 
  Research, 
  Stories, 
  Stats, 
  Campus, 
  Impact, 
  Faculty, 
  Quote, 
  CTA 
} from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-soft-off-white min-h-screen font-body overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <News />
        <Research />
        <Stories />
        <Stats />
        <Campus />
        <Impact />
        <Faculty />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
