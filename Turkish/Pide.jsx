import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Pide() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Turkish Pide
        </h1>

        <p className="text-center text-gray-700">
          A boat-shaped Turkish flatbread filled with savory toppings like
          minced meat, cheese, or vegetables — crispy edges, soft center, and
          endlessly comforting.
        </p>

        <img
          src="/images/pide.png"
          alt="Turkish pide"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>35 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>15 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>4–6 pieces</p>
          </div>
          <div>
            <p className="font-bold">Difficulty</p>
            <p>Medium</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>3 cups all-purpose flour</li>
              <li>1 cup warm water</li>
              <li>1 tsp sugar</li>
              <li>1 tsp salt</li>
              <li>1 tbsp olive oil</li>
              <li>1 tsp instant yeast</li>
              <li>300 g minced meat (beef or lamb)</li>
              <li>1 onion, finely chopped</li>
              <li>1 green pepper, finely chopped</li>
              <li>2 tomatoes, finely diced</li>
              <li>1 tsp paprika</li>
              <li>Salt & black pepper, to taste</li>
              <li>1 egg yolk (for brushing edges)</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Mix warm water, sugar, and yeast. Let sit for 5 minutes until
                foamy.
              </li>
              <li>
                Add flour, salt, and olive oil. Knead into a soft dough and let
                rise for 1 hour.
              </li>
              <li>Mix minced meat with onion, pepper, tomatoes, and spices.</li>
              <li>Divide dough into portions and roll into oval shapes.</li>
              <li>
                Spread filling evenly, leaving edges clear. Fold and pinch ends
                to form a boat shape.
              </li>
              <li>Brush edges with egg yolk.</li>
              <li>Bake at 230°C (450°F) for 12–15 minutes until golden.</li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Dough should be soft, not stiff.</li>
            <li>Don’t overload the filling — balance is key.</li>
            <li>
              Cheese or egg can be added during the last minutes of baking.
            </li>
            <li>Serve hot, sliced, and shared.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
              src="https://www.youtube.com/embed/oNUK8fV06D8?si=xejxs9DXEUy4c5fu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Pide;
