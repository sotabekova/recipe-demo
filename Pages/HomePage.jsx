import React from 'react'
import Navbar from '../Components/navbar'
import UnderNav from "../Components/underNav";
import Carousel from '../Components/Carousel';
import CuisineSection from '../Components/CuisineSection';


function HomePage() {
  return (
    <div>
        <Navbar />
        <UnderNav />
        <Carousel />
        <CuisineSection />
    </div>
  )
}

export default HomePage