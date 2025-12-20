import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function CheeseOmelette() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Cheese Omelette
        </h1>

        <p className="text-center text-gray-700">
          Fluffy eggs folded around melted cheese — simple, creamy, and endlessly
          satisfying. A breakfast classic done right.
        </p>

        <img
          src="/images/cheeseomelette.png"
          alt="Cheese omelette"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>5 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>5 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>1 omelette</p>
          </div>
          <div>
            <p className="font-bold">Difficulty</p>
            <p>Easy</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>2–3 eggs</li>
              <li>2 tbsp milk or cream</li>
              <li>Salt & black pepper, to taste</li>
              <li>1 tbsp butter</li>
              <li>½ cup grated cheese (cheddar, mozzarella, or gruyère)</li>
              <li>Fresh herbs (optional)</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Whisk eggs with milk, salt, and pepper until well combined.
              </li>
              <li>
                Heat butter in a non-stick pan over medium-low heat.
              </li>
              <li>
                Pour in egg mixture and let it set slightly without stirring.
              </li>
              <li>
                Sprinkle cheese evenly over one half of the omelette.
              </li>
              <li>
                Fold gently and cook until cheese melts and eggs are just set.
              </li>
              <li>
                Slide onto a plate and garnish with herbs if desired.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Low heat keeps the omelette tender.</li>
            <li>Grate cheese finely for faster melting.</li>
            <li>Don’t overcook — soft eggs are the goal.</li>
            <li>Add mushrooms, spinach, or ham for variation.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/5__zptEU9vE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default CheeseOmelette;
