import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <div
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/images/aboutimg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold drop-shadow-lg">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-2xl drop-shadow-md">
          Discover our passion for food, flavors, and culinary creativity. We
          bring recipes from around the world right to your kitchen.
        </p>
      </div>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-5 py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/aboutstoryimg.png"
            alt="Cooking Story"
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#43695D]">
              Our Story
            </h2>
            <p className="text-gray-700 mb-3">
              We started this culinary journey with a simple goal: to share
              delicious recipes that anyone can make at home. From comforting
              classics to exciting international dishes, we want every cook to
              feel confident in the kitchen.
            </p>
            <p className="text-gray-700">
              Whether you’re a beginner or an experienced foodie, our recipes
              are designed to inspire, teach, and delight. Cooking should be
              fun, approachable, and full of flavor!
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-[#F7F7F7] p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#43695D]">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            To bring people together through the joy of cooking. We believe
            that great food creates memorable experiences, and our mission is
            to make those moments easy to create at home.
          </p>
        </div>

  
      </section>

      <Footer />
    </div>
  );
}

export default About;
