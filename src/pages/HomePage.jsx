import React, { useState } from 'react'
import Services from '../component/Services';
import Why from '../component/Why';
import Product1 from '../component/Product1';
import Product2 from '../component/Product2';
import Product3 from '../component/Product3';
import Product4 from '../component/Product4';
import HeroSection from '../component/Hero';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
        <div className="min-h-screen bg-gray-50">
          {/* <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
          <HeroSection />
          <Product1 />
          <Product2/>
          <Product3/>
          <Product4/>
          <Services />
          <Why />
        </div>
    </div>
  )
}

export default HomePage