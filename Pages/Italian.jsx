import React from "react";
import Navbar from "../Components/navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Italian() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[600px] bg-cover md:h-[700px] lg:h-[800px] text-center pt-5"
        style={{
          backgroundImage: "url('/images/Italybg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="unnav-text z-0 text-white text-[120px] pt-40 md:text-[150px] md:pt-52 lg:text-[200px] lg:pt-60">
          Italian
        </h1>

        <p className="text-white mx-7 md:text-[20px] lg:text-[25px]">
          Discover classic and delicious Italian recipes made for every
          occasion. Explore, try, and enjoy!
        </p>
      </div>

      {/* Signature Dishes */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-4xl text-center text-[#43695D] mb-12 font-bold">
          Italian Dishes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fettuccine Alfredo */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/alfredo.png"
              alt="Spaghetti Carbonara"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">
                Fettuccine Alfredo
              </h3>
              <p className="text-gray-700">
                Classic spaghetti with pancetta, eggs, Parmesan cheese, and
                black pepper. Simple yet indulgent.
              </p>
              
              <Link
                to="/italian/fettuccine-alfredo"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
               <button>
                Veiw recipe
               </button>
               
              </Link>
            </div>
          </div>

          {/* Margherita Pizza */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/Margharita.png"
              alt="Margherita Pizza"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Margherita Pizza</h3>
              <p className="text-gray-700">
                Thin crust pizza topped with tomato, fresh mozzarella, and
                basil. A timeless Italian favorite.
              </p>
              <Link
                to="/italian/margherita-pizza"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
                
              </Link>
            </div>
          </div>

          {/* Lasagna */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/lasagna.png"
              alt="Lasagna"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Lasagna</h3>
              <p className="text-gray-700">
                Layers of pasta, rich meat sauce, béchamel, and cheese baked to
                perfection.
              </p>
               <Link
                to="/italian/lasagna"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
                
              </Link>
            </div>
          </div>

          {/* focaccia */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/focaccia.png"
              alt="Risotto alla Milanese"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Focaccia Bread</h3>
              <p className="text-gray-700">
                Creamy risotto flavored with saffron, a luxurious Northern
                Italian specialty.
              </p>
               <Link
                to="/italian/focaccia"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
                
              </Link>
            </div>
          </div>

          {/* Tiramisu */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/tiramisu.png"
              alt="Tiramisu"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Tiramisu</h3>
              <p className="text-gray-700">
                Coffee-soaked ladyfingers layered with mascarpone cream, dusted
                with cocoa. Perfect dessert!
              </p>
               <Link
                to="/italian/tiramisu"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
                
              </Link>
            </div>
          </div>

          {/* ChickenParm */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/chickenparm.png"
              alt="Bruschetta"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">
                Chicken Parmigiana
              </h3>
              <p className="text-gray-700">
                Toasted bread with tomatoes, garlic, basil, and olive oil. Fresh
                and simple starter.
              </p>
              <Link
                to="/italian/chickenparm"
                className="inline-flex items-center px-4 py-2 mt-4 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Italian;
