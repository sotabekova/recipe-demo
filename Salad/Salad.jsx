import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Breakfast() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#43695D]">
            Salad Recipes
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Easy, comforting, and delicious salad ideas to have with your meals.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/Caesarsalad.png"
              alt="Manti"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Caesar Salad</h3>
              <p className="text-gray-700">
                Romaine lettuce with creamy Caesar dressing, croutons, and
                Parmesan cheese.
              </p>
              <Link to={"/american/caesarsalad"}>
                {" "}
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  Veiw recipe
                </button>
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/greeksalad.png"
              alt="Greek Salad"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Greek Salad</h3>
              <p className="text-gray-700">
                Fresh tomatoes, cucumbers, olives, and feta with olive oil and
                herbs.
              </p>
              <Link to="/salads/greeksalad">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/avacadosalad.png"
              alt="Avocado Salad"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">Avocado Salad</h3>
              <p className="text-gray-700">
                Creamy avocado with tomatoes, onions, lemon juice, and olive
                oil.
              </p>
              <Link to="/salads/avocadosalad">
                <button className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/Pentuza.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
                Pentuza
              </h3>
              <p className="text-sm text-gray-600">
                A quick salad with noodles, vegetables, and meat.
              </p>
              <Link
                to="/salads/pentuza"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>{" "}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/olivie.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">Olivie</h3>
              <p className="text-sm text-gray-600">
               salad made with diced vegetables, eggs, pickles, and mayonnaise, often served as a festive side dish.
              </p>
              <Link
                to="/breakfast/shakshuka"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>{" "}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/fattoush.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
               Fattoush Salad
              </h3>
              <p className="text-sm text-gray-600">
               fresh Middle Eastern salad featuring crisp vegetables, herbs, and toasted pita pieces, all tossed in a tangy sumac dressing.
              </p>
              <Link
                to="/salads/fattoush"
                className="inline-flex items-center mt-4 px-4 py-2 bg-[#6B9080] text-white font-semibold rounded hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>

      <Footer />
    </>
  );
}
