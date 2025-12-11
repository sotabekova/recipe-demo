import React from 'react';
import Navbar from '../Components/navbar';

function Chinese() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[600px] bg-cover md:h-[700px] lg:h-[800px] text-center pt-5"
        style={{
          backgroundImage: "url('/images/Chinesebg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="unnav-text z-0 text-white text-[120px] pt-40 md:text-[150px] md:pt-52 lg:text-[200px] lg:pt-60">
          Chinese
        </h1>

        <p className="text-white mx-7 md:text-[20px] lg:text-[25px]">
          Discover classic and delicious Italian recipes made for every occasion. Explore, try, and enjoy!
        </p>
      </div>

      {/* Signature Dishes */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-4xl text-center text-[#f45b69] mb-12 font-bold">Signature Dishes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Spaghetti Carbonara */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/spaghetti-carbonara.jpg" alt="Spaghetti Carbonara" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Spaghetti Carbonara</h3>
              <p className="text-gray-700">
                Classic spaghetti with pancetta, eggs, Parmesan cheese, and black pepper. Simple yet indulgent.
              </p>
            </div>
          </div>

          {/* Margherita Pizza */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/margherita-pizza.jpg" alt="Margherita Pizza" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Margherita Pizza</h3>
              <p className="text-gray-700">
                Thin crust pizza topped with tomato, fresh mozzarella, and basil. A timeless Italian favorite.
              </p>
            </div>
          </div>

          {/* Lasagna */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/lasagna.jpg" alt="Lasagna" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Lasagna</h3>
              <p className="text-gray-700">
                Layers of pasta, rich meat sauce, béchamel, and cheese baked to perfection.
              </p>
            </div>
          </div>

          {/* Risotto alla Milanese */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/risotto-milanese.jpg" alt="Risotto alla Milanese" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Risotto alla Milanese</h3>
              <p className="text-gray-700">
                Creamy risotto flavored with saffron, a luxurious Northern Italian specialty.
              </p>
            </div>
          </div>

          {/* Tiramisu */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/tiramisu.jpg" alt="Tiramisu" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Tiramisu</h3>
              <p className="text-gray-700">
                Coffee-soaked ladyfingers layered with mascarpone cream, dusted with cocoa. Perfect dessert!
              </p>
            </div>
          </div>

          {/* Bruschetta */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/bruschetta.jpg" alt="Bruschetta" className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Bruschetta</h3>
              <p className="text-gray-700">
                Toasted bread with tomatoes, garlic, basil, and olive oil. Fresh and simple starter.
              </p>
            </div>
          </div>

        </div>
      </section>

     

     
    </div>
  );
}

export default Chinese;
