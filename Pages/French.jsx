import React from "react";
import Navbar from "../Components/navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function French() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[600px] bg-cover md:h-[700px] lg:h-[800px] text-center pt-5"
        style={{
          backgroundImage: "url('/images/turkishbg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="unnav-text text-white text-[100px] pt-40 md:text-[140px] md:pt-52 lg:text-[180px] lg:pt-60">
          Turkish
        </h1>

        <p className="text-white mx-7 md:text-[20px] lg:text-[25px]">
          Explore rich and flavorful Turkish cuisine — from savory kebabs to
          sweet traditional desserts.
        </p>
      </div>

      {/* Signature Dishes */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-4xl text-center text-[#43695D] mb-12 font-bold">
          Turkish Dishes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kebabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/adanakebab.png"
              alt="Adana Kebab"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Adana Kebab</h3>
              <p className="text-gray-700">
                Spicy minced meat skewers grilled over open flame, bursting with
                bold Anatolian flavor.
              </p>
              <Link
                to="/turkish/adana-kebab"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>

          {/* Döner */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/donerkebab.png"
              alt="Doner Kebab"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Döner Kebab</h3>
              <p className="text-gray-700">
                Thinly sliced seasoned meat served in flatbread or wrap — a
                world-famous Turkish classic.
              </p>
              <Link
                to="/turkish/doner"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>

          {/* Pide */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/pide.png"
              alt="Turkish Pide"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Turkish Pide</h3>
              <p className="text-gray-700">
                Boat-shaped flatbread topped with cheese, meat, or vegetables —
                often called Turkish pizza.
              </p>
              <Link
                to="/turkish/pide"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>

          {/* Menemen */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/menemen.png"
              alt="Menemen"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Menemen</h3>
              <p className="text-gray-700">
                Traditional Turkish breakfast dish made with eggs, tomatoes,
                peppers, and olive oil.
              </p>
              <Link
                to="/turkish/menemen"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>

          {/* Baklava */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/baklava.png"
              alt="Baklava"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Baklava</h3>
              <p className="text-gray-700">
                Layers of flaky pastry filled with nuts and soaked in sweet
                syrup — an iconic Turkish dessert.
              </p>
              <Link
                to="/turkish/baklava"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>

          {/* Lahmacun */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/lahmacun.png"
              alt="Lahmacun"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Lahmacun</h3>
              <p className="text-gray-700">
                Thin flatbread topped with spiced minced meat, herbs, and lemon —
                light, crispy, and addictive.
              </p>
              <Link
                to="/turkish/lahmacun"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
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

export default French;
