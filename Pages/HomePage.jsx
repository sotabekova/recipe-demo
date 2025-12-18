import React from 'react'
import Navbar from '../Components/navbar'
import UnderNav from "../Components/UderNav";
import Carousel from '../Components/Carousel';
import CuisineSection from '../Components/CuisineSection';
import Footer from '../Components/Footer';


function HomePage() {
  return (
    <div>
        <Navbar />
        <UnderNav />
        <Carousel />
        <CuisineSection />
        <Footer /> 
    </div>
  )
}

export default HomePage