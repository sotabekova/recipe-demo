import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Desserts() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#43695D]">
            Dessert Recipes
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Sweet, indulgent, and irresistible dessert ideas to satisfy any craving.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/chocmuffins.png"
              alt="Chocolate Muffins"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Chocolate Muffins</h3>
              <p className="text-gray-700">
                Soft, fluffy muffins with rich cocoa flavor and melty chocolate chips.
              </p>
              <Link to="/desserts/chocolatemuffins">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/Crepes.png"
              alt="Crepes"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Crepes</h3>
              <p className="text-gray-700">
                Thin, delicate pancakes that can be filled with sweet or fruity fillings.
              </p>
              <Link to="/desserts/crepes">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/frenchtoast.png"
              alt="French Toast"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">French Toast</h3>
              <p className="text-gray-700">
                Golden, fluffy slices of bread lightly spiced with cinnamon and served sweet.
              </p>
              <Link to="/desserts/frenchtoast">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/baklava.png"
              alt="Baklava"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Baklava</h3>
              <p className="text-gray-700">
                Layers of flaky pastry, chopped nuts, and sweet syrup — a classic Middle Eastern dessert.
              </p>
              <Link to="/desserts/baklava">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/cheesecake.png"
              alt="Cheesecake"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Cheesecake</h3>
              <p className="text-gray-700">
                Rich and creamy cheesecake with a buttery crust, perfect for any celebration.
              </p>
              <Link to="/desserts/cheesecake">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/brownies.png"
              alt="Brownies"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Chocolate Brownies</h3>
              <p className="text-gray-700">
                Fudgy, rich chocolate brownies with a crisp top and gooey center.
              </p>
              <Link to="/desserts/brownies">
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
