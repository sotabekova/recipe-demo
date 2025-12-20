import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Lahmacun() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <Navbar />

        <h1 className="pt-20 text-3xl md:text-4xl font-bold text-center">
          Lahmacun
        </h1>

        <p className="text-center text-gray-700">
          A thin and crispy Turkish flatbread topped with spiced minced meat,
          tomatoes, peppers, and herbs — light, zesty, and irresistibly flavorful.
        </p>

        <img
          src="/images/lahmacun.png"
          alt="Lahmacun"
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="font-bold">Prep</p>
            <p>30 min</p>
          </div>
          <div>
            <p className="font-bold">Cook</p>
            <p>10 min</p>
          </div>
          <div>
            <p className="font-bold">Servings</p>
            <p>6–8 pieces</p>
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
              <li>250 g lamb or beef mince</li>
              <li>2 ripe tomatoes</li>
              <li>1 red bell pepper</li>
              <li>1 small onion</li>
              <li>2 cloves garlic</li>
              <li>2 tbsp tomato paste</li>
              <li>2 tbsp olive oil</li>
              <li>1 tsp paprika</li>
              <li>1 tsp red pepper flakes</li>
              <li>½ tsp ground cumin</li>
              <li>Salt & black pepper, to taste</li>
              <li>6–8 thin flatbread or lahmacun dough rounds</li>
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Finely blend tomatoes, pepper, onion, and garlic until smooth.
              </li>
              <li>
                Transfer mixture to a bowl and add mince, tomato paste, olive oil,
                and spices. Mix thoroughly.
              </li>
              <li>
                Preheat oven to 250°C (480°F) with a baking tray inside.
              </li>
              <li>
                Spread a very thin layer of meat mixture evenly over each dough.
              </li>
              <li>
                Place lahmacun onto the hot tray and bake for 7–10 minutes until
                edges are crisp.
              </li>
              <li>
                Serve hot with parsley, lemon wedges, and sliced onions.
              </li>
            </ol>
          </section>
        </section>

        <section className="bg-gray-50 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Spread topping very thin — thickness kills crispiness.</li>
            <li>High heat is essential for authentic texture.</li>
            <li>Fresh lemon juice right before eating is magic.</li>
            <li>Traditionally rolled and eaten by hand.</li>
          </ul>
        </section>

        <section className="pt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Watch Video
          </h1>
          <div className="flex justify-center">
            <iframe
              className="h-[250px] w-[400px] md:h-[500px] md:w-[900px]"
             src="https://www.youtube.com/embed/Tf6kSywDcpk?si=F3xlFUw5CokekKmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Lahmacun;
