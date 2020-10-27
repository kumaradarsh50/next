import React, { useState } from 'react';
import Navbar from '../componets/Navbar';
import Sidebar from '../componets/Sidebar';
import HeroSection from '../componets/HeroSection';
import InfoSection from '../componets/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../componets/InfoSection/Data';
import Services from '../componets/Services';
import Footer from '../componets/Footer';

const Home = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
