import React from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/home/HomeAbout';
import HomeServices from '../components/home/HomeServices';
import HomeBlogPreview from '../components/home/HomeBlogPreview';
import HomePodcastPreview from '../components/home/HomePodcastPreview';
import HomeContact from '../components/home/HomeContact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeBlogPreview />
      <HomePodcastPreview />
      <HomeContact />
    </div>
  );
};

export default Home;