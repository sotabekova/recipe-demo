import React from "react";
import Navbar from "../Components/navbar";

function Uzbek() {
  return (
    <div>
      <Navbar />
      <div
        className=" w-full h-[600px] bg-cover md:h-[700px] lg:h-[800px] text-center pt-5 "
        style={{
          backgroundImage: "url('/images/milliybg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="unnav-text z-0 text-white text-[120px] pt-40 md:text-[150px] md:pt-52 lg:text-[200px] lg:pt-60">
          Uzbek
        </h1>

        <p className="text-white mx-7 md:text-[20px] lg:text-[25px]">
          Discover easy, delicious recipes made for everyday cooking. Explore,
          try, and make 
          something amazing today
        </p>
      </div>

      {/* Big grid div */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-4xl text-center  mb-12 font-bold">
         Uzbek Traditional dishes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plov */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/plov.png"
              alt="Plov"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Plov (Pilaf)</h3>
              <p className="text-gray-700">
                Fragrant rice with tender meat, carrots, onions, and aromatic
                spices. Plov is the heart of Uzbek celebrations.
              </p>
            </div>
          </div>
          {/* Shashlik */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/meatsomsa.png"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Meat Somsa</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>
          {/* Samsa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/samsa.jpg"
              alt="Samsa"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Samsa</h3>
              <p className="text-gray-700">
                Crispy pastries filled with meat, pumpkin, or potatoes. Baked in
                a traditional clay oven.
              </p>
            </div>
          </div>
          {/* Lagman */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/lagman.jpg"
              alt="Lagman"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Lagman</h3>
              <p className="text-gray-700">
                Hearty noodle soup with meat and vegetables. A comforting dish
                with Uyghur influence.
              </p>
            </div>
          </div>
          {/* Manti */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/manti.jpg"
              alt="Manti"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Manti</h3>
              <p className="text-gray-700">
                Steamed dumplings filled with spiced meat and onions. Served
                with sour cream or yogurt.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shashlik.jpg"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shashlik</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>{" "}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shashlik.jpg"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shashlik</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>{" "}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shashlik.jpg"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shashlik</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>{" "}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shashlik.jpg"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shashlik</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>{" "}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shashlik.jpg"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shashlik</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>{" "}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shashlik.jpg"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shashlik</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>{" "}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/chickensomsa.png"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Chicken Somsa</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers. Perfect for outdoor
                gatherings, served with bread and herbs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Uzbek;
