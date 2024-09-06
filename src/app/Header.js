import React, { useState, useEffect } from 'react';
import { Media } from '../utils/media';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/pics/vineyard.jpg", "/pics/vineyard2.jpg", "/pics/grapes.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Media greaterThan="mobile">
        <DesktopHeader currentImage={images[currentImageIndex]} />
      </Media>
      <Media at="mobile">
        <MobileHeader />
      </Media>
    </>
  );
};

export default Header;