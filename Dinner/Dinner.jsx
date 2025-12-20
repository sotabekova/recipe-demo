import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Dinner() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#43695D]">
            Dinner Recipes
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Hearty, comforting, and delicious dinner ideas to enjoy any night of the week.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/biryani.png"
              alt="Chicken Biryani"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Chicken Biryani</h3>
              <p className="text-gray-700">
                Aromatic spiced rice layered with tender chicken, caramelized onions, and saffron.
              </p>
              <Link to="/dinner/biryani">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/rata.png"
              alt="Ratatouille"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Ratatouille</h3>
              <p className="text-gray-700">
                A French vegetable medley of zucchini, eggplant, peppers, and tomatoes simmered with herbs.
              </p>
              <Link to="/dinner/ratatouille">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/beefstew.png"
              alt="Beef Stew"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Beef Stew</h3>
              <p className="text-gray-700">
                Tender beef chunks slow-cooked with carrots, potatoes, and rich gravy.
              </p>
              <Link to="/dinner/beef-stew">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/Shakshuka.png"
              alt="Shakshuka"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Shakshuka</h3>
              <p className="text-gray-700">
                Poached eggs in a spiced tomato and pepper sauce, perfect for a light yet savory dinner.
              </p>
              <Link to="/dinner/shakshuka">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/teriyaki.png"
              alt="Teriyaki Chicken"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Teriyaki Chicken</h3>
              <p className="text-gray-700">
                Juicy chicken glazed with sweet and savory teriyaki sauce, served with steamed rice.
              </p>
              <Link to="/dinner/teriyaki-chicken">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/curry.png"
              alt="Vegetable Curry"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Vegetable Curry</h3>
              <p className="text-gray-700">
                A hearty mix of vegetables simmered in a fragrant coconut curry sauce.
              </p>
              <Link to="/dinner/vegetable-curry">
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
