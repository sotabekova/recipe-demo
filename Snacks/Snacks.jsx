import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Snacks() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#43695D]">
            Snack Recipes
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Quick, tasty, and satisfying snack ideas to enjoy anytime.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/springrolls.png"
              alt="Spring Rolls"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Spring Rolls</h3>
              <p className="text-gray-700">
                Crispy rolls filled with vegetables and served with a tangy dipping sauce.
              </p>
              <Link to="/snacks/spring-rolls">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/samosa.png"
              alt="Samosa"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Samosa</h3>
              <p className="text-gray-700">
                Golden-fried pastry pockets stuffed with spiced potatoes, peas, and sometimes meat.
              </p>
              <Link to="/snacks/samosa">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/bruschetta.png"
              alt="Bruschetta"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Bruschetta</h3>
              <p className="text-gray-700">
                Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.
              </p>
              <Link to="/snacks/bruschetta">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/cheesestick.png"
              alt="Cheese Sticks"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Cheese Sticks</h3>
              <p className="text-gray-700">
                Crispy breaded cheese sticks, perfect for dipping in marinara sauce.
              </p>
              <Link to="/snacks/cheese-sticks">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/hummus.png"
              alt="Hummus with Pita"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Hummus & Pita</h3>
              <p className="text-gray-700">
                Creamy chickpea dip served with warm pita bread and fresh veggies.
              </p>
              <Link to="/snacks/hummus">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/popcorn.png"
              alt="Seasoned Popcorn"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Seasoned Popcorn</h3>
              <p className="text-gray-700">
                Fluffy popcorn tossed with savory or sweet seasonings — a perfect movie snack.
              </p>
              <Link to="/snacks/popcorn">
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
