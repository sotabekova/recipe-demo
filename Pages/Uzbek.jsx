import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


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
          try, and make something amazing today
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
              <a
                href="/uzbek/plov"
                className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>

          {/* Meat Somsa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/meatsomsa.png"
              alt="Meat Somsa"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Meat Somsa</h3>
              <p className="text-gray-700">
                Crispy baked pastries filled with juicy minced meat and onions.
              </p>
              <a
                href="/uzbek/meatsomsa"
                className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>

          {/* Chicken Somsa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/chickensomsa.png"
              alt="Chicken Somsa"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Chicken Somsa</h3>
              <p className="text-gray-700">
                Golden pastries filled with seasoned chicken, baked until crisp.
              </p>
              <a
                href="/uzbek/chickensomsa"
                className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>

          {/* Lagman */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/Lagman.png"
              alt="Lagman"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Lagman</h3>
              <p className="text-gray-700">
                Hand-pulled noodles served with a rich meat and vegetable sauce.
              </p>
              <Link to={"/uzbek/lagman"}>
                <button className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition">Veiw Recipe</button>
              </Link>
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
                Steamed dumplings filled with spiced meat and onions.
              </p>
              <a
                href="/uzbek/manti"
                className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>

          {/* Shashlik */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shashlik.jpg"
              alt="Shashlik"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shashlik</h3>
              <p className="text-gray-700">
                Marinated meat grilled on skewers, perfect for outdoor
                gatherings.
              </p>
              <a
                href="/uzbek/shashlik"
                className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>

          {/* Shurpa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/shurpa.jpg"
              alt="Shurpa"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shurpa</h3>
              <p className="text-gray-700">
                A hearty Uzbek soup made with lamb, vegetables, and herbs.
              </p>
              <a
                href="/uzbek/shurpa"
                className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>

          {/* Katlama */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/katlama.jpg"
              alt="Katlama"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Katlama</h3>
              <p className="text-gray-700">
                Layered Uzbek flatbread, crispy outside and soft inside.
              </p>
              <a
                href="/uzbek/katlama"
                className="inline-block bg-[#6B9080] text-white mt-4 px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Uzbek;
