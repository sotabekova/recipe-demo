import React from "react";
import { Link } from "react-router-dom";

export default function CuisineSection() {
  const cuisines = [
    { name: "Italian", image: "/images/Italybg.png", link: "/italian" },
    { name: "Uzbek", image: "/images/milliybg.png", link: "/uzbek" },
    { name: "Turkish", image: "/images/turkishbg.png", link: "/turkish" },
    { name: "American", image: "/images/americabg.png", link: "/american" },
    { name: "French", image: "/images/frenchbg.png", link: "/french" },
    { name: "Chinese", image: "/images/Chinesebg.png", link: "/chinese" },
  ];

  return (
    <div className="w-full pb-20 px-8 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[#43695D] text-4xl md:text-6xl font-bold mb-3">
            Browse by Cuisine
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore dishes from around the world and discover your next favorite flavor.
          </p>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6" >
          {cuisines.map((cuisine, index) => (
            <Link key={index} to={cuisine.link} className="group cursor-pointer">
              <div className="w-full h-[220px] md:h-[280px] lg:h-[330px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-center mt-3 text-[#43695D] font-semibold text-lg">
                {cuisine.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
