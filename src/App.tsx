import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InstagramBlogs from './components/InstagramBlogs';
import PodcastVideos from './components/PodcastVideos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <InstagramBlogs />
      <PodcastVideos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;