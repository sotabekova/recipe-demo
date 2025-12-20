import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Beverages() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#43695D]">
            Beverages
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Refreshing drinks and beverages to quench your thirst and delight your taste buds.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/fruittea.png"
              alt="Green Tea"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Green Tea</h3>
              <p className="text-gray-700">
                A soothing, antioxidant-rich tea that’s perfect for relaxation.
              </p>
              <Link to="/beverages/greentea">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/smoothie.png"
              alt="Fruit Smoothie"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Fruit Smoothie</h3>
              <p className="text-gray-700">
                A refreshing blend of fresh fruits, yogurt, and a hint of honey.
              </p>
              <Link to="/beverages/fruitsmoothie">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/coffee.png"
              alt="Iced Coffee"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Iced Coffee</h3>
              <p className="text-gray-700">
                Chilled coffee served over ice, perfect for a refreshing energy boost.
              </p>
              <Link to="/beverages/icedcoffee">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/lemonade.png"
              alt="Lemonade"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Lemonade</h3>
              <p className="text-gray-700">
                Refreshing citrus drink with a perfect balance of sweet and tart.
              </p>
              <Link to="/beverages/lemonade">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/lassi.png"
              alt="Mango Lassi"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Mango Lassi</h3>
              <p className="text-gray-700">
                A creamy Indian yogurt drink blended with ripe mangoes and a hint of cardamom.
              </p>
              <Link to="/beverages/mangolassi">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/chocmilkshake.png"
              alt="Chocolate Milkshake"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Chocolate Milkshake</h3>
              <p className="text-gray-700">
                Creamy chocolate shake made with milk, ice cream, and cocoa — a classic indulgence.
              </p>
              <Link to="/beverages/chocolatemilkshake">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
