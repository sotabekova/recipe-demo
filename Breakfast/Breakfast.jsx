import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

export default function Breakfast() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#43695D]">
            Breakfast Recipes
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Easy, comforting, and delicious breakfast ideas to start your day
            right.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/pancake.png"
              alt="Pancakes"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
                Fluffy Pancakes
              </h3>
              <p className="text-sm text-gray-600">
                Light, fluffy pancakes perfect with maple syrup.
              </p>
              <a
                href="/pancakes"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/Crepes.png"
              alt="Crepes"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">Crepes</h3>
              <p className="text-sm text-gray-600">
                A quick, protein-packed breakfast classic.
              </p>
              <a
                href="/crepes"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/frenchtoast.png"
              alt="French Toast"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">French Toast</h3>
              <p className="text-sm text-gray-600">
                Golden, soft, and lightly spiced with cinnamon.
              </p>
              <a
                href="/french-toast"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/cheeseomelette.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
                Cheese Omelette
              </h3>
              <p className="text-sm text-gray-600">
                A quick, protein-packed breakfast classic.
              </p>
              <a
                href="/omelette"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>{" "}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/Shakshuka.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
               Shakshuka
              </h3>
              <p className="text-sm text-gray-600">
                A quick, protein-packed breakfast classic.
              </p>
              <a
                href="/shakshuka"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>{" "}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/chocmuffins.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
               Chocolate Muffins
              </h3>
              <p className="text-sm text-gray-600">
                A quick, protein-packed breakfast classic.
              </p>
              <a
                href="/omelette"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>{" "}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/omelette.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
                Cheese Omelette
              </h3>
              <p className="text-sm text-gray-600">
                A quick, protein-packed breakfast classic.
              </p>
              <a
                href="/omelette"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>{" "}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/omelette.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
                Cheese Omelette
              </h3>
              <p className="text-sm text-gray-600">
                A quick, protein-packed breakfast classic.
              </p>
              <a
                href="/omelette"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>{" "}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="/images/omelette.png"
              alt="Omelette"
              className="h-56 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#43695D]">
                Cheese Omelette
              </h3>
              <p className="text-sm text-gray-600">
                A quick, protein-packed breakfast classic.
              </p>
              <a
                href="/omelette"
                className="inline-block bg-[#6B9080] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition"
              >
                View Recipe
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
