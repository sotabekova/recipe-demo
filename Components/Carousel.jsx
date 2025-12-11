import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function Carousel() {
 const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
   {
     id: 1,
     image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
     title: 'Breakfast',
     description: 'Start your day right'
   },
   {
     id: 2,
     image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500',
     title: 'Lunch',
     description: 'Midday delights'
   },
   {
     id: 3,
     image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500',
     title: 'Dinner',
     description: 'Evening favorites'
   },
   {
     id: 4,
     image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500',
     title: 'Desserts',
     description: 'Sweet treats'
   },
   {
     id: 5,
     image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500',
     title: 'Snacks',
     description: 'Quick bites'
   },
   {
     id: 6,
     image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500',
     title: 'Beverages',
     description: 'Refreshing drinks'
   }
 ];


 const itemsPerView = 4;
 const maxIndex = Math.max(0, slides.length - itemsPerView);


 const nextSlide = () => {
   setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
 };


 const prevSlide = () => {
   setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
 };


 const goToSlide = (index) => {
   setCurrentIndex(index);
 };


 const handleViewRecipes = (slideTitle) => {
   alert(`Viewing ${slideTitle} recipes!`);
 };


 return (
   <div className=" flex justify-center p-8">
     <div className="w-full max-w-6xl">
       <div className="text text-center pt-5">
         <h1 className="text-amber-950 text-5xl md:text-[80px] pb-20">Search by Meal</h1>
       </div>
      
       <div className="relative">
         <button
           onClick={prevSlide}
           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
           aria-label="Previous"
         >
           <ChevronLeft className="w-6 h-6 text-gray-600" />
         </button>


         <button
           onClick={nextSlide}
           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
           aria-label="Next"
         >
           <ChevronRight className="w-6 h-6 text-gray-600" />
         </button>


         {/* Carousel Container */}
         <div className="overflow-hidden">
           <div
             className="flex transition-transform duration-500 ease-in-out gap-4"
             style={{
               transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
             }}
           >
             {slides.map((slide) => (
               <div
                 key={slide.id}
                  className="flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/4 px-2"
               >
                 <div className="rounded-2xl overflow-hidden shadow-lg bg-white group">
                   {/* Image */}
                   <div className="h-[250px]  overflow-hidden bg-gray-200">
                     <img
                       src={slide.image}
                       alt={slide.title}
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                     />
                   </div>
                  
                   {/* Text and Button Section */}
                   <div className="p-4 space-y-3">
                     <h3 className="text-amber-950 text-xl font-bold">
                       {slide.title}
                     </h3>
                     <p className="text-gray-600 text-sm">
                       {slide.description}
                     </p>
                     <button
                       className="bg-amber-950 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-900 transition-colors w-full hover:scale-105 transform duration-200"
                     >
                       View Recipes
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>


         {/* Dots Indicator */}
         <div className="flex justify-center gap-2 mt-6 mb-25">
           {Array.from({ length: maxIndex + 1 }).map((_, index) => (
             <button
               key={index}
               onClick={() => goToSlide(index)}
               className={`h-2 rounded-full transition-all duration-300 ${
                 currentIndex === index
                   ? 'w-8 bg-gray-700'
                   : 'w-2 bg-gray-300 hover:bg-gray-400'
               }`}
               aria-label={`Go to slide ${index + 1}`}
             />
           ))}
         </div>
       </div>
     </div>
   </div>
 );
}

